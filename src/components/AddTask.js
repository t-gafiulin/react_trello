import React, { Component } from 'react';



export default class AddTask extends Component{

    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    handleChange(e){
        if(e.key === 'Enter'){
            if(this.state.value !== ''){
                this.props.addTask(this.state.value);
                this.setState({value: ''});
            }
        } else if(e.key === 'Backspace'){
            this.setState({value: this.state.value.substring(0, this.state.value.length - 1)});
        } else if((e.keyCode >= 48 && e.keyCode <= 90) || e.keyCode === 32){
            this.setState({value: this.state.value + e.key});
        }
    }

    render(){
        return <div className='add-task'>
            <span>I need to </span> 
            <input 
                className='add-task__input' 
                value={this.state.value} 
                onKeyDown={this.handleChange.bind(this)} 
            />  
        </div>;
    }
}