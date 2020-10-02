import React from 'react';
import './styles.scss';

import GameBoard from './components/GameBoard'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <GameBoard />
      </div>
    )
  }
}

export default App;