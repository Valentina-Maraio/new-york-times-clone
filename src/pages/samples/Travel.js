import React, { useContext } from 'react';
import { Carousel } from 'primereact/carousel';
import './CarouselDemo.css';
import { TravelContext } from '../../context/TravelContext';

const Travel = () => {
  const [results] = useContext(TravelContext)
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const resultTemplate = (result) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-4">
            <img
              width={'300'}
              src={result.multimedia && result.multimedia[1] ? result.multimedia[1].url : `https://via.placeholder.com/300/101824`}
              alt={result.title} />
          </div>
          <div>
            <h4 className="mb-1">{result.title}</h4>
            <h6 className="mt-0 mb-3">{result.caption}</h6>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <Carousel value={results} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
        autoplayInterval={4000} itemTemplate={resultTemplate} />
    </div>
  )
}

export default Travel