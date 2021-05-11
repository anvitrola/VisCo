import React, { Component } from 'react';
import "./styles.module.scss";

export default class Button extends Component {
    constructor(props){
        super(props);
        this.type = this.props.type;
        this.text = this.props.text;

        this.onMouseClick = this.onMouseClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            isDisabled: false,
        }
    }
    onMouseClick(event){
        event.preventDefault();
        setTimeout(this.setState({isDisabled: !this.isDisabled}), 3000);
    }
    render() {
        return (
            <button 
                type={this.type}
                onClick={this.onMouseClick}
                disabled={this.state.isDisabled}
            >
                {this.text}
            </button>
        )
    }
}
