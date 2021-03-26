import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-marcas',
  templateUrl: './slider-marcas.component.html',
  styleUrls: ['./slider-marcas.component.css']
})
export class SliderMarcasComponent implements OnInit {
  slides = [
    {img: "assets/img/brand-1.png"},
    {img: "assets/img/brand-2.png"},
    {img: "assets/img/brand-3.png"},
    {img: "assets/img/brand-4.png"},
    {img: "assets/img/brand-5.png"},
    {img: "assets/img/brand-6.png"}
  ]; 
  slideConfig = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
  };
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
