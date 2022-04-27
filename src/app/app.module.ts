import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FriendsRouteComponent } from './friends-route/friends-route.component';
import { MeetRouteComponent } from './meet-route/meet-route.component';
import { MessageRouteComponent } from './message-route/message-route.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomePageComponent, FooterComponent, NavSidebarComponent, SignUpFormComponent, FriendsRouteComponent, MeetRouteComponent, MessageRouteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
