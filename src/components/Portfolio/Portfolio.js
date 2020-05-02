import React,{useState,useEffect,useCallback} from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './Portfolio.scss';

import row10 from './../../images/portfolio/img.jpg'
import row11 from './../../images/portfolio/img1.jpg'
import row12 from './../../images/portfolio/img2.jpg'
import row13 from './../../images/portfolio/img3.jpg'
import row14 from './../../images/portfolio/img4.jpg'
import row15 from './../../images/portfolio/img5.jpg'
import row20 from './../../images/portfolio/img17.jpg'
import row21 from './../../images/portfolio/img7.jpg'
import row22 from './../../images/portfolio/img8.jpg'
import row23 from './../../images/portfolio/img9.jpg'
import row24 from './../../images/portfolio/img10.jpg'
import row31 from './../../images/portfolio/img11.jpg'
import row32 from './../../images/portfolio/img12.jpg'
import row40 from './../../images/portfolio/img13.jpg'
import row41 from './../../images/portfolio/img14.jpg'
import row42 from './../../images/portfolio/img15.jpg'
import row43 from './../../images/portfolio/img16.jpg'


function Portfolio(){
     const photos = [
        {
          src: row10,
          width: 3,
          height: 4
        },
        {
          src: row11,
          width: 1,
          height: 1
        },
        {
          src: row12,
          width: 5,
          height: 4
        },
        {
          src: row13,
          width: 4,
          height: 4
        },
        {
          src: row14,
          width: 3,
          height: 4
        },
        {
          src: row15,
          width: 4,
          height: 3
        },
        {
          src: row20,
          width: 3,
          height: 4
        },
        {
          src: row21,
          width: 4,
          height: 3
        },
        {
          src: row22,
          width: 4,
          height: 3
        },
        {
          src: row23,
          width: 3,
          height: 4
        },
        {
          src: row24,
          width: 4,
          height: 3
        },
        {
          src: row31,
          width: 9,
          height: 5
        },
        {
          src: row32,
          width: 4,
          height: 3
        },
        {
          src: row40,
          width: 4,
          height: 3
        },
        {
          src: row41,
          width: 4,
          height: 3
        },
        {
          src: row42,
          width: 4,
          height: 3
        },
        {
          src: row43,
          width: 4,
          height: 3
        }
      ];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
      
      


    return(
        <div className="Portfolio">
        <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default Portfolio;