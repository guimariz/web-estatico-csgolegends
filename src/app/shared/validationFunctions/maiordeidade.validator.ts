import { AbstractControl } from '@angular/forms';

export function validacaoIdade(control: AbstractControl) {
  var enteredAge = getAge(control);
  if (enteredAge > 18) {
    return null;
  } else {
    return {menoridade: true};
  }
}

function getAge(control: AbstractControl) {
  const dataAtual = new Date();
  const dataNascimento = new Date(control.value);
  let age = dataAtual.getFullYear() - dataNascimento.getFullYear();
  const m = dataAtual.getMonth() - dataNascimento.getMonth();
  if (m < 0 || (m === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
    age--;
  }
  return age;
}
