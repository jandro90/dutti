import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import usersList from 'src/assets/json/users.json';

describe('ShipsService', () => {
  let service: LoginService;

  beforeEach(() => {
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
// Login Method
  it('should Login correctly when username exist', () => {
    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    const userLogged = service.login('PacoRuiz');
    const expectedUser = {
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    };

    expect(userLogged).toEqual(expectedUser);
  });

  it('should Login correctly when first_name exist', () => {
    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    const userLogged = service.login('Paco');
    const expectedUser = {
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    };

    expect(userLogged).toEqual(expectedUser);
  });

  it('should Login function return undefined when is not exist the user', () => {
    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];
    const userLogged = service.login('XXX');
    expect(userLogged).toEqual(undefined);
  });

  it('should Login function add in LocalStorage the user when exist', () => {
    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];
    service.login('PacoRuiz')
    const userInStorage = JSON.parse(localStorage.getItem('user'));
    const expectedUser = {
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    };

    expect(userInStorage).toEqual(expectedUser);
  });

  it('when call login function without parameters should skip the processs', () => {
    localStorage.clear();

    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    service.login(null);

    const findResult = localStorage.getItem('user');

    expect(findResult).toEqual(null);
  });

// Logout Method
  it('should not exist user in localStorage when Logout function is called', () => {
    service.logout();
    const userInStorage = localStorage.getItem('user');
    expect(userInStorage).toEqual(null);
  });

// Register Method
  it('when is registered new user should be added in the current userList', () => {
    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    const newUser = {
        "first_name":"Pepe",
        "last_name":"Sanchez",
        "username":"PepeSanchez",
        "email":"pepe@pepe.es"
    };

    service.register(newUser);

    const findResult = service['users'].find((user) => user.username === newUser.username);

    expect(findResult).toEqual(newUser);
  });

  it('when is registered new user should be added in localStorage', () => {
    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    const newUser = {
        "first_name":"Pepe",
        "last_name":"Sanchez",
        "username":"PepeSanchez",
        "email":"pepe@pepe.es"
    };

    service.register(newUser);

    const findResult = JSON.parse(localStorage.getItem('user'));

    expect(findResult).toEqual(newUser);
  });

  it('when call register function without parameters should skip the processs', () => {
    localStorage.clear();

    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    service.register(null);

    const findResult = localStorage.getItem('user');

    expect(findResult).toEqual(null);
  });

  it('when call setUserInStorage function without parameters should skip the processs', () => {
    localStorage.clear();

    service['users'] = [{
        "first_name":"Paco",
        "last_name":"Ruiz",
        "username":"PacoRuiz",
        "email":"paco@paco.es"
    }];

    service['setUserInStorage'](null);

    const findResult = localStorage.getItem('user');

    expect(findResult).toEqual(null);
  });

});
