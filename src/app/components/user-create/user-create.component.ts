import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  user: any = {
    user_name: '',
    user_email: '',
    user_phone: '',
    user_password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  createUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
