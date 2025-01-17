import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnChanges {
  @Input() userInfo!: { name: string; age: number };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userInfo'] && !changes['userInfo'].firstChange) {
      this.handleUserInfoChange(changes['userInfo'].currentValue);
    }
  }

  handleUserInfoChange(newUserInfo: { name: string; age: number }): void {
  }
}
