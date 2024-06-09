import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user: any = {
    user_email: '',
    user_phone: '',
    user_password: '',
    user_password_confirm: ''
  };
  passwordMismatch: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(id).subscribe(data => {
        this.user = {
          user_email: data.user_email,
          user_phone: data.user_phone,
          user_password: '',
          user_password_confirm: ''
        };
      });
    } else {
      // Manejar el caso donde `id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }

  updateUser(): void {
    if (this.user.user_password !== this.user.user_password_confirm) {
      this.passwordMismatch = true;
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const { user_password_confirm, ...userData } = this.user;
      this.userService.updateUser(id, userData).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      // Manejar el caso donde `id` es null, por ejemplo, redirigir o mostrar un mensaje de error.
    }
  }
}
