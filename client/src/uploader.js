import React, { Component } from "react";
import Axios from "axios";

export class Uploader extends Component {
  state = {
    error: "",
    loading: false,
    result: ""
  };

  onSubmit = async ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    this.setState(prev => ({ ...prev, loading: true }));
    try {
      const res = await Axios.post("/api/v1/uploads", formData);
      console.log(res);
      this.setState({ error: "", result: res.data.url, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ error: err.message, loading: false, result: null });
    }
  };

  render() {
    return (
      <div className="Uploader">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="file">File input</label>
          <input type="file" id="file" name="upload[file]" />
          <button type="submit">Send file</button>
        </form>
        <br />
        {this.state.loading && <p>Uploading....</p>}
        {this.state.error && <p>Upload failed. {this.state.error}</p>}
      </div>
    );
  }
}

export default Uploader;
