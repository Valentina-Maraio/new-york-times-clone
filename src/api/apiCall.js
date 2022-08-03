const newsCalls = {
    allNews: `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_API_KEY}`,
    worldNews: `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${process.env.REACT_APP_API_KEY}`
}

export default newsCalls