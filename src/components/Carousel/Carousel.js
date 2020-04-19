import React,{useState} from "react";
import "./Carousel.scss";
// import { UncontrolledCarousel } from 'reactstrap';
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


import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const items = [
    {
      id:1,
      src: image1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      id:2,
      src: image2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      id:3,
      src: image3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

function CarouselSlider(){
    // return(
    //     <div className="CarouselContainer">
    //         This is a Carousel
            
    //     </div>
    // )
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="800" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
        <div className="CarouselContainer">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>
    );
}

// const CarouselSlider = () => <UncontrolledCarousel items={items} />;

export default CarouselSlider;