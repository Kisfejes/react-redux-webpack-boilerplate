import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Counter actions
import { increment, decrement } from '../../redux/modules/counter.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          count: {this.props.count}
        </div>
        <div>
          <button onClick={() => { this.props.dispatch(increment()); }}>Inc</button>
          <button onClick={() => { this.props.dispatch(decrement()); }}>Dec</button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  count: PropTypes.number
};

const mapStateToProps = (state) => ({
  count: state.counter.count
});

export default connect(mapStateToProps)(App);
