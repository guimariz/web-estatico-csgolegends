import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALIDATORS, Validators} from '@angular/forms';
import { PermisaoEnum } from 'src/app/shared/models/PermisaoEnum';
import { User } from 'src/app/shared/models/User';
import { validacaoIdade } from 'src/app/shared/validationFunctions/maiordeidade.validator';
import { passwordsDiferentes } from 'src/app/shared/validationFunctions/passwordsdiferentes.validadator';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [{provide: NG_VALIDATORS, useExisting: CadastroComponent, multi: true}]
})


export class CadastroComponent implements OnInit {

  // user: User = new User();

  cadastroForm!: FormGroup;
  user: User = new User();

  constructor(private fb: FormBuilder, 
    private userSerivce: UserService) { }


  triggerSelect: Boolean = true;

  flagEmail: Boolean = false;
  flagPassword: Boolean = false;
  flagRetypePassword: Boolean = false;
  flagData: Boolean = false;
  flagNome: Boolean = false;
  flagCpf: Boolean = false;
  flagSexo: Boolean = false;

  ngOnInit(): void {

    this.cadastroForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      retypepassword: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dataNascimento: [null, [Validators.required, validacaoIdade]],
      sexo: [null, [Validators.required]],
      cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    },
    {
      validators: [passwordsDiferentes],
    });
  }



  validate(){
    let retorno = true

    if(this.cadastroForm.controls.email.errors?.required){
      this.flagEmail = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.email.errors?.email){
      this.flagEmail = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.password.errors?.required){
      this.flagPassword = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.retypepassword.errors?.required){
      this.flagRetypePassword = true;
      retorno = false;
    }
    if(this.cadastroForm.errors?.passwordNaoSaoIguais){
      this.flagPassword = true;
      this.flagRetypePassword = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.nome.errors?.required){
      this.flagNome = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.nome.errors?.minLength){
      this.flagNome = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.dataNascimento.errors?.required){
      this.flagData = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.dataNascimento.errors?.menoridade){
      this.flagData = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.sexo.errors?.required){
      this.flagSexo = true;
      retorno = false;
    }
    if(this.cadastroForm.controls.cpf.errors?.required){
      this.flagCpf = true;
      retorno = false;
    }

    return retorno

  } 



  cadastrarUsuario(){
    if(!this.validate()) return;
    this.cadastroForm.updateValueAndValidity();
    if (this.cadastroForm.valid) {
      this.user.email = this.cadastroForm.controls.email.value;
      this.user.password = this.cadastroForm.controls.password.value;
      this.user.nome = this.cadastroForm.controls.nome.value;
      this.user.dataNascimento = this.cadastroForm.controls.dataNascimento.value;
      this.user.sexo = this.cadastroForm.controls.sexo.value;
      this.user.cpf = this.cadastroForm.controls.cpf.value;
      this.user.permissao = PermisaoEnum.U;
      this.userSerivce.incluir(this.user).subscribe(r =>
        console.log(r));      
      
    } else {
      console.log("ENTROU NO ELSE")
    }
  }



}
