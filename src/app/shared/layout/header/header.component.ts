import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { CartService } from '../../services/cart.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedState: boolean = false ;

  constructor(public cartService: CartService, private authService: AuthService) {  }

  ngOnInit(): void {

    this.authService.isLoggedSubject.subscribe((isLogedIn: boolean)=> {
      this.loggedState = isLogedIn;
      // other logic
      console.log('state changed ' + isLogedIn)
    })
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }

}
