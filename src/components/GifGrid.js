import React, {useEffect, useState} from 'react';
import {GifGridItem} from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    //const [contador, setContador] = useState(0);
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
                    .then(setImages)
        console.log(images)
    },[category])
   

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
                                key={img.id}
                                {...img} />
                            )
                        })
                    }
            </div>
        </>
    )
}
