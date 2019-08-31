import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    
    }
    

render(){
    const disabledinfo={...this.state.ingrediants}
    for(let key in disabledinfo){
         disabledinfo[key] = disabledinfo[key] <=0
    }
return(
<Auxiliary>
<Burger ingrediants={this.state.ingrediants}/>

<BuildControls
addedIngrediant={this.addIngrediantHandler}
removeIngrediantHandler = {this.removeIngrediantHandler}
disabled = {disabledinfo}
price = {this.state.totalPrice}
/>
</Auxiliary>
)
}

}
export default BurgerBuilder