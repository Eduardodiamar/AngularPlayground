import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-user-settings',
  imports: [UserInfoComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {
  detailView = { name: 'John Doe', age: 30 };

  updateUserInfo(): void {
    this.detailView = { ...this.detailView, age: this.detailView.age + 1 };
  }
}
