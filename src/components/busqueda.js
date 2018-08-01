import React, {Component} from 'react'
import '../css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
library.add(faSearch)

export default class busqueda extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {show} = this.props
        return(
            <div style={this.props.style} className="busquedaContainer">
              <div className="busquedaMainContainer">
                <label className="busquedaLabel">Nombre(s)</label>
                <input className="busquedaNombreInput" type="text" placeholder="Ingrese nombres del evaluado"/>
                <label className="busquedaPrimerApellidoLabel">Primer Apellido</label>
                <input className="busquedaPrimerApellidoInput" type="text" placeholder="Ingrese primer apellido"/>
                <label className="busquedaSegundoApellidoLabel">Segundo Apellido</label>
                <input className="busquedaSegundoApellidoInput" type="text" placeholder="Ingrese segundo apellido"/>
                <button className="busquedaButton" onClick={show}><FontAwesomeIcon icon="search"  /></button>
              </div>
            </div>
        )
    }
}