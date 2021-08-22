import React from "react";
import "./App.css";

import { Cards } from "./components";
import { fetchData } from "./api/";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
