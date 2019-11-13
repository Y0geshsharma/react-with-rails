import React, { Component } from "react";
import Jumbotrun from "./Jumbotrun";
import Table from "./TABLE/Table";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      video_module: [
        { id: 1, title: "Introduction to reat", description: "check out more official doc for more", active: false },
        { id: 2, title: "Data binding in React", description: "check out more official doc for more", active: false },
        { id: 3, title: "Components in React", description: "check out more official doc for more", active: false },
        { id: 4, title: "States in react", description: "check out more official doc for more", active: false },
        { id: 5, title: "Props in react", description: "check out more official doc for more", active: false }

      ]
    };
  }
  changeVideoStatus(item, event) {
    event.preventDefault();
    let module = [... this.state.video_module]
    module.map((data) =>{
        data.active = false
    })
    item.active = !item.active
    module[item.id-1]= item
this.setState(module)
  }
  render() {
    return (
      <div>
        <Jumbotrun />

        <Table
          Status={this.changeVideoStatus.bind(this)}
          video_module={this.state.video_module}
        />
      </div>
    );
  }
}
export default Home;
