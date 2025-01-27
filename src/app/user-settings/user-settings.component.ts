import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [UserInfoComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {
  detailView = { name: 'John Doe', age: 30 };

  updateUserInfo(): void {
    this.detailView = { ...this.detailView, age: this.detailView.age + 1 };
    console.log('User info updated:', this.detailView);
  }

  onAgeUpdated(newAge: number): void {
    console.log('New Age:', newAge);
  }
}
