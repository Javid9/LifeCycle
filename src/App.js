import React, {Component} from 'react';
import Form from "./Form";
import Task from "./Task";
import  './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor")
    this.state ={
      counter: 0,
      isToggle: false
    }

    this.clickHandle = this.clickHandle.bind(this);
  }

  // componentDidMount() {
  //   console.log("componentDidMount")
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("componentDidUpdate")
  // }
  //
  //
  // componentWillUnmount() {
  //   console.log("componentWillUnmount")
  // }


  render() {

    // console.log("render")
    const {isToggle}=this.state;

    let classname= '';
    this.state.isToggle? classname += 'cavid': classname += '';

    return (
        <div>
          <p className={classname}>Cavid</p>
          <button onClick={this.toggleHandler}>Toggle</button>
          <p>{this.state.counter}</p>
          <button onClick={(e) => this.clickHandle(e, "hello")}>click</button>
          <Form/>
          <Task/>
        </div>

    );
  }

  clickHandle = (e, value) =>{
    console.log(e.target, value)
    this.setState(({counter})=>{
      return {counter: ++counter};
    });
  }

  toggleHandler =() => {
    this.setState({isToggle: !this.state.isToggle})
  }
}

export default App;
