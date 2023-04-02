import React from 'react'

 function PersonFunction(props)=> {
  return (
    <div>
          <h>Name:{props.name}</h>
            <h>Age{props.age}</h>
            <h>Gender{props.grnder}</h>
    </div>
  )
}
 export default PersonFunction;