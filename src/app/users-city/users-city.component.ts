import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-city',
  imports: [],
  templateUrl: './users-city.component.html',
  styleUrl: './users-city.component.css'
})
export class UsersCityComponent implements OnInit {
  userCityList: { name: string; avatar: string; city: string; country: string }[] = [];
  defaultAvatar = 'smile.png';

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this._userService.getUsersAndCities().subscribe(
      ([users, cities]) => {
        this.userCityList = users.map(user => {
          const city = cities.find(c => c.id === user.id); // Relación por ID
          return {
            name: user.name,
            avatar: user.avatar,
            city: city ? city.name : 'Unknown',
            country: city ? city.country : 'Unknown'
          };
        });
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultAvatar;  // Cambiar la imagen a la predeterminada
  }

}
