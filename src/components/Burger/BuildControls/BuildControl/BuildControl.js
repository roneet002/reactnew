import React from 'react'

const BuildControl = (props)=>{
return(
<div className="clearfix text-center mx-auto w-25">
<p className="float-left mr-4 w-25 text-left color">{props.label} :</p>
<button type="button" className="float-left btn btn-outline-dark mr-4">Less</button>
<button type="button" className="float-left btn btn-outline-dark mr-4" onClick={props.ingrediant}>More</button>
</div>
)
}

export default BuildControl