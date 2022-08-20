import React, { useContext } from 'react';
import { Carousel } from 'primereact/carousel';
import './Scary.css';
import { ScaryContext } from '../context/ScaryContext'
import { Spacer } from "@nextui-org/react";
import { Card, Col, Text } from "@nextui-org/react";
import scary from '../assets/scary.jpg'


const SpecialAuthor = () => {
  const [results] = useContext(ScaryContext);

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

  const scaryBooks = (result) => {
    return (
      <>
        <Card isPressable css={{ w: "auto", marginRight: '30px'}}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                {result.book_author}
              </Text>
              <Text h3 color="white">
                {result.book_title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src={scary}
            width="100%"
            height={200}
            objectFit="cover"
            alt="Card image background"
          />
        </Card>

      </>
    );
  }


  return (
    <div>
      <Spacer />
      <h1>Stephen King's Books</h1>
      <Spacer />
      <div className='carousel-demo'>
        <div className="card">
          <Carousel value={results} numVisible={2} numScroll={2} responsiveOptions={responsiveOptions}
            itemTemplate={scaryBooks} />
        </div>
      </div>
    </div>
  )
}

export default SpecialAuthor