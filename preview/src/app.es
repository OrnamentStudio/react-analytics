import React, { PureComponent } from 'react';
import Provider from '../../lib/provider';
import withTrack from '../../lib/with_track';


const Child = withTrack(({ track }) => track.toString());

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { location: 1 };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange() {
    const update = ({ location }) => ({ location: location + 1 });
    this.setState(update);
  }

  render() {
    const { location } = this.state;

    return (
      <article>
        <Provider id="UA-63730821-4" location={location}>
          <h1>Google Analyticst</h1>
          <Child />
        </Provider>
        <button onClick={this.handleLocationChange} type="button">
          Change location
        </button>
      </article>
    );
  }
}

export default App;
