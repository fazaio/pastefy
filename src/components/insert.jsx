import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import firebase from '../firebase';


class Insert extends Component{

  constructor(props) {
    super(props)
    this.state = {
      data : {
        msg: 'tes',
        tgl: new Date().toString()
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(event) {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        msg: event.target.value
      }
    }));
  }

  add(event) {
    event.preventDefault();
    const db = firebase.database().ref('msg');
    db.push({ msg: this.state.data.msg, tgl: this.state.data.tgl});
  }

  render() {
    return (
    <Popup trigger={<button className="button"> + note </button>} modal>
    <div class="p-5 overflow-auto">
        <form onSubmit={this.add}>
          <input value={this.state.data.msg} type="text" className="focus:outline-none border text-gray-500 w-full p-2 rounded" onChange={this.handleChange} />
            <div className="p-2 text-xs text-gray-400">{ this.state.data.tgl }</div>
          <button className="p-2 shadows mt-2 bg-red-500 float-right text-sm rounded text-gray-100">save</button>
        </form>
    </div>
    </Popup>)
  }
}

export default Insert