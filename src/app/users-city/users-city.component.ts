import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-users-city',
  standalone: true,
  imports: [],
  templateUrl: './users-city.component.html',
  styleUrl: './users-city.component.css'
})
export class UsersCityComponent implements OnInit {
  userCityList: { name: string; avatar: string; city: string; country: string }[] = [];
  userCityById: { name: string; country: string; countrycode: string; id: string } = { name: '', country: '', countrycode: '', id: '' };
  defaultAvatar = 'smile.png';

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.fetchData();
    this.fetchDataCityByUserId();
  }

  fetchData(): void {
    this._userService.getUsersAndCities().subscribe(
      ([users, cities]) => {
        this.userCityList = users.map(user => {
          const city = cities.find(c => c.id === user.id);
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

  fetchDataCityByUserId(): void {
    this._userService.getUsers()
      .pipe(
        switchMap(users => {
          return this._userService.getCitiesByUserId(users[0].id);
        })
      ).subscribe(
       (city) => {
          this.userCityById = city; // Guardamos las ciudades en la variable
       },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultAvatar;
  }
}
