import React, { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };


  render() {

    return (
        <div className="d6">
        <input
          type="text"
          placeholder="Введите название"
          value={this.state.term}
          onChange={this.onSearchChange}/>
          <button className="search-icon"/>
        </div>
    );
  }
}

export default SearchPanel;
