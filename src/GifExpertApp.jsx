import { useState } from "react"
import { AddCategory, GifGrid } from "./Components";



export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Piece']);
    
    const onAddCategory =(newCategory)=>{
       
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ])
        // setCategories(cat=>[...cat,'Dota'])

    }

    return (
    <>
        {/* Título */}
       
        <h1>GifExpertApp</h1>
       
        {/* Imput */}
        <AddCategory 
            onNewCategory={ onAddCategory }

        />


        { 
        categories.map( (category) =>(
                    <GifGrid 
                    key={category}
                    category={category}/>
                )) 
        }


        {/* Gif Item */}
    </> 
)
}
