import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {
  images = [
    {
      'pathImg': 'assets/imgs/prosecurty-min.png'
    },
    {
      'pathImg': 'assets/imgs/LMS-min.png'
    },
    {
      'pathImg': 'assets/imgs/chat-min.png'
    },
    {
      'pathImg': 'assets/imgs/OTD-min.png'
    }
  ];

  public customOptions = {
    autoplay: true,
    dots: true,
    responsiveClass: true,
    navSpeed: 500,
    responsive: {
      0: {
        items: 2,
        dots: true,
      },
      400: {
        items: 2,
        dots: true,
      },
      740: {
        items: 3,
        dots: true,
      },
      940: {
        items: 3,
        dots: true,
      }
    },
  }
  constructor() { }

  ngOnInit() {
  }

}
