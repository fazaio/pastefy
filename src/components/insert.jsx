import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


class Insert extends Component{

  constructor(props) {
    super(props)
    this.state = {
      data : {
        msg: '',
        tgl: ''
      }
    }
  }

  add() {
    
  }

  render() {
    return (
    <Popup trigger={<button className="button"> + note </button>} modal>
    <div class="p-5 overflow-auto">
        <form onSubmit={this.add}>
                <input value={this.state.data.msg} type="text" class="border w-full p-2 rounded" />
                <button class="p-2 border mt-2 float-right text-sm rounded">+ new</button>
        </form>
    </div>
    </Popup>)
  }
}

export default Insert