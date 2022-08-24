import React, {Component} from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";
import "./App.css";


class Appp extends Component {
    constructor() {
        super()
        this.state = {
            Robots:[],
            searchField:'' 
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({Robots:users}))

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }


  render() {
    const {Robots, searchField} = this.state
    const filterRobots = Robots.filter(Robot =>{
        return Robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(Robots.length === 0){
        return <h1>LOADING</h1>
    } else{
    
  return (
        <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList Robots = { filterRobots } />
        </Scroll>
        </div>
       );
  }
      }
    }
     
export default Appp;