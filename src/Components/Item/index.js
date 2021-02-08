import React from "react";
import "./Item.css"

let Item=(props)=>{
    return (
        <>
     <ol>
         {
             props.items.map((itemval,index)=>{
                 return (
                     <div className="items">
                 <button onClick={()=>props.handleDelete(index)}>-</button>
                 <li key={index} >{itemval}</li>
                
                 </div>
                 )
             })
         }
     </ol>
     </>
    );
}
export default Item;