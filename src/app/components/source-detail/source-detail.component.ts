import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SourceService } from '../../services/source.service';
import { Source } from 'src/app/models/source';

@Component({
  selector: 'app-source-detail',
  templateUrl: './source-detail.component.html',
  styleUrls: ['./source-detail.component.scss']
})
export class SourceDetailComponent implements OnInit {
  source: any;

  constructor(private route: ActivatedRoute, private sourceService: SourceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sourceService.getSource(id).subscribe(data => {
        this.source = data;
      });
    } else {
      // Manejar el caso donde `id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }
}
