import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';
import { User } from 'src/app/shared/models/User';
import { finalize } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu.service';
import { SideNavToggle } from 'src/app/shared/models/sidenavtoggle';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg', offset: '0'}),
          style({transform: 'rotate(2turn', offset: '1'}),
        ])
        )
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
 
  menus: Menu[] = []
  user: User = new User();

  collapsed: boolean = false;
  largura: number = 0

  logoSite = "assets/images/tafudidootario.gif";
  profile_img = "assets/images/user_f_m.png";

  constructor(
    private menuService: MenuService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.largura = window.innerWidth;
    if(this.largura <= 768){
      this.collapsed = false      
      this.onToggleSideNav.emit({collapsed: this.collapsed, largura: this.largura})
    }
  }

  ngOnInit(): void {

    this.listMenus()
    this.largura = window.innerWidth;
  }

  listMenus() {
    this.menuService.getMenu().pipe(
      finalize(() => {
        console.log('end');
      })
    ).subscribe((menus: any) => {
      this.menus = menus;
    });
  }


  toggleCollapse(){
    this.collapsed = !this.collapsed
    console.log(this.largura)
    this.onToggleSideNav.emit({collapsed: this.collapsed, largura: this.largura})

  }

  closeNav(){
    this.collapsed = false;
    console.log(this.largura)
    this.onToggleSideNav.emit({collapsed: this.collapsed, largura: this.largura})

  }

  expandir(menu: Menu){
    menu.expanded = !menu.expanded;

    this.menus.filter(m => {
      if(m != menu){
        m.expanded = false
      }
    })

  }


}
