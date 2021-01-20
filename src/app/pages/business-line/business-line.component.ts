import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-line',
  templateUrl: './business-line.component.html',
  styleUrls: ['./business-line.component.scss']
})
export class BusinessLineComponent implements OnInit {
  images = [
    {
      'pathImg':'assets/imgs/website-min.png',
      'title':'Website Development',
      'des':'Web design and development to suite customer goals and requirements Through the embodiment of ideas and presentation of atelier'
    },
    {
      'pathImg':'assets/imgs/GraphicDesigns-min.png',
      'title':'Graphic Designs',
      'des':'Proemcs design are characterized by high quality, attractive designs and innovative idea'
    },
    {
      'pathImg':'assets/imgs/SoftwareSolution-min.png',
      'title':'Software Solution',
      'des':'Developing software solutions in different fields that meet and exceed our clients expectations'
    },
    {
      'pathImg':'assets/imgs/MobileApplications-min.png',
      'title':'Mobile Applications',
      'des':'Proemcs develop mobile applications for the iPhone, Android and windows phone'
    },
    {
      'pathImg':'assets/imgs/ITConsulting-min.png',
      'title':'IT Consulting',
      'des':' Proemcs focuses on advising organizations on how best to use information technology in achieving their business objectives'
    }
  ];

  public customOptions = {
    autoplay: true,
    dots: true,
    responsiveClass: true,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1,
        dots:true,
      },
      400: {
        items: 1,
        dots:true,
      },
      740: {
        items: 1,
        dots:true,
      },
      940: {
        items: 1,
        dots:true,
      }
    },
  }
  constructor() { }

  ngOnInit() {
  }

}
