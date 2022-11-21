import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Path, { PATH } from '../util/path';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu() {
      return Path.menu();
  }

  getUser() {
    return this.http.get(Path.url() + '/api/menu/perfil');
  }

  isFixo() {
    return PATH.menuFixo;
  }
  
}