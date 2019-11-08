import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal'

const price_ingrediant= {
   salad : 1.2,
   meat : 2.3,
   cheese : 4.4,
   bacon : 3.6,
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super()
    //     this.state={...}
    // }
    state = {
            ingrediants:{
                salad:0,
                meat:0,
                cheese:0,
                bacon:0
            },
            totalPrice : 4,
            purchasable :false
        }
    
addIngrediantHandler = (type)=>{
const oldCount = this.state.ingrediants[type]
const updateIngrediantCount = oldCount + 1
const updateIngrediant ={...this.state.ingrediants}
updateIngrediant[type] = updateIngrediantCount
const totalPrice = this.state.totalPrice
const updatePrice = totalPrice + price_ingrediant[type]
this.setState({
    totalPrice : updatePrice,
    ingrediants : updateIngrediant    
})
this.purchasableState(updateIngrediant)
}
removeIngrediantHandler = (type)=>{
    const oldCount = this.state.ingrediants[type]
    if(oldCount <= 0){
        return
    }
    const updateIngrediantCount = oldCount - 1
    const updateIngrediant ={...this.state.ingrediants}
    updateIngrediant[type] = updateIngrediantCount
    const totalPrice = this.state.totalPrice
    const updatePrice = totalPrice - price_ingrediant[type]
    this.setState({
        totalPrice : updatePrice,
        ingrediants : updateIngrediant    
    })
    this.purchasableState(updateIngrediant)
    }
   
purchasableState =(ingrediants)=>{
const sum = Object.keys(ingrediants).map((igkey)=>{
return ingrediants[igkey]
}).reduce((sum, el)=>{
return sum + el

}, 0)
this.setState({
   purchasable:sum > 0
})

    }

render(){
    const disabledinfo={...this.state.ingrediants}
    for(let key in disabledinfo){
         disabledinfo[key] = disabledinfo[key] <=0
    }
return(
<Auxiliary>
    <Modal />
<Burger ingrediants={this.state.ingrediants}/>

<BuildControls
addedIngrediant={this.addIngrediantHandler}
removeIngrediantHandler = {this.removeIngrediantHandler}
disabled = {disabledinfo}
price = {this.state.totalPrice}
purchasable = {this.state.purchasable}
/>

<button type="submit" className="btn btn-primary">Submit</button>
</Auxiliary>
)
}

}
export default BurgerBuilder