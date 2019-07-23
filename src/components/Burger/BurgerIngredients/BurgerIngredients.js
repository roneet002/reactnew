import React from 'react';
import './BurgerIngredients.css';

const BurgerIngrediant =(props)=>{
let ingrediant = null;
switch(props.type){
case("bread-bottom"):
ingrediant = <div className="bread-bottom"></div>;
break;
case("breead-top"):
ingrediant =(
    <div className="bread-top">
        <div className="seed1"></div>
        <div className="seed2"></div>
    </div>
);
break;
case("meat"):
ingrediant=<div className="meat"></div>;
break;
case("cheese"):
ingrediant=<div className="cheese"></div>;
break;
case("bacon"):
ingrediant=<div className="bacon"></div>;
break;
case("salad"):
ingrediant=<div className="salad"></div>;
break;
default:
    ingrediant=null;

    return ingrediant




}



}
 
export default BurgerIngrediant;