import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const price_ingrediant= {
   salad : 2,
   meat : 2,
   cheese : 2,
   bacon : 2,
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super()
    //     this.state={...}
    // }
    state = {
            ingrediants:{
                salad:0,
                bacon:0,
                meat:0,
                cheese:0
            },
            totalPrice : 4
        }
    
addIngrediantHandler = (type)=>{
const oldCount = this.state.ingrediants[type]
const updateIngrediantCount = oldCount + 1
const updateIngrediant ={
...this.state.ingrediants
}
updateIngrediant[type] = updateIngrediantCount
const totalPrice = this.state.totalPrice
const updatePriceCount = price_ingrediant[type]
const updatePrice = totalPrice + updatePriceCount


this.setState({
    totalPrice : updatePrice,
    ingrediants : updateIngrediant    
})

}


render(){
return(
<Auxiliary>
<Burger ingrediants={this.state.ingrediants}/>
<BuildControls addedIngrediant={this.addIngrediantHandler} />


</Auxiliary>

)
}

}
export default BurgerBuilder