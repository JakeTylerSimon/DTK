import React, {useRef} from 'react'

import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import One from '../images/test1.jpg'
import Two from '../images/test2.jpg'
import Three from '../images/test3.png'
import Four from '../images/test4.png'
import Six from '../images/test6.png'
import Seven from '../images/test7.jpg'
import Eight from '../images/test8.jpg'

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 500;
      } else {
        current.scrollLeft += 500;
      }
    };
  
    return (
      <div className="app__gallery flex__center">
        <div className="app__gallery-content">
         
          <h2 className='successStu'>Successful Students</h2>
          
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[One, Two, Seven, Eight, Three, Four, Six].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    );
}

export default Testimonials