import React  from 'react';
import {  Duck   } from  './demo';

interface Props{
    duck:Duck;
}

export default function ducItem( Props :Props){

    return (

        <div key={Props.duck.id}>
        <span >{Props.duck.name}</span>
        <button onClick={()=> Props.duck.makeSound(Props.duck.name + 'quack')}> make sound</button>
         </div>
        
    )
}