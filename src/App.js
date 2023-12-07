
import './App.css';
import React from 'react';
import Profil from './Componenet/Profil';


 class App extends React.Component{
  constructor(){
    super()
    this.state={
       show: false

    }
  }
  render(){
   
  return (
    <div>
      <h1>Person</h1>
      <button onClick={()=>this.setState({show: !this.state.show})}>{this.state.show? 'Hide' : 'show'}</button>
      {
      this.state.show && <Profil/>
     }
 
    </div>
  );
}
 }

export default App;
