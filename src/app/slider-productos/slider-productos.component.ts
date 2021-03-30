import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slider-productos',
  templateUrl: './slider-productos.component.html',
  styleUrls: ['./slider-productos.component.css']
})
export class SliderProductosComponent implements OnInit {
  @Input() tipoSlider: string;
  slides = [
    {img: "assets/img/product-1.jpg"},
    {img: "assets/img/product-2.jpg"},
    {img: "assets/img/product-3.jpg"},
    {img: "assets/img/product-4.jpg"},
    {img: "assets/img/product-5.jpg"} 
  ];
  slideConfig = {
    infinite: true,
    autoplay: true,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-slider-single-nav'  
  };
  slideConfig2={        
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.product-slider-single'
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

  console.log("tipoSlider:" + this.tipoSlider);
  }

}
