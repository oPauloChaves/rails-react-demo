import React, { Component } from "react";

async function testFetchData() {
  const res = await fetch("/api/v1/tests");
  return await res.json();
}

export class App extends Component {
  state = {
    users: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { users } = await testFetchData();
      this.setState({ users, error: null, loading: false });
    } catch (err) {
      this.setState({ users: null, error: err.message, loading: false });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
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
