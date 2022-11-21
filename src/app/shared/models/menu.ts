export class Menu {
    routerLink?: string;
    icon?: string;
    label?: string;
    expanded?: boolean = false;
    items?:Items[];
}

export interface Items {
    routerLink?: string;
    label?: string
}
  