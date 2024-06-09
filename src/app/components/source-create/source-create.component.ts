import { Component } from '@angular/core';
import { SourceService } from '../../services/source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-source-create',
  templateUrl: './source-create.component.html',
  styleUrls: ['./source-create.component.scss']
})
export class SourceCreateComponent {
  source: any = {
    source_name: '',
    user_id: ''
  };

  constructor(private sourceService: SourceService, private router: Router) { }

  createSource(): void {
    this.sourceService.createSource(this.source).subscribe(() => {
      this.router.navigate(['/sources']);
    });
  }
}
