import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { GlobalService } from './services/global.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SourceService } from './services/source.service';
import { AccessService } from './services/access.service';
import { ContentService } from './services/content.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { ContentUploadComponent } from './components/content-upload/content-upload.component';
import { ChatComponent } from './components/chat/chat.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { SourceCreateComponent } from './components/source-create/source-create.component';
import { SourceDetailComponent } from './components/source-detail/source-detail.component';
import { SourceUpdateComponent } from './components/source-update/source-update.component';
import { AccessListComponent } from './components/access-list/access-list.component';
import { AccessCreateComponent } from './components/access-create/access-create.component';
import { AccessDetailComponent } from './components/access-detail/access-detail.component';
import { AccessUpdateComponent } from './components/access-update/access-update.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentDetailComponent } from './components/content-detail/content-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserUpdateComponent,
    ContentUploadComponent,
    ChatComponent,
    MenuComponent,
    LogoutButtonComponent,
    SourceListComponent,
    SourceCreateComponent,
    SourceDetailComponent,
    SourceUpdateComponent,
    AccessListComponent,
    AccessCreateComponent,
    AccessDetailComponent,
    AccessUpdateComponent,
    ContentListComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    GlobalService,
    AuthService,
    UserService,
    SourceService,
    AccessService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
