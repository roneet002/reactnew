import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredients.css';

class BurgerIngrediant extends Component{
    render(){
        let ingrediant = null;
        switch(this.props.type){
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

}
    BurgerIngrediant.propTypes = {
        type: PropTypes.string.isRequired
      };



 
export default BurgerIngrediant;