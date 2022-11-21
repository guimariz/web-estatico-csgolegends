import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


import Path from '../util/path';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient
  ) {}

  url = `http://localhost:8080/user`

  incluir(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }
}
