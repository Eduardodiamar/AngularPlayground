import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://6390b47b65ff4183111c4b91.mockapi.io/users/users';
  private usersUrl = 'https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/users';
  private citiesUrl = 'https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities';

  constructor(private http: HttpClient) {}

  getApiUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getUsersAndCities() {
    const users$ = this.http.get<any[]>(this.usersUrl);
    const cities$ = this.http.get<any[]>(this.citiesUrl);
    return forkJoin([users$, cities$]);
  }

  getCitiesByUserId(userId: string): Observable<any> {
    return this.http.get<any>(`${this.citiesUrl}/${userId}`);
  }
}
