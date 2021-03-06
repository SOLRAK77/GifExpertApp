import React, {useEffect, useState} from 'react';
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({category}) => {

    //const [contador, setContador] = useState(0);
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    },[])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Monty&limit=10&api_key=x3j3hc9n8Z3kCdjW4nTA8SWe2OnuvAlzf'        
        const resp = await fetch(url)
        const{data} = await resp.json()        

        const gifs = data.map( img => {
            return {
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
            }
        })

        setImages(gifs);
    }

    /*
    const suma = () => {
        setContador(contador + 1)
    }
    */

    return (
        <>
            <h3>{category}</h3>
            <div className="card--grid">        
                    {
                        images.map( (img,i) => {
                            return (<GifGridItem 
                                key={`Image${i}`}
                                {...img} />
                            )
                        })
                    }
            </div>
        </>
    )
}
