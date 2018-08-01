import React, {Component} from 'react'
import '../css/main.css'
import Busqueda from '../components/busqueda'
import BusquedaAvanzada from '../components/busquedaAvanzada'
import NavBar from '../components/navBar'
import {withRouter} from 'react-router-dom'
export default class dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showComponentBusqueda: false,
            showComponentBusquedaAvanzada: false,
            token: ''
        }
        this.showBusqueda = this.showBusqueda.bind(this)
        this.showBusquedaAvanzada = this.showBusquedaAvanzada.bind(this)
    }
    componentDidMount() {
      this.setState({token: this.props.location.state})
    }
    showBusqueda() {
        this.setState({showComponentBusqueda: true})
        this.setState({showComponentBusquedaAvanzada:false})
       
     }
     showBusquedaAvanzada() {
         this.setState({showComponentBusquedaAvanzada:true})
         this.setState({showComponentBusqueda:false})
        
     }
    render(){
        const {showComponentBusqueda, showComponentBusquedaAvanzada} = this.state
        console.log(this.props.location.state)
        return(
            
            <div>
                <NavBar/>
              <div className="dashboardTopBar"></div>
                <a className="tabLinks" href="#" onClick={this.showBusqueda}>Busqueda de Aspirantes</a>
                <a className="tabLinks" href="#" onClick={this.showBusquedaAvanzada}>Avanzada</a>
                {showComponentBusqueda ?
                      <Busqueda />:
                      null
                    }
                  {showComponentBusquedaAvanzada ?
                      <BusquedaAvanzada />:
                      null
                    }
                    
            </div>
        )
    }
}