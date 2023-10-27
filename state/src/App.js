import { Component } from 'react';
import  cristiano  from './cristiano.jpg';
import './App.css'

const styl={textAlign:"center"};
const aziz={backgroundColor:"#B3D03D",textAlign:"center",margin:"0 99px 0 99px",borderRadius:"50px",border:"solid 10px"}
class App extends Component{
  constructor(){
    super();
    this.state = {date: new Date()}
      this.state = {
        
      timeSinceLastMount: 0,
      //number:1,
      
      shows: true,
      timeSinceMount: 0,
    //time par seconde
    //players 
      Person : { 
                fullName : "Cristiano Ronaldo",
                bio : "Player Football", 
                imgSrc: cristiano, 
                profession:"Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal, est un footballeur international portugais qui joue au poste d'attaquant à Al-Nassr."
              },
    }
    
    this.clickHandler = this.clickHandler.bind(this);
    
    
  }
  
  
  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
    
}

componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({timeSinceMount: this.state.timeSinceMount + 1 });
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

toggleShow = () => {
  this.setState({ show: !this.state.show });
}
  render(){
    if(this.state.show)
    
    
      
    return (
      <div style={aziz} >
        <div style={styl}className="container">      
            
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={cristiano} alt="state/src/cristiano.jpg" width="200" height="230" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
        <h2>Time interval since last component mount: {this.state.timeSinceMount}  seconds</h2>
       
       
        </div>
      </div>
      

      );
      else return (
        //button 
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      
      </div>
      
      );
  }
}

export default App;