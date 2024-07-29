import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AutenticationComponent } from './autentication/autentication.component';
import { UsersComponent } from './users/users.component';
import { ProposComponent } from './propos/propos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    EventsComponent,
    ContactComponent,
    RegisterComponent,
    AutenticationComponent,
    UsersComponent,
    ProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
