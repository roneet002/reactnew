import React from 'react';
import  './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const Burger=(props)=>{
let transformedIngredients = Object.keys(props.ingrediants).map(igKey=>{
return ([...Array(props.ingrediants[igKey])].map((_, i)=>{
return( <BurgerIngredients key={igKey + i} type={igKey} />)
}));
}).reduce((arr, el)=>{
return arr.concat(el)
}, [])
console.log(transformedIngredients)
if(transformedIngredients.length ===0){
transformedIngredients = <p>add ingrediants which you want from below list</p>
}

return(

<div className="Burger">
<BurgerIngredients type="BreadTop" />
{transformedIngredients}
{/* <BurgerIngredients type="Seeds1" />
<BurgerIngredients type="Seeds2" />

<BurgerIngredients type="cheese" />
<BurgerIngredients type="meat" />
<BurgerIngredients type="bacon" />*/}
<BurgerIngredients type="BreadBottom" /> 
</div>
)



}
export default Burger