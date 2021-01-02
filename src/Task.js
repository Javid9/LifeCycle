import React, {Component} from 'react';

class Task extends Component {
    state ={
        counter: 1
    }
    render() {
        const {counter} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler} className="container mt-5">
                    <p>{counter}</p>
                    <input onChange={(e) => this.takeValue(e)} className="ml-4" type="text" value={counter}/>
                    <button onClick={this.plus} className="ml-4" type="submit">Plus</button>
                    <button onClick={this.minus} className="ml-4" type="submit">Minus</button>
                </form>
            </div>
        );
    }

    takeValue =(event) => {
       if(event.target.value > 0){
           this.setState({counter: event.target.value})
       }
    }

    plus =(e) => {
        e.preventDefault()
       this.setState({counter: 1+this.state.counter})
    }

    minus = (e) =>{
        e.preventDefault()
        if(this.state.counter > 0){
            this.setState({counter: -1+this.state.counter})
        }
    }


}

export default Task;