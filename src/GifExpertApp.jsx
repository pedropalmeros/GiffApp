import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = (newCategory) => {
        console.log(`New category received from child: ${newCategory}`); 
        if( categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    }
    
    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory //setCategories={ setCategories } />
        onNewCategory = { (value) => onAddCategory(value)}
        />

        {/* Listado de Gif */}
        <ol>
            {
                categories.map((category) => (
                    <GifGrid 
                        key={ category } 
                        category = { category }/> 
                ) )
            }
        </ol>

        
    </>
  )
}
