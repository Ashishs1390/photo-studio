import React from 'react';
import Slider from "react-slick";
import "./Carousel.scss";
import "./CarouselMod.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from './../../images/homepage/1.jpg';
import image2 from './../../images/homepage/2.jpg';
import image3 from './../../images/homepage/3.jpg';
import image4 from './../../images/homepage/4.jpg';
import image5 from './../../images/homepage/5.jpg';
import image6 from './../../images/homepage/6.jpg';
import image7 from './../../images/homepage/7.jpg';
import image8 from './../../images/homepage/8.jpg';
import image9 from './../../images/homepage/9.jpg';
import image10 from './../../images/homepage/10.jpg';



var cards = [
  {"image":image1, 
  "title":"Burgundy Flemming", 
  "subtitle":"Advertising"},
 {"image":image2, 
  "title":"Nigel Nigel", 
  "subtitle":"Sound & Vision"},
 {"image":image3, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},
  {"image":image4, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},{"image":image5, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},{"image":image6, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},
  {"image":image7, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},
  {"image":image8, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},
  {"image":image9, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"},
  {"image":image10, 
  "title":"Caspian Bellevedere", 
  "subtitle":"Accounting"}
];
function Article(data1) {
  console.log(data1);
  let {data} = data1;
   var image = data.image,
       title = data.title,
       subtitle = data.subtitle;
   return (
     <figure className="snip1584">
       <img src={image} />
       <figcaption>
         <h3>{title}</h3>
         <h5>{subtitle}</h5>
       </figcaption><a href="#"></a>
     </figure>
   )
 }

function News(data1) {
  let {data} = data1;
   var newsTemplate;
   var settings = {
    // variableWidth: true,
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     speed: 2000,
     autoplaySpeed: 2000,
     cssEase: "linear"
    //  adaptiveHeight: true
   }
   if (data.length > 0) {
     newsTemplate = data.map(function(item, index) {
       return (
           <div key={index}>
             <Article data={item} />
           </div>
       )
     })
   } else {
     newsTemplate = <p>Please add some cards</p>
   }
   return (
     <div className='news'>
       <Slider {...settings}>{newsTemplate}</Slider>
       <strong className={'news__count ' + (data.length > 0 ? '':'none') }>
         {/* Total cards: {data.length} */}
       </strong>
     </div>
   );
 }

var App1 = function() {
   
   return (
     <div className='MainCarousel'>
       <News data={cards} />
     </div>
   );
 }


export default App1;