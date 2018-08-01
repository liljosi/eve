import React, {Component} from 'react'
import NavBar from '../components/navBar'
export default class agenda extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <NavBar/>
                <label>Agenda</label>
            </div>
        )
    }
}