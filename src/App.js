import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Vidmain from './components/vidplayer/Vidmain'
import Header from './components/header/Header'
import Menu from './components/header/Menu'
import Aboutmain from './components/about/Aboutmain'
import Loading from './components/loading/Loading'

const styles = {
  loading:{
    backgroundColor:'black',
    height:"100vh",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    logo:{
      width:"70vw",
    }
  },
  SocialMediaIcons:{
    width:"7vh",
    height:"7vh",
    color:'white',
    fontSize:'3em',
    marginRight:".2em",
  },
  Vidmain:{
    Player:{
      width:"100%",
      height:"75vh"
    },
    Select:{
      backgroundColor:"#FC7A3D",
    },
    Buttons:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
    Button:{
      color:'white',
      backgroundColor:'black',
      width:'100%',
      borderRadius:".7em"
    }
  },
  Header:{
    images:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    image:{
      height:"20vh"
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      window:'video',
      videos:null,
      loaded:false,
      version:'desktop'
    }
    this.updateWindow = this.updateWindow.bind(this)
    this.pages = this.pages.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions(){
    const {version} = this.state
    const width = window.innerWidth
    if(width < 560 && version === 'desktop'){
      this.setState({version:'mobile'})
    }
    if(width > 560 && version === 'mobile'){
      this.setState({version:'desktop'})
    }
    console.log(this.state.version)
  }

componentDidMount(){
    fetch("https://natespilman.tech/pyrrhic")
    .then(blob => blob.json())
    .then(data => 
        this.setState({videos:data}));
    const thisConst = this
    setTimeout(function(){thisConst.setState({loaded:true})},3000)
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateWindow(update){
    this.setState({window:update})
  }
  pages(){
    if(this.state.videos && this.state.loaded){    
    if(this.state.window==="video"){
      return(
        <div id="App">
        <Header styleObj = {styles}/>
        <Menu updateWindow = {this.updateWindow} styleObj = {styles} window = {this.state.window}/>
        <Vidmain styleObj = {styles} version = {this.state.version} videos = {this.state.videos} selected = {this.state.videos[0]}/>
        </div>)
    }else{
      return(
    <div id="App">
    <Header styleObj = {styles}/>
    <Menu updateWindow = {this.updateWindow} styleObj = {styles} window = {this.state.window}/>
     <Aboutmain styleObj = {styles}/>
    </div>
      )
    }}
    else{
      return(
<Loading styleObj = {styles}/>
      )
      }
    }
  

  render() {
    return (
      this.pages()
    );
  }
}

export default App;
