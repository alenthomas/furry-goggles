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
    <div className='feed'>{text}</div>
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
      <div className='main'>
        <p style={{height: '5px', animationDelay: '0s'}}>one</p>
        <p style={{ height: '8px', animationDelay: '2s'}}>two</p>
        <p style={{ height: '7px', animationDelay: '4s'}}>three</p>
        <p style={{ height: '4px', animationDelay: '6s'}}>four</p>
        <p style={{ height: '5px', animationDelay: '8s'}}>five</p>
        <p style={{ height: '9px', animationDelay: '10s'}}>six</p>
        <p style={{ height: '3px', animationDelay: '12s'}}>seven</p>
        <p style={{animationDelay: '14s'}}>eight</p>
        
      </div>
    )
    // return (<Marquee />);
//    return (<Fiddle />);
    return (
      <div className='container'>
        <Parent feeds={this.state.feeds.slice(0, 33).map((e, i) =>
                                 <Feed text={e.title} key={`${e.id}`}/>)}>
        </Parent>
        {/* <Parent feeds={this.state.feeds.slice(33, 66).map((e, i) => */}
        {/*                          <Feed text={e.title} key={`${e.id}`}/>)}> */}
        {/* </Parent> */}
        {/* <Parent feeds={this.state.feeds.slice(66, 100).map((e, i) => */}
        {/*                          <Feed text={e.title} key={`${e.id}`}/>)}> */}
        {/* </Parent> */}
      </div>
    )
  }
}

function Fiddle() {
  return(
    <div className='scroller'>
      <div className='wrapper'>
        <div className='card'>
          <p>Text1</p>
        </div>
        <div className='card'>
          <p>Text2</p>
        </div>
        <div className='card'>
          <p>Text3</p>
        </div>
        <div className='card'>
          <p>Text4</p>
        </div>

      </div>
    </div>
  )
}

function Marquee() {
  return (
    <p className="marquee">
      <span>this is a</span>
      <span>simple marquee</span>
      <span>using css</span>
      <span>only tech</span>
      <span>with a delay</span>
    </p>    
  )
}


export default App;
