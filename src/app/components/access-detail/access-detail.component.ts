import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessService } from '../../services/access.service';
import { Access } from 'src/app/models/access';

@Component({
  selector: 'app-access-detail',
  templateUrl: './access-detail.component.html',
  styleUrls: ['./access-detail.component.scss']
})
export class AccessDetailComponent implements OnInit {
  access: any;

  constructor(private route: ActivatedRoute, private accessService: AccessService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.accessService.getAccess(id).subscribe(data => {
        this.access = data;
      });
    } else {
      // Manejar el caso donde `accesstoken_id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }
}
