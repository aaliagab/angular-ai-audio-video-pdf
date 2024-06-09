import { Component, OnInit } from '@angular/core';
import { SourceService } from '../../services/source.service';
import { Source } from '../../models/source';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.scss']
})
export class SourceListComponent implements OnInit {
  sources: Source[] = [];

  constructor(private sourceService: SourceService) { }

  ngOnInit(): void {
    this.sourceService.getSources()
      .subscribe({
        next: (data: Source[]) => {
          this.sources = data;
        },
        error: (error) => {
          console.error('Error fetching sources:', error);
        }
      });
  }

  deleteSource(sourceId: string): void {
    this.sourceService.deleteSource(sourceId).subscribe(() => {
      this.sources = this.sources.filter(source => source.id !== sourceId);
    });
  }
}
