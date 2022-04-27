import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsRouteComponent } from './friends-route/friends-route.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MeetRouteComponent } from './meet-route/meet-route.component';
import { MessageRouteComponent } from './message-route/message-route.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register', component: SignUpFormComponent },
  { path: 'meet', component: MeetRouteComponent },
  { path: 'message', component: MessageRouteComponent },
  { path: 'friends', component: FriendsRouteComponent },
  { path: '**', component: HomePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
