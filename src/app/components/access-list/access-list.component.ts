import { Component, OnInit } from '@angular/core';
import { AccessService } from '../../services/access.service';
import { Access } from '../../models/access';

@Component({
  selector: 'app-access-list',
  templateUrl: './access-list.component.html',
  styleUrls: ['./access-list.component.scss']
})
export class AccessListComponent implements OnInit {
  accesses: Access[] = [];

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    this.accessService.getAccesses()
      .subscribe({
        next: (data: Access[]) => {
          this.accesses = data;
        },
        error: (error) => {
          console.error('Error fetching accesses:', error);
        }
      });
  }

  deleteAccess(accesstoken_id: string): void {
    this.accessService.deleteAccess(accesstoken_id).subscribe(() => {
      this.accesses = this.accesses.filter(access => access.accesstoken_id !== accesstoken_id);
    });
  }
}
