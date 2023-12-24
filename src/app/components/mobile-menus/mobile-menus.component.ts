import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RootMenu } from '@typings/menu.type';
import { ButtonComponent } from "../button/button.component";
import { User } from 'firebase/auth';
@Component({
    selector: 'app-mobile-menus',
    standalone: true,
    templateUrl: './mobile-menus.component.html',
    styleUrl: './mobile-menus.component.scss',
    imports:  [RouterLink, ButtonComponent]
})
export class MobileMenusComponent {
  @Input() user = signal<User | null>(null);
  @Input() menus: RootMenu = {routeButtons:[], routeMenus:[]}
  @Output() onMenuItemClick = new EventEmitter<void>()
}
