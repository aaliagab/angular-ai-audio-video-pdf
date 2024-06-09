import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { ContentUploadComponent } from './components/content-upload/content-upload.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';
import { SourceListComponent } from './components/source-list/source-list.component';
import { SourceCreateComponent } from './components/source-create/source-create.component';
import { SourceDetailComponent } from './components/source-detail/source-detail.component';
import { SourceUpdateComponent } from './components/source-update/source-update.component';

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path:'users', component: UserListComponent },
  { path:'users/create', component: UserCreateComponent },
  { path:'users/:id', component: UserDetailComponent },
  { path:'users/update/:id', component: UserUpdateComponent },
  { path:'content/upload', component: ContentUploadComponent },
  { path:'chat', component: ChatComponent },
  { path:'sources', component: SourceListComponent},
  { path:'sources/create', component: SourceCreateComponent },
  { path:'sources/:id', component: SourceDetailComponent },
  { path:'sources/update/:id', component: SourceUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
