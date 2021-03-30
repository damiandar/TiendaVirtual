import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  slides = [
    {img: "assets/img/product-1.jpg"},
    {img: "assets/img/product-2.jpg"},
    {img: "assets/img/product-3.jpg"},
    {img: "assets/img/product-4.jpg"},
    {img: "assets/img/product-5.jpg"} 
  ];
  slides2 = [
    {img: "assets/img/brand-1.png"},
    {img: "assets/img/brand-2.png"},
    {img: "assets/img/brand-3.png"},
    {img: "assets/img/brand-4.png"},
    {img: "assets/img/brand-5.png"},
    {img: "assets/img/brand-6.png"}
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
  
  constructor() { }

  ngOnInit() {
  }

}
