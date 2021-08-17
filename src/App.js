import { Component } from 'react';
import Card from './components/card';
import Insert from './components/insert'
import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const db = firebase.database().ref('msg');

    db.on('value', (snapshot) => {
      const comments = snapshot.val();
      const arr = [];
      for(const comment in comments) {
        arr.push({
          msg: comments[comment].msg, 
          tgl: comments[comment].tgl
        })
      };
      this.setState({ data: arr.reverse() })
    })
  }

  render() {
    return (
    <div className="bg-gray-100 min-h-screen text-gray-500">
      <div className="overflow-auto">
        <div className="float-left text-red-400 p-4 font-bold text-2xl">./PASTE'fy</div>
        <div className="float-right text-xs">
          <Insert />
        </div>
      </div>
      <div className="container mx-auto py-20">
        {this.state.data.map((row,id) => (<Card key={id} data={row} />))} 
      </div>
    </div>
  );
  }
}

export default App;
