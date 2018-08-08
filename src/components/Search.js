import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../actions/search';

class Search extends Component {
  state = {
      searchString: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { searchString } = this.state;
    this.props.fetchEvents(searchString);
  }

  render(){
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          placeholder='Search for an event...'
          name='searchString'
          value={this.state.searchString}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

export default connect(null, {fetchEvents})(Search);
