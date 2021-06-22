import React from 'react';
import '../styles/components/Counter.scss';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 10
    }
  }
  handlePlusCounter = ()=>{

  }
  render() {
    return(
      <div>
        <h1>Counter</h1>
        <div>
          <h3>{this.state.number}</h3>
        </div>
        <div>
          <button type="button" onClick={}>Incrementar</button>
          <button type="button">Decrementar</button>
        </div>
      </div>
    )
  }
}
export default Counter;