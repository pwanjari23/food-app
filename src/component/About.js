import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "./userContext";

class About extends Component {
  constructor(props) {
    super(props)

    console.log("parent constructor")
  }

  componentDidMount() {
    console.log(" parent component mount did mount")

  }

  componentDidUpdate() {

    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will amount");

  }


  render() {
    console.log("parent render")
    return (
      <div>
        <h1>About class component</h1>
        {/* <div>
          loggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div> */}
        <h2>This is namaste react web series</h2>
        <UserClass name={"Chinu (class)"} />
      </div>

    )
  }
}








export default About;


