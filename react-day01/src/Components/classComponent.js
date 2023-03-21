import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
        this.updateCounter = this.updateCounter.bind(this);
    }
    updateCounter() {
        let oldState = this.state.counter;
        this.setState({
            counter: oldState + 1
        });
    }
    render() {
        const { counter } = this.state;
        return (
            <>
                <h1>This is the class base Component</h1>
                <p>My current sate of counter is:{counter} test</p>
                <button className='btn' onClick={this.updateCounter}>increase count for class</button>
            </>
        )
    }
}


export default ClassComponent;




