import React, { Component } from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ inputValue: value });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue)
    );
    console.log('this.props', this.props)
    console.log('inputValue', inputValue)
    console.log('filtered artists: ', filteredArtists)

    return (
      <div>
        <FilterInput handleChange={this.handleChange} />,
        <Artists artists={filteredArtists} />
      </div>
    )
  }

}
