import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
