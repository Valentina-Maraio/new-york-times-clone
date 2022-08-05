const newsCalls = {
    allNews: `https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=${process.env.REACT_APP_API_KEY}&limit=500`,
    worldNews: `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${process.env.REACT_APP_API_KEY}&limit=500`
}

export default newsCalls