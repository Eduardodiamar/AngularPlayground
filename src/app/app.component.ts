import { Component } from '@angular/core';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  imports: [UserSettingsComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPlayground';
}
