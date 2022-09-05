import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { Card, Grid, Row, Text } from "@nextui-org/react";

const Books = () => {
    const [results] = useContext(BooksContext);

    return (
        <>
            <Grid.Container gap={2} justify="flex-start">
                {results.map((result) => (
                    <Grid xs={6} sm={3}>
                        <Card
                        >
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    objectFit="cover"
                                    width="100%"
                                    height={'auto'}
                                    src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title}
                                />
                            </Card.Body>
                            <Card.Footer css={{ justifyItems: "flex-start" }}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text b>{result.title}</Text>
                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}
                                    </Text>
                                    <Text css={{ color: "$accents8", fontSize: "$sm" }}>
                                        Copyright:  {result.multimedia && result.multimedia[2] ? result.multimedia[2].copyright : 'free'}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </>
    )
}

export default Books