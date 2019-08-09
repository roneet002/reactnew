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
<div className="alert alert-primary center">
{
    Controls.map(ctrl=>{
return(
    <BuildControl key={ctrl.label} 
    
    label ={ctrl.label} 
    added={()=>props.addedIngrediant(ctrl.type)} />
)

    })
}

</div>

)

}
export default BuildControls