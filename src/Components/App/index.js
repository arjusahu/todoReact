import React, { useState } from "react";
import Item from "../Item";
import "./App.css"

let App = () => {

    let [input,setInput]=useState("");
    let [items,setItems]=useState([]);

    let handleChange=(event)=>{
        let value=event.target.value;
        setInput(value);
       
    }
    let handleClick=()=>{
        if (input!="")
        {
         setItems((oldItems)=>{
          return [...oldItems,input];
        });
        setInput("");
    }
    }

    let handleDelete=(index)=>{
      setItems((olditems)=>{
         return (olditems.filter((item,indx)=>{
             return index!==indx;
         }))
      });
    }
    console.log(items);

    return (
               <>
            <div className="main">
                <div className="center">
                    <div className="inputField">
                    <h1>TO-DO List</h1>
                    <input type="text" 
                    placeholder="Enter text here"
                    onChange={handleChange}
                    value={input}
                    />
                    <button className="btn" onClick={handleClick}>+</button>
                    </div>
                    <Item items={items} handleDelete={handleDelete}/>
                </div>
            </div>
        </>
    );
}

export default App;