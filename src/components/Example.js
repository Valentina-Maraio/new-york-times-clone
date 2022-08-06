import { AllNewsContext } from '../context/AllNewsContext'
import React, { useContext } from 'react'
import '../App.css'

const Example = () => {
    const [results] = useContext(AllNewsContext)
    return (
        <div>
            <p>
                {results.map((result) => {
                    return (
                        <div className='border'>
                            <p>{result.slug_name}</p>
                            <p>{result.section}</p>
                            <p>{result.subsection}</p>
                            <p>{result.title}</p>
                            <p>{result.abstract}</p>
                            <p>{result.uri}</p>
                            <p>{result.url}</p>
                            <p>{result.byline}</p>
                            <img src={result.thumbnail_standard} alt={result.title}/>
                            <p>{result.item_type}</p>
                            <p>{result.source}</p>
                            <p>{result.updated_date}</p>
                            <p>{result.reated_date}</p>
                            <p>{result.ublished_date}</p>
                            <p>{result.first_published_date}</p>
                            <p>{result.material_type_facet}</p>
                            <p>{result.kicker}</p>
                            <p>{result.subheadline}</p>
                            <p>{result.des_facet}</p>
                            <p>{result.org_facet}</p>
                            <p>{result.per_facet}</p>
                            <p>{result.geo_facet}</p>
                            <p>{result.related_urls}</p>
                            <img src={result.multimedia[2].url} alt={result.title}/>
                            <p>{result.multimedia[2].caption}</p>
                            <p>{result.multimedia[2].copyright}</p>
                        </div>
                    )
                })}
            </p>
        </div>
    )
}

export default Example