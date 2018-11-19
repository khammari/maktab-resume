import React, {Component} from 'react';
import './Fullpage.css'
class Fullpage extends Component {
    render() {
        const {children} = this.props;
        const divStyle = {
            backgroundColor : this.props.color
        };
        return (
            <div id={this.props.id} className={`fullpage ${this.props.className || ''}`} style={divStyle}>
                {children}
            </div>
        )
    }
}

export default Fullpage;