//import React, {useEffect, useState} from 'react';
import React from 'react';
import { useFetchGifs} from '../Hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem'
/*import { getGifs } from '../helpers/getGifs'*/

export const GifGrid = ({category}) => {

    //const [contador, setContador] = useState(0);
    //const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGifs(category);
    //console.log(data)
    /*
    useEffect(() => {
        getGifs(category)
                    .then(setImages)
        console.log(images)
    },[category])
    */
   

    /*
    const suma = () => {
        setContador(contador + 1)
    }
    */

    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft">{category}</h3>            
            { loading && <p className="animate__animated animate__flash animate__fast animate__infinite">Loading...</p> }

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
