import React from "react";
import axios from "axios";

class App extends React.Component{
  
  state = {
    isLoading: true,
    movies: []
  };


  //컴포넌트가 마운트될 때
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log("component mounted");
  }

  componentDidMount(){
    this.getMovies();
  }

  //컴포넌트가 업데이트될 때
  componentDidUpdate(){
    console.log("component updated");
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
      </div>
    )
  }
}

export default App;
