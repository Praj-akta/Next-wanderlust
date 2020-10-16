import React from 'react';
import Button from '../Button';
import image2 from '../../assets/images/banner_.png';
import image1 from '../../assets/images/andaman1.png';
import './index.scss';

const Banner = ({
  history,
  onClickKnowMore
}) => {

  const _onClickKnowMore = () => {
    onClickKnowMore(true);
    history.push('/details');
  }

  return (
    <div className="banner-container">
      <div id="bannerCarouselIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
        <div className="overlay"></div>
        <ol className="carousel-indicators">
          <li data-target="#bannerCarouselIndicators" data-slide-to="0" className="active" />
          <li data-target="#bannerCarouselIndicators" data-slide-to="1" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100 d-block" src={image1} alt="image1" />
          </div>
          <div className="carousel-item">
            <img className="w-100 d-block" src={image2} alt="image2" />
          </div>
        </div>
      </div>
      <div className="banner-text">
        <h1 className="banner-title text-white text-uppercase font-weight-bold"> andaman </h1>
        <h4 className="banner-subtitle text-white pt-2 pb-2"> Island Paradise </h4>
        <h6 className="banner-description">
          is an Indian group of islands in the Bay of Bengal.
          These rough 300 known for their plam-lined,white-sand
          beaches,mangroves and tropical rain-forest.caral reefs
          supporting marine life such as shark and rays make for
          popular diving and snarkelling sites. over the years ,
          andaman is turning out to be one of the famous tourist destination
        </h6>
        <div className="banner-button">
          <Button
            type="dark"
            title="Know More"
            onClick={_ => _onClickKnowMore()} />
        </div>
      </div>
    </div>
  );
};

export default Banner;