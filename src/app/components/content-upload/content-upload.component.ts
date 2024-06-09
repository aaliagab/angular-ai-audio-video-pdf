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
    formData.append('pdf', this.file);

    const endpoint = this.file.type.startsWith('application/pdf') ? '/content/upload' :
                     this.file.type.startsWith('audio/') ? '/ai/content/from-audio-openai-small' :
                     this.file.type.startsWith('video/') ? '/ai/content/from-video-openai-small' :
                     null;

    if (!endpoint) {
      console.error('Invalid file type');
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
