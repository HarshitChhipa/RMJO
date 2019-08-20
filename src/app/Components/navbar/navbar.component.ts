import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public Items = '2 Items';

  public menuList = ['2 Items', 'Wish List', 'Sign Up']

  constructor() {
  }

  ngOnInit() {
  }

}
