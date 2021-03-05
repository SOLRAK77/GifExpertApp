import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'
export default function GifExpertApp() {

    //const categories = ['One pounch','Dragon Ball','Samurai X']
    const [categories,setCategories] = useState(['Mortal Kombat X1'])

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
                categories.map((cat,i) => (
                    <GifGrid 
                        key={`categoria-${i}`}
                        category={cat} 
                    />
                ))
             }   
            </ul>
        </div>
    )
}
