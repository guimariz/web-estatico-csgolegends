import { of } from 'rxjs';
import { MENUMOCK } from '../shared/mock/mock-menu';

export const PATH = {
  menuFixo: true,
  url: 'http://127.0.0.1:8080'
};



export default class Path {
    
  static url(): String {
    return PATH.url;
  }

  static menu() {
    return of(MENUMOCK);
  }
  
}
