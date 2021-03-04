import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
export default function GifExpertApp() {

    //const categories = ['One pounch','Dragon Ball','Samurai X']
    const [categories,setCategories] = useState(['One pounch','Dragon Ball','Samurai X','Final Fantasy','Mortal Kombat X1'])

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
                 categories.map((cat,i) => {
                     return (<li key={i}>{cat}</li>)
                 })
             }   
            </ul>
        </div>
    )
}
