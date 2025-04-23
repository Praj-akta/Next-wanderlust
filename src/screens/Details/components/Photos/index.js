import React from 'react';
import andaman1 from "../../../../assets/images/Photo1.jpg";
import andaman2 from "../../../../assets/images/Photo2.jpeg"
import andaman3 from "../../../../assets/images/Photo3.jpg"
import andaman4 from "../../../../assets/images/Photo4.jpeg"
import andaman5 from "../../../../assets/images/Photo5.jpg"
import andaman6 from "../../../../assets/images/Photo6.jpeg"
import './index.scss';

const imageList = [andaman1, andaman2, andaman3, andaman4, andaman5, andaman6];

const Photos = () => {
  return (
    <div className="photos-gallery-wrapper">
      <h2 className="gallery-title"> Discover Andaman Paradise</h2>
      <div className="masonry-gallery">
        {imageList.map((src, i) => (
          <div className="masonry-item" key={i}>
            <img
              src={src}
              alt={`Andaman ${i + 1}`}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
