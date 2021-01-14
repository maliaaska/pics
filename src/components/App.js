import React from "react";
import axios from "axios";
import Searchbar from "./SearchBar";

class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    // async allows to use the async or await syntax inside this function
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 4ArbH5wyr2LWuVGlJHPkePXXLL0lcEuWFE8e6dUvT7I",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
