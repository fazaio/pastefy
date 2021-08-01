import React, { Component } from 'react';
import firebase from '../firebase';

class submit extends Component {
  add() {
    const dates = new Date()
    const db = firebase.database().ref('msg');
    db.push({ msg: 'testing dari reactJS',tgl: dates.toString()});
  }

  render() {
    return (
      <button class="p-5 border bg-white" onClick={this.add}> tambah </button>
    )
  }
}

export default submit