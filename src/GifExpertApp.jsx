import {React, useState} from 'react'
import { AddCategories, GifGrid } from './Components/index'
// import { AddCategories } from './Components/AddCategories'
// import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    //.../// operadr spread
    const [categories, setCategories] = useState(['Tits'])
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) {
            return;
        }
        setCategories([ newCategory, ...categories ]);
    }
  return (
    <>
        {/*titulo*/ }
        <h1>GifExpertApp</h1>

        {/*input*/ }
        <AddCategories 
            //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />    

        {/*listado de gif*/ }
        
        {
            categories.map(category => (
                <GifGrid 
                    key={category} 
                    category={category}
                />    
            ))
            
            // categories.map(category => {
            //     return <li key={category}>{category}</li>
            // })
        }
        
        {/*gif item*/ }
    </>
  )
}


        //<button onClick={onAddCategory}>Agregar</button>
        //<ol>
        //{
          //  categories.map(category => {
            //    return <li key={category}>{category}</li>
            //})
        //}
    //</ol>