import React, { Component } from 'react';
import './App.css';
import Select from './Select';
import Add from './Add';
import Subtract from './Subtract';
import Multiply from './Multiply';
import Divide from './Divide';

class App extends Component {
  constructor(){
    super();
    this.state={
      input1:null,
      input2:null,
      operator: '--Select an Option--'

    }
    this.updateOperator=this.updateOperator.bind(this);
  }
changeHandler(key,e){
  this.setState({[key]:e.target.value})
}

updateOperator(val){
  this.setState({operator:val});
}

  render(){
    return<div className='App'>
    <Select updateOperator={this.updateOperator} num1={this.state.input1} num2={this.state.input2}></Select>
<br></br>    
<input
    type='number'
    placeholder='Num 1'
    onChange={(e)=>this.changeHandler('input1',e)}/>
    <input
    type='number'
    placeholder='Num 2' 
    onChange={(e)=>this.changeHandler('input2',e)}/>
    <br></br>
    {this.state.operator==='add' ? <Add num1={this.state.input1} num2={this.state.input2}></Add>: null}
    {this.state.operator==='subtract' ? <Subtract num1={this.state.input1} num2={this.state.input2}></Subtract>: null}
    {this.state.operator==='multiply' ? <Multiply num1={this.state.input1} num2={this.state.input2}></Multiply>: null}
    {this.state.operator==='divide' ? <Divide num1={this.state.input1} num2={this.state.input2}></Divide>: null}

    

    </div>
  }

}

export default App;
