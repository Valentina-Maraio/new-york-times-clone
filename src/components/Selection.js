import { Grid, Button, Container } from "@nextui-org/react";

export default function Selection() {
    return (
        <Container>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button>1</Button>
                </Grid>
                <Grid>
                    <Button>2</Button>
                </Grid>
                <Grid>
                    <Button>3</Button>
                </Grid>
                <Grid>
                    <Button>4</Button>
                </Grid>
            </Button.Group>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button>1</Button>
                </Grid>
                <Grid>
                    <Button>2</Button>
                </Grid>
                <Grid>
                    <Button>3</Button>
                </Grid>
            </Button.Group>
            <Button.Group wrap gap={1} rounded animated xl >
                <Grid>
                    <Button>1</Button>
                </Grid>
                <Grid>
                    <Button>2</Button>
                </Grid>
                <Grid>
                    <Button>3</Button>
                </Grid>
                <Grid>
                    <Button>4</Button>
                </Grid>
                <Grid>
                    <Button>5</Button>
                </Grid>
            </Button.Group>
        </Container>
    );
}
