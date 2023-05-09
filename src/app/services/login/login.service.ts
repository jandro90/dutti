import { Injectable } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import usersList from 'src/assets/json/users.json';

@Injectable({ providedIn: 'root' })

export class LoginService {
    private users: User[] = usersList;

    get currentUser(): User {
        return JSON.parse(localStorage.getItem('user'));
    }

    login(userData: string): User | undefined {
        if (!userData) return;
        const user: User | undefined = this.users?.find(({ first_name, username }: User) => (first_name === userData) || username === userData);
        user && this.setUserInStorage(user);

        return user;
    }

    register(user: User) {
        if (!user) return;
        this.users = [...this.users, user];
        this.setUserInStorage(user);
    }

    logout() {
        localStorage.removeItem('user');
    }

    private setUserInStorage(user: User) {
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    }
}