import './style.css';
import './App.css';
import React from 'react'

class App extends React.Component {
state={
  Person:{
    FullName:'Derouiche Aymen',
    Bio:'its a code time ...',
    imgSrc:<img src ='./photo.jpg' className='photo' alt='ph' /> ,
    profession:'an devlopper web & mobile',
  },
  Show:false,
  Timer:0,
  interval:null,
}
componentDidMount(){
this.setState({
  interval: setInterval(
    () => this.setState({Timer: this.state.Timer + 1}),
    1000
  )
});

}

Hide=()=>{
  this.setState({Show:!this.state.Show})
  this.setState({Timer:0})
}

  render(){
return(
  <div className='page' >
    {
    (!this.state.Show) ? 
    <button onClick={this.Hide} >show my profile</button>
    : <div>
      <button onClick={this.Hide}>hide my profile</button>
      <h2>FullName: {this.state.Person.FullName}</h2>
      <p>Bio: {this.state.Person.Bio}</p>
      <p>{this.state.Person.imgSrc}</p>
      <h3>Proffision: {this.state.Person.profession}</h3>
      <h2 className='TT'>{this.state.Timer}</h2>
    
    
  </div>
  }
  </div>
)

  }
}

export default App;
