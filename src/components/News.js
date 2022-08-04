import React, { useContext } from 'react'
import { Card, Grid, Text, Col } from "@nextui-org/react";
import { WorldContext } from '../context/WorldContext'

export default function News() {
    const [results] = useContext(WorldContext)
    return (
        <Grid.Container gap={1}>
            {results.map((result) => {
                return (
                    <Grid sm={6} md={5}>
                        <Card>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        {result.section}
                                    </Text>
                                    <Text h4 color="white">
                                        {result.title}
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Image
                                src={result.thumbnail_standard}
                                objectFit="fit"
                                width="100%"
                                height={150}
                                alt="Card image background"
                            />
                        </Card>
                    </Grid>
                )
            })}
        </Grid.Container>
    );
}
