import { Grid, Button, Container } from "@nextui-org/react";
import { Link } from 'react-router-dom'

export default function Selection() {
    return (
        <Container>
            <Button.Group gap={1} rounded animated>
                <Grid>
                    <Link to={"/world"}>
                        <Button bordered>World</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/us"}>
                        <Button bordered color="secondary">U.S.</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/politics"}>
                        <Button bordered color="success">Politics</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/ny"}>
                        <Button bordered color="warning">N.Y.</Button>
                    </Link>
                </Grid>
            </Button.Group>
            <Button.Group gap={1} rounded animated>
                <Grid>
                    <Link to={"/business"}>
                        <Button bordered color="warning">Business</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/opinion"}>
                        <Button bordered color="warning">Opinion</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/tech"}>
                        <Button bordered color="warning">Tech</Button>
                    </Link>
                </Grid>
            </Button.Group>
            <Button.Group gap={1} rounded animated >
                <Grid>
                    <Link to={"/science"}>
                        <Button bordered color="warning">Science</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/health"}>
                        <Button bordered color="warning">Health</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/sports"}>
                        <Button bordered color="warning">Sports</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/arts"}>
                        <Button bordered color="warning">Arts</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/books"}>
                        <Button bordered color="warning">Books</Button>
                    </Link>
                </Grid>
            </Button.Group>
            <Button.Group gap={1} rounded animated >
                <Grid>
                    <Link to={"/style"}>
                        <Button bordered color="warning">Style</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/food"}>
                        <Button bordered color="warning">Food</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/travel"}>
                        <Button bordered color="warning">Travel</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/magazine"}>
                        <Button bordered color="warning">Magazine</Button>
                    </Link>
                </Grid>
            </Button.Group>
            <Button.Group gap={1} rounded animated >
                <Grid>
                    <Link to={"/tmagazine"}>
                        <Button bordered color="warning">T Magazine</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/realestate"}>
                        <Button bordered color="warning">Real Estate</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={"/theater"}>
                        <Button bordered color="warning">Theater</Button>
                    </Link>
                </Grid>
            </Button.Group>
        </Container>
    );
}
