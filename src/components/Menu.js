import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import News from './News';
import Arts from '../pages/Arts';
import Books from '../pages/Books';
import Business from '../pages/Business';
import Food from '../pages/Food';
import Health from '../pages/Health';
import Magazine from '../pages/Magazine';
import NY from '../pages/NY';
import Opinion from '../pages/Opinion';
import Politics from '../pages/Politics';
import RealEstate from '../pages/RealEstate';
import { AllNewsProvider } from '../context/AllNewsContext'
import { ArtsProvider } from '../context/ArtsContext';
import { BooksProvider } from '../context/BooksContext';
import { BusinessProvider } from '../context/BusinessContext';
import { FoodProvider } from '../context/FoodContext';
import { HealthProvider } from '../context/HealthContext';
import { MagazineProvider } from '../context/MagazineContext';
import { NYRegionProvider } from '../context/NYRegionContext';
import { OpinionProvider } from '../context/OpinionContext';
import { PoliticsProvider } from '../context/PoliticsContext';
import { RealEstateProvider } from '../context/RealEstateContext';


function Menu() {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            variant='tabs'
        >
            <Tab eventKey="home" title="Home">
                <AllNewsProvider>
                    <News />
                </AllNewsProvider>
            </Tab>
            <Tab eventKey="arts" title="Arts">
                <ArtsProvider>
                    <Arts />
                </ArtsProvider>
            </Tab>
            <Tab eventKey="books" title="Books">
                <BooksProvider>
                    <Books />
                </BooksProvider>
            </Tab>
            <Tab eventKey="business" title="Business">
                <BusinessProvider>
                    <Business />
                </BusinessProvider>
            </Tab>
            <Tab eventKey="food" title="Food">
                <FoodProvider>
                    <Food />
                </FoodProvider>
            </Tab>
            <Tab eventKey="health" title="Health">
                <HealthProvider>
                    <Health />
                </HealthProvider>
            </Tab>
            <Tab eventKey="magazine" title="Magazine">
                <MagazineProvider>
                    <Magazine />
                </MagazineProvider>
            </Tab>
            <Tab eventKey="ny" title="NY">
                <NYRegionProvider>
                    <NY />
                </NYRegionProvider>
            </Tab>
            <Tab eventKey="opinion" title="Opinion">
                <OpinionProvider>
                    <Opinion />
                </OpinionProvider>
            </Tab>
            
            <Tab eventKey="politics" title="Politics">
                <PoliticsProvider>
                    <Politics />
                </PoliticsProvider>
            </Tab>
            <Tab eventKey="realestate" title="Real Estate">
                <RealEstateProvider>
                    <RealEstate />
                </RealEstateProvider>
            </Tab>
        </Tabs>
    );
}

export default Menu;

