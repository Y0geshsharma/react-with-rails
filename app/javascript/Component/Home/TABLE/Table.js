import React, { Component } from "react";
import List from "./List";
import ActiveItem from "./ActiveItem";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.video_module.map(data => {
      let videoHandle = this.props.Status.bind(this, data)
      return data.active ? (
        <ActiveItem
          status={videoHandle}
          slnum={data.id}
          title={data.title}
          description={data.description}
        />
      ) : (
        <List
          status={videoHandle}
          slnum={data.id}
          title={data.title}
          description={data.description}
        />
      );
    });

    return (
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-b">React for Beginners - Videos</h2>
          </div>
          {list}
        </div>
      </div>
    );
  }
}
export default Table;
