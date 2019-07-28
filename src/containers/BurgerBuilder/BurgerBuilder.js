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
                salad:1,
                bacon:1,
                meat:2,
                cheese:2
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