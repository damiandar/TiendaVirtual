import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-review',
  templateUrl: './slider-review.component.html',
  styleUrls: ['./slider-review.component.css']
})
export class SliderReviewComponent implements OnInit {

  slides = [
    {img: "assets/img/review-1.jpg"},
    {img: "assets/img/review-2.jpg"},
    {img: "assets/img/review-3.jpg"}
  ];
  slideConfig = {autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
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
