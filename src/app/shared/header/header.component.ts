import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideMob: boolean = false;
  logoPath = 'assets/imgs/brand2-min.png';
  anotherItems;
  anotherIcons;
  routerList = [
    { name: 'Home', isActive: true, path: 'home' },
    { name: 'About Us', isActive: true, path: 'about-us' },
    { name: 'Our Business Line', isActive: true, path: 'business-line' },
    { name: 'Our Products', isActive: true, path: 'our-products' },
    { name: 'Our Clients', isActive: true, path: 'our-clients' },
    { name: 'Contact Us', isActive: true, path: 'contact-us' }
  ];
  icons = [
    {
      'ico': 'fa fa-linkedin',
      'path': 'https://www.linkedin.com/company/proemcs'
    },
    {
      'ico': 'fa fa-facebook',
      'path': 'https://www.facebook.com/Proemcs'
    },
    {
      'ico': 'fa fa-globe',
      'path': 'https://www.proemcs.com'
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  

  openNav(path?) {
    this.sideMob = !this.sideMob;
  }



}
