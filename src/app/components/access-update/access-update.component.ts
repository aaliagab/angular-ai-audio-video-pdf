import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-access-update',
  templateUrl: './access-update.component.html',
  styleUrls: ['./access-update.component.scss']
})
export class AccessUpdateComponent implements OnInit {
  access: any = {
    access_name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private accessService: AccessService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const accesstoken_id = this.route.snapshot.paramMap.get('accesstoken_id');
    if (accesstoken_id) {
      this.accessService.getAccess(accesstoken_id).subscribe(data => {
        this.access = {
          access_name: data.access_name
        };
      });
    } else {
      // Manejar el caso donde `accesstoken_id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }

  updateAccess(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.accessService.updateAccess(id, this.access).subscribe(() => {
        this.router.navigate(['/accesses']);
      });
    } else {
      // Manejar el caso donde `accesstoken_id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }
}
