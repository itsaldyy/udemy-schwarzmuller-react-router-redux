import React, { Component } from 'react'
import classes from './Person.module.css'

// styled-component
// styled.div and everything within `` returns a valid React component
/* const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
` */

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm { this.props.name } and I am { this.props.age } years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} /> {/* React/JS automatically passes event as parameter (ergo a default object) in changed */}
            </div>
        )
    }
}

export default Person