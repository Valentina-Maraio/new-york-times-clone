const newsCalls = {
    allNews: `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_API_KEY}`, //500

    //api call for selection
    artNews: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 38
    booksNews: `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 34
    businessNews: `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 34
    foodNews: `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 39
    healthNews: `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 26
    magazineNews: `https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 28
    nyregionNews: `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 34
    opinionNews: `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 25
    politicsNews: `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.REACT_APP_API_KEY}`, //22
    realestateNews: `https://api.nytimes.com/svc/topstories/v2/realestate.json?api-key=${process.env.REACT_APP_API_KEY}`, //26

    //chiamate escluse a causa del superamento dei limiti consentiti dall'api
    //scienceNews: `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_API_KEY}`, //26
    //sportsNews: `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${process.env.REACT_APP_API_KEY}`, //39
    //styleNews: `https://api.nytimes.com/svc/topstories/v2/style.json?api-key=${process.env.REACT_APP_API_KEY}`, //25
    //technologyNews: `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.REACT_APP_API_KEY}`, //29
    //travelNews: `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${process.env.REACT_APP_API_KEY}`, //26
    //theaterNews: `https://api.nytimes.com/svc/topstories/v2/theater.json?api-key=${process.env.REACT_APP_API_KEY}`, //34
    //worldNews: `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, //37

    //omaggio a stephen king
    scaryCall: `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${process.env.REACT_APP_API_KEY}` //66
}

export default newsCalls