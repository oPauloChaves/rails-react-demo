import React, { Component } from "react";

async function testFetchData() {
  const res = await fetch("/api/v1/tests");
  return await res.json();
}

export class App extends Component {
  state = {
    users: null,
    error: null,
    loading: false
  };

  fetchUsers = async () => {
    this.setState({ loading: true });
    try {
      const { users } = await testFetchData();
      this.setState({ users, error: null, loading: false });
    } catch (err) {
      this.setState({ users: null, error: err.message, loading: false });
    }
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchUsers}>Fetch Users</button>
        <br />
        <br />
        {this.state.loading && <div>Loading...</div>}
        {this.state.error && <div>Error: {this.state.error}</div>}
        {this.state.users && (
          <ul>
            {this.state.users.map(user => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
