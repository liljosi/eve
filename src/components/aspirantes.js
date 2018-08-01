import React, {Component} from 'react'
import '../css/main.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Busqueda from './busqueda'
import BusquedaAvanzada from './busquedaAvanzada'
import AspiranteNuevo from './aspirantes_nuevo'
import Table from './table'
import data from './data.json'
import NavBar from '../components/navBar'
export default class aspirantes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showComponentBusqueda: true,
            showComponentBusquedaAvanzada: false,
            showComponentAspiranteNuevo: false,
            display: 'none',
            showTable: false,
            showBusquedaTabs: true
        }

        this.showBusqueda = this.showBusqueda.bind(this)
        this.showBusquedaAvanzada = this.showBusquedaAvanzada.bind(this)
        this.showComponentAspiranteNuevo = this.showComponentAspiranteNuevo.bind(this)
        this.showComponentTable = this.showComponentTable.bind(this)
    }
    
    showBusqueda() {
       
            this.setState({showComponentBusqueda: true})
            this.setState({display:null})
            this.setState({showComponentBusquedaAvanzada:false})
            this.setState({showComponentAspiranteNuevo: false})
       
    }
    showBusquedaAvanzada() {
        this.setState({showComponentBusquedaAvanzada: true,})
        this.setState({display: null})
        this.setState({showComponentBusqueda:false})
        this.setState({showComponentAspiranteNuevo: false})
        this.setState({showTable: false})
    }
    showComponentAspiranteNuevo() {
        this.setState({showComponentAspiranteNuevo: true})
        this.setState({display: null})
        this.setState({showComponentBusquedaAvanzada:false})
        this.setState({showComponentBusqueda:false})
        this.setState({showTable: false})
        this.setState({showBusquedaTabs:false})

    }
    showComponentTable() {
      this.setState({showComponentBusqueda: true})
    }


    render() {
        let {showComponentBusqueda, showComponentBusquedaAvanzada, display, showTable, showComponentAspiranteNuevo, showBusquedaTabs}= this.state
        const styles = {
            containerStyle: {
                display: display,
                  
            }
        }
        return(
            <div className="bodyAspirantes">
              <NavBar/>
              <button className="nuevoAspiranteButton" onClick={this.showComponentAspiranteNuevo}>Nuevo Aspirante</button>
                <div className="aspiranteAEvaluarTitle">
                  <label>Aspirante a Evaluar</label>
                </div>
                <div className="aspirantesSearchTabs">
                  {showBusquedaTabs ?
                    <a className="tabLinks" href="#" onClick={this.showBusqueda}>Busqueda de Aspirantes</a>:
                    null
                  }
                  {showBusquedaTabs ?
                    <a className="tabLinks" href="#" onClick={this.showBusquedaAvanzada}>Avanzada</a>:
                    null
                  }

                </div>
                    {showComponentBusqueda ?
                      <Busqueda style = {styles.containerStyle} show = {this.showComponentTable}/>:
                      null
                    }
                  {showComponentBusquedaAvanzada ?
                      <BusquedaAvanzada style={styles.containerStyle}/>:
                      null
                    }
                   {showTable ?
                      <Table data={data}/>:
                      null
                   }
                   {showComponentAspiranteNuevo ?
                       <AspiranteNuevo style={styles.containerStyle}/>:
                       null    
                   }
            </div>
        )
    }
    
}

