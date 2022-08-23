import React, { useContext } from 'react'
import { NYRegionContext } from '../context/NYRegionContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const NY = () => {
  const [results] = useContext(NYRegionContext);

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {results.map((result) => (
          <Col sm>
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
              <Card.Body>
                <Card.Title><h4>{result.title}</h4></Card.Title>
                <Card.Text>
                  <h6>
                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                  </h6>
                </Card.Text>
                <Card.Text>
                  <h6>Copyright:  {result.multimedia && result.multimedia[2] ? result.multimedia[2].copyright : 'free'}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default NY