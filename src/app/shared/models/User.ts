import { PermisaoEnum } from './PermisaoEnum';
import { SexoEnum } from "./SexoEnum";

export class User {
    id?: number;
    nome?: string = "";
    dataNascimento?: Date;
    sexo?: SexoEnum;
    email?: string = "";
    password?: string = "";
    cpf?: string;
    permissao?: PermisaoEnum;
  
      static fromJson(jsonData: any): User {
          return Object.assign(new User(), jsonData);
      }
  }
  