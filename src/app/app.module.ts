import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import { ServiceupdateComponent } from './serviceupdate/serviceupdate.component';
import { UsersupdateComponent } from './usersupdate/usersupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    ProjectupdateComponent,
    ServiceupdateComponent,
    UsersupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
