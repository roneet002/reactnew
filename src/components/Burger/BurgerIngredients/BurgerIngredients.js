import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredients.css'

class BurgerIngredients extends Component{
    render(){
        let ingrediant = null;
        switch(this.props.type){
        case("BreadBottom"):
        ingrediant = <div className="BreadBottom"></div>;
        break;
        case("BreadTop"):
        ingrediant =(
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
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
    
        }
    
        return (ingrediant)
    }

}
BurgerIngredients.propTypes = {
        type: PropTypes.string.isRequired
      };



 
export default BurgerIngredients;