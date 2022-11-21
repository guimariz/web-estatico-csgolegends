import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SideNavComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent
  ],
  exports: [
    SideNavComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [],
})
export class LayoutModule { }
