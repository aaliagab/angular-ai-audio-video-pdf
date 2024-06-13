import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-content-upload',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.scss']
})
export class ContentUploadComponent {
  file: File | null = null;
  sourceId: string = '';
  accesstokenId: string = '';
  response: string = '';

  constructor(private globalService: GlobalService) { }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (!this.file || !this.sourceId || !this.accesstokenId) {
      return;
    }

    const formData = new FormData();

    const fileType = this.file.type;
    let fieldName = '';

    if (fileType.startsWith('application/pdf')) {
        formData.append('pdf', this.file);
        fieldName = 'pdf';
    } else if (fileType.startsWith('audio/')) {
        formData.append('audio', this.file);
        fieldName = 'audio';
    } else if (fileType.startsWith('video/')) {
        formData.append('video', this.file);
        fieldName = 'video';
    } else {
        console.error('Invalid file type');
        return;
    }

    const endpoint = fieldName === 'pdf' ? '/pdf/content/upload' :
                     fieldName === 'audio' ? '/ai/transcriptions/ai/content/from-audio-openai-small' :
                     fieldName === 'video' ? '/ai/transcriptions/ai/content/from-video-openai-small' :
                     null;

    if (!endpoint) {
      console.error('Invalid endpoint');
      return;
    }

    this.globalService.uploadFile(endpoint, formData, this.sourceId, this.accesstokenId)
      .subscribe(
        (response: any) => {
          this.response = JSON.stringify(response);
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
  }
}
