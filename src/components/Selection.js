import { Grid, Button, Container } from "@nextui-org/react";

export default function Selection() {
    return (
        <Container>
            <Button.Group wrap gap={1} rounded animated>
                <Grid>
                    <Button bordered color="secondary">World</Button>
                </Grid>
                <Grid>
                    <Button bordered color="secondary">U.S.</Button>
                </Grid>
                <Grid>
                    <Button bordered color="success">Politics</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">N.Y.</Button>
                </Grid>
            </Button.Group>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button bordered color="warning">Business</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Opinion</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Tech</Button>
                </Grid>
            </Button.Group>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button bordered color="warning">Science</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Health</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Sports</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Arts</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Books</Button>
                </Grid>
            </Button.Group>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button bordered color="warning">Style</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Food</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Travel</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Magazine</Button>
                </Grid>
            </Button.Group>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button bordered color="warning">T Magazine</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Real Estate</Button>
                </Grid>
                <Grid>
                    <Button bordered color="warning">Vide</Button>
                </Grid>
            </Button.Group>
        </Container>
    );
}
