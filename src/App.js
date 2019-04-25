import React, {Component} from 'react';
import './App.scss';

function Parent({feeds}) {
  return (
    <div className='parent'>
      {feeds.length > 0 ? feeds : null}
    </div>
  )
}

function Feed({text}) {
  return(
    <div className='feed'>{`${text}`}</div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {feeds: []}
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(e => e.json())
      .then(feeds => this.setState({feeds}));
  }

  render() {
    return (
      <div className='container'>
        <Parent feeds={this.state.feeds.slice(0, 33).map((e, i) =>
                                 <Feed text={e.title} key={`${e.id}`}/>)}>
        </Parent>
        <Parent feeds={this.state.feeds.slice(33, 66).map((e, i) =>
                                 <Feed text={e.title} key={`${e.id}`}/>)}>
        </Parent>
        <Parent feeds={this.state.feeds.slice(66, 100).map((e, i) =>
                                 <Feed text={e.title} key={`${e.id}`}/>)}>
        </Parent>
      </div>
    )
  }
}
export default App;
