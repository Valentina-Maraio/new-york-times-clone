import React, { useContext } from 'react'
import { AllNewsContext } from '../context/AllNewsContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Res() {
    const [results] = useContext(AllNewsContext)

    return (
        <>
            {results.map((result, id) => (
                <Container>
                    <Row key={id}>
                        <Col xs={6}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card></Col>
                        <Col xs={6}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card></Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card>
                                <Card.Img variant="top" src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ))}
        </>
    );
}

export default Res;