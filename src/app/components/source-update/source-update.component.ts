import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceService } from '../../services/source.service';

@Component({
  selector: 'app-source-update',
  templateUrl: './source-update.component.html',
  styleUrls: ['./source-update.component.scss']
})
export class SourceUpdateComponent implements OnInit {
  source: any = {
    source_name: '',
    user_id: ''
  };

  constructor(
    private route: ActivatedRoute,
    private sourceService: SourceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sourceService.getSource(id).subscribe(data => {
        this.source = {
          source_name: data.source_name,
          user_id: data.user_id
        };
      });
    } else {
      // Manejar el caso donde `id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }

  updateSource(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sourceService.updateSource(id, this.source).subscribe(() => {
        this.router.navigate(['/sources']);
      });
    } else {
      // Manejar el caso donde `id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }
}
