import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-recent',
  templateUrl: './slider-recent.component.html',
  styleUrls: ['./slider-recent.component.css']
})
export class SliderRecentComponent implements OnInit {

  slides = [
    {img: "assets/img/product-6.jpg"},
    {img: "assets/img/product-7.jpg"},
    {img: "assets/img/product-8.jpg"},
    {img: "assets/img/product-9.jpg"},
    {img: "assets/img/product-10.jpg"} 
  ];
  slideConfig = {autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }  

  
  constructor() { }

  ngOnInit() {
  }

}
