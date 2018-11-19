import React, {Component} from 'react';
import './Card.css'
class Card extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className={`col ${this.props.className || ''}`}>
                <img alt={this.props.title} src={this.props.pic}/>
                <br/>
                <br/>
                <p>{this.props.title}</p>
                {children}
            </div>
        )
    }
}

export default Card;