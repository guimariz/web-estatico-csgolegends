import { FormGroup } from "@angular/forms";

export function passwordsDiferentes(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value ?? '';
    const retypepassword = formGroup.get('retypepassword')?.value ?? '';

    console.log(password)
    console.log(retypepassword)
  
    if (password.trim() + retypepassword.trim()) {
      return password == retypepassword ? null : { passwordNaoSaoIguais: true };
    } else {
      return null;
    }
  }