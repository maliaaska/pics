import React from "react";
import Searchbar from "./SearchBar";
class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar />
      </div>
    );
  }
}

export default App;
