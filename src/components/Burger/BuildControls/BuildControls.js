import React from 'react';
import BuildControl from './BuildControl/BuildControl'

const Controls = [
{label: 'Salad', type:'salad'},
{label: 'Meat', type:'meat'},
{label: 'Cheese', type:'cheese'},
{label: 'Bacon', type:'bacon'}
]


const BuildControls = (props)=>{
return(
<div className="alert alert-primary center  w-100 bottom-0 mb-0">
<p className="font-weight-bolder">Current Price : {props.price.toFixed(1)}</p>
{
    Controls.map(ctrl=>{
return(
    <BuildControl
    key={ctrl.label}     
    label ={ctrl.label} 
    added={()=>props.addedIngrediant(ctrl.type)}
    removed={()=>props.removeIngrediantHandler(ctrl.type)}
    disabled = {props.disabled[ctrl.type]}
    />
)
}
)
}

<button className="btn btn-primary mt-4"
disabled={!props.purchasable}
>Order Now</button>
</div>

)

}
export default BuildControls