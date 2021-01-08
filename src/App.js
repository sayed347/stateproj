
import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName:'sayed drissi',
      bio:'i am learning react js',
      imgSrc:'./Img.Jpg',
      show: false,
      count:0
    };
    this.toggleVisibility=this.toggleVisibility.bind(this); }
    toggleVisibility(){
      this.setState(state=>({show:!state.show}))}
      
      render(){
      if (this.state.show){
        return(
          <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <img src={this.state.imgSrc} alt='profile ' />
          <h1> {this.state.fullName}</h1>
          <h1>{this.state.bio}</h1>
          <h1>this componant has mounted a {this.state.count}seconds before</h1>
        </div>

        );
      } else{
        return(<div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>);
      }


      }
      componentDidMount(){
        setInterval(()=>this.setState(state=>({count:state.count+1})),1000)
      }
    }


export default App;
