import { Routes } from '@angular/router';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UsersCityComponent } from './users-city/users-city.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: 'user-settings', component: UserSettingsComponent },
    { path: 'users-list', component: UsersComponent },
    { path: 'users-city-list', component: UsersCityComponent },
    { path: '', redirectTo: '/user-settings', pathMatch: 'full' },
    { path: '**', redirectTo: '/user-settings' }
];
