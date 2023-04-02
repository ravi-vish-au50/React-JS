import React from "react";

class Person extends React.Copmonent{
    constructor(props){
        super(props);
        console.log('this the function',this.props);
    }
    render(){
        return(
            <>
            <h>Name:{this.props.name}</h>
            <h>Age{this.props.age}</h>
            <h>Gender{this.props.grnder}</h>
            <button onClick={this.props.sampleFunc}>btn</button>
            </>
        )
    }

}

export default  Person;
