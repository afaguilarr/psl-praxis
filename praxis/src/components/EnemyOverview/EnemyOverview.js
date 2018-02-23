import React, { Component } from 'react';
import './EnemyOverview.css';

class EnemyOverview extends Component {
    render() {
        return (<div className='enemy-overview-container'>
            <img className='enemy-overview-image' src={this.props.image} alt={this.props.name} />
            <a href={this.props.link}><h1>{this.props.name}</h1></a>
            <p className='enemy-overview-text'>{this.props.overview}</p>
        </div>);
    }
}

export default EnemyOverview;