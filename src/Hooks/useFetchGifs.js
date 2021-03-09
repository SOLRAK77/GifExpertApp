import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data : [],
        loading : true
    })

    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                //console.log(imgs)
                setstate({
                    data : imgs,
                    loading : false
                })
                /*
                setTimeout(() => {
                    
                }, 3000);
                */
            })            
    },[])

    return state;
}