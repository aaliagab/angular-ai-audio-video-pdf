import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }



  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe({
        next: (data: User[]) => {
          this.users = data;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
        }
      });
  }

  

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }
}
