import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props)

    console.log("parent constructor")
  }

  componentDidMount(){
    console.log(" parent component mount did mount")

  }

  componentDidUpdate(){

    console.log("component did update");
  }

   componentWillUnmount(){
    console.log("component will amount");

   }


  render(){
    console.log("parent render")
    return(
      <div>
        <h1>About class component</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name={"Chinu (class)"}/>
      </div>

    )
  }
}

export default About;

