import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    
    authenticatedUsers: User[] = []

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    addAuthenticated(user: User) {
        this.authenticatedUsers.splice(0,0, user)
    }
}