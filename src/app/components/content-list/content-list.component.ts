import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Content } from '../../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContents()
      .subscribe({
        next: (data: Content[]) => {
          this.contents = data;
        },
        error: (error) => {
          console.error('Error fetching contents:', error);
        }
      });
  }
}
