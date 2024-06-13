import { Component } from '@angular/core';
import { AccessService } from '../../services/access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-create',
  templateUrl: './access-create.component.html',
  styleUrls: ['./access-create.component.scss']
})
export class AccessCreateComponent {
  access: any = {
    access_name: ''
  };

  constructor(private accessService: AccessService, private router: Router) { }

  createAccess(): void {
    this.accessService.createAccess(this.access).subscribe(() => {
      this.router.navigate(['/accesses']);
    });
  }
}
