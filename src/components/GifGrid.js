//import React, {useEffect, useState} from 'react';
import React from 'react';
import { useFetchGifs} from '../Hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem'
/*import { getGifs } from '../helpers/getGifs'*/

export const GifGrid = ({category}) => {

    //const [contador, setContador] = useState(0);
    //const [images, setImages] = useState([])
    const {data, loading} = useFetchGifs(category);
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
            <h3>{category}</h3>            
            {loading?'Cargando...':
            <div className="card--grid">        
                    {
                        data.map( (img,i) => {
                            return (<GifGridItem 
                                key={img.id}
                                {...img} />
                            )
                        })
                    }
            </div>
            }
        </>
    )
}
