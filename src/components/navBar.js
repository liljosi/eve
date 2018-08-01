import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


library.add(faCalendar)
library.add(faSearch)
const nav = () => {
    return(
        <div className="row">
            <nav className="col-8">
            <a className="navbar-brand" href="/"><img className="navLogo" src={require("../assets/logoEvantra.png")}/></a>
            <ul className="linkList">
                <a className="navItem" href="/dashboard">DASHBOARD</a>
                <a className="navItem" href="/programacion">PROGRAMACIÓN</a>
                <a className="navItem" href="/aspirantes">ASPIRANTES</a>
                <a className="navItem" href="/agenda">AGENDA</a>
            </ul>
            <div className="col-4">
                <div className="oval ovalCalendar"></div>
                <div className="oval ovalBell"></div>
            </div>
            </nav>
            <div className="secondaryNavBar">
            <FontAwesomeIcon icon="calendar" className="navBarCalendarIcon" />
            <label className="navBarFechaLabel">Colima, Col a</label>
            </div>
        </div>
    )
}

export default nav