import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class PlaylistValueContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ inputValue: value });
    }

    handleSubmit(playlistSubmit) {
        console.log(this.state.inputValue)
        this.setState({inputValue:''})
        playlistSubmit.preventDefault();
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputValue={this.state.inputValue}/>
            </div>
        )
    }
}
