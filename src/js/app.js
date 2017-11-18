import React, { Component } from 'react';
import { render } from 'react-dom';

require('../styles/app.scss');

export default class App extends Component {
    render() {
        return (
            <div class='test'>
                HI I'm REACT
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));