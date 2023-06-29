import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    console.log("child constructor");
  }

  async componentDidMount() {
    // here the Dom update
    console.log("child component did mount")

    const data = await fetch("https://api.github.com/users/pwanjari23");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    console.log("child render");
    // destructor
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @pwanjari23</h3>
      </div>
    );
  }
}

export default UserClass;
