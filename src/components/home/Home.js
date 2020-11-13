import React, { Component } from 'react'
import Calculator from './Calculator'
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <br/>
                <Calculator></Calculator>
            </>
        )
    }
}
