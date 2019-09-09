import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then(res => console.log(res.data));
  // }
  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get("https://api.github.com/users")

  //   this.setState({ users: res.data, loading: false })
  // }

  // Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)

    this.setState({ users: res.data.items, loading: false })
  }

  render() {

    const { loading, users } = this.state;

    return (
      <div>
        <Navbar title="Destiny Carry" icon="fab fa-github" />
        <Search searchUsers={this.searchUsers}/>
        <Users loading={loading} users={users}/>
      </div>
    );
  }
}

export default App;
