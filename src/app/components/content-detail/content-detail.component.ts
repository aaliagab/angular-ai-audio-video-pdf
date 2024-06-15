import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content: any;

  constructor(private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contentService.getContent(id).subscribe(data => {
        this.content = data;
      });
    } else {
      // Manejar el caso donde `id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }
}
