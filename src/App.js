import React from 'react';
import logo from './logo.svg';
import './App.css';
let ans=[]

class App extends React.Component {
  state = {
    sum: ""
  };


  OneHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="1"});
  }

  TwoHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="2"});
  }

  ThreeHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="3"});
  }

  FourHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="4"});
  }

  FiveHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="5"});
  }

  SixHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="6"});
  }

  SevenHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="7"});
  }

  EightHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="8"});
  }

  NineHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="9"});
  }

  ZeroHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total+="0"});
  }

  ClearHandler=()=>{
    let total=this.state.sum;
    this.setState({sum:total=""});
    ans=[]
  }

  HandlerAdd=()=>{
      ans.push(this.state.sum)
      ans.push("+")
    
    let total=this.state.sum;
    this.setState({sum:total=""});
  }

  HandlerSub=()=>{
      ans.push(this.state.sum)
      ans.push("-")
   
    let total=this.state.sum;
    this.setState({sum:total=""});
  }

  HandlerMul=()=>{
      ans.push(this.state.sum)
      ans.push("*")
    

    let total=this.state.sum;
    this.setState({sum:total=""});
  }

  HandlerDiv=()=>{
  
      ans.push(this.state.sum)
      ans.push("/")
    
    let total=this.state.sum;
    this.setState({sum:total=""});
  }

  EqualHandler=()=>{
    let total=this.state.sum;
    ans.push(total)
    this.setState({sum:total=eval(ans.join(''))})
  }

  render() {
    return (
<div id="calc">
<h1>{this.state.sum}</h1>
        <div className="func">
    <button onClick={this.HandlerAdd}>+</button>
    <button onClick={this.HandlerSub}>-</button>
    <button onClick={this.HandlerMul}>*</button>
    <button onClick={this.HandlerDiv}>/</button>
        </div>

        <div className="top">
        <button onClick={this.SevenHandler}>7</button>
        <button onClick={this.EightHandler}>8</button>
        <button onClick={this.NineHandler}>9</button>
        </div>

        <div className="middle">
        <button onClick={this.FourHandler}>4</button>
        <button onClick={this.FiveHandler}>5</button>
        <button onClick={this.SixHandler}>6</button>
        </div>

        <div className="bottom">
        <button onClick={this.OneHandler}>1</button>
        <button onClick={this.TwoHandler}>2</button>
        <button onClick={this.ThreeHandler}>3</button>
        </div>

        <div className="0">
        <button onClick={this.ZeroHandler}>0</button>
        </div>

        <div className="last">
        <button onClick={this.EqualHandler}>=</button>
        <button onClick={this.ClearHandler}>Clear</button>
        </div>


</div>
    )}
}

export default App;
