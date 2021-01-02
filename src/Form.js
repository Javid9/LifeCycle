import React, {Component, createRef} from 'react';

class Form extends Component {

    state = {
        name: '',
        surname: ""
    }
    myref = createRef();
    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state)
        console.log(this.myref.current.value)
        console.log(this.myref)
    }

    changeHandler = (event) => {
        const target = event.target;
       this.setState({[target.name]: event.target.value})

    }

    render() {
        const {name, surname} = this.state
        return (
            <React.Fragment>
                <p className="container">{name}</p>
                <p className="container">{surname}</p>
                <form onSubmit={this.submitHandler} className="container">
                    <input className="ml-4" name="name" onChange={(e) => this.changeHandler(e)} type="text" value={name}/>
                    <input className="ml-4" name="surname" onChange={(e) => this.changeHandler(e)} type="text" value={surname}/>
                    <input className="ml-4" type="text" ref={this.myref}/>
                    <button className="ml-4" type="submit">submit</button>
                </form>


            </React.Fragment>
        );
    }
}

export default Form;