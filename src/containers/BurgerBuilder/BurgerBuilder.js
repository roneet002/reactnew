import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

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
            }
        }
    
render(){
return(

 <Auxiliary>
<Burger ingrediants={this.state.ingrediants}/>
 <div>builder Component</div>
</Auxiliary>

)
}

}
export default BurgerBuilder