import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class PlaylistValueContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            disabled: true,
            edited: false,
            showWarning: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const edited = this.state.edited;

        if (value.length && value.length <= 16 && edited) {
          this.setState({
            inputValue: value,
            disabled: false,
            edited: true,
            showWarning: false
          });
        } else if (value.length > 16 || (value.length === 0 && edited)) {
          this.setState({
            inputValue: value,
            disabled: true,
            edited: true,
            showWarning: true
          });
        } else {
          this.setState({
            inputValue: value,
            disabled: false,
            edited: true,
            showWarning: false
          });
        }
    }

    handleSubmit(playlistSubmit) {
        const playlistName = this.state.inputValue;

        console.log('submitted name', playlistName);
        this.props.addPlaylist(playlistName);

        this.setState({ inputValue: '' })
        playlistSubmit.preventDefault();
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <NewPlaylist disabled={this.state.disabled} showWarning={this.state.showWarning} edited={this.state.edited} handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputValue={this.state.inputValue} />
            </div>
        )
    }
}
