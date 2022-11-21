import { ProfileComponent } from './profile/profile.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PageRoutingModule } from './page-routing.module';
import { MensagemComponent } from '../shared/mensagem/mensagem.component';



@NgModule({
  imports: [
    PageRoutingModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  declarations: [
    CadastroComponent,
    ProfileComponent,
    MensagemComponent
  ],
  exports: [
    CadastroComponent,
    ProfileComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
  ],
})
export class PagesModule { }
