import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'
export default function GifExpertApp() {

    //const categories = ['One pounch','Dragon Ball','Samurai X']
    const [categories,setCategories] = useState(['Superman'])

    /*
    const addCategory = () =>{
        setCategories([...categories,'Nueva categoria'])
    }
    */

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ul>
             {                 
                categories.map((category,i) => (
                    <GifGrid 
                        key={category+i}
                        category={category} 
                    />
                ))
             }   
            </ul>
        </div>
    )
}
