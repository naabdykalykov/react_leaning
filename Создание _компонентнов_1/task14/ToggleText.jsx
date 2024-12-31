import React, { Component } from "react";

class ToggleText extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        };
    }
    toggleVisibility = () => {
        this.setState({isVisible: !this.state.isVisible});
    };

    render(){
        return (
            <>
                <button onClick={this.toggleVisibility}>
                {this.state.isVisible ? 'Скрыть' : 'Показать'}
                </button>
                {this.state.isVisible && <p>Текст, который нужно скрыть или показать.</p>}
            </>
        );
    }
}

export default ToggleText;