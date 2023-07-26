import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryPipe } from './pipes/summary.pipe';
import { BlogComponent } from './components/blog-components/blog/blog.component';
import { CardComponent } from './components/blog-components/card/card.component';
import { EditComponent } from './components/blog-components/edit/edit.component';
import { BlogsComponent } from './components/blog-components/blogs/blogs.component';
import { FameBlogsComponent } from './components/blog-components/fame-blogs/fame-blogs.component';
import { CommBoxComponent } from './components/comm-components/comm-box/comm-box.component';
import { CommSystemComponent } from './components/comm-components/comm-system/comm-system.component';
import { CommsComponent } from './components/comm-components/comms/comms.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    BlogComponent,
    CardComponent,
    EditComponent,
    BlogsComponent,
    FameBlogsComponent,
    CommBoxComponent,
    CommSystemComponent,
    CommsComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    PicturesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
