import React, {Component} from 'react'
import NuevoAspiranteForm from '../components/datosDeAspiranteForm'
import NuevoAspiranteExamenesAnteriores from '../components/examenesAnteriores'
export default class AspiranteNuevo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAspiranteNuevoTabs: true,
            showDatosDeAspiranteComponent: false,
            showExamenesAnterioresComponent: false,
        }
        this.datosDeAspirante = this.datosDeAspirante.bind(this)
        this.examenesAnteriores = this.examenesAnteriores.bind(this)
    }
    datosDeAspirante() {
      this.setState({showDatosDeAspiranteComponent: true})
      this.setState({showExamenesAnterioresComponent: false})
    }
    examenesAnteriores() {
     this.setState({showDatosDeAspiranteComponent: false})
     this.setState({showExamenesAnterioresComponent: true})
    }
    render() {
        const {showAspiranteNuevoTabs, showDatosDeAspiranteComponent, showExamenesAnterioresComponent} = this.state
        return(
            <div style={this.props.style}>
                
                <div className="aspirantesSearchTabs">
                  {showAspiranteNuevoTabs ?
                    <a className="tabLinks" href="#" onClick={this.datosDeAspirante}>Datos de Aspirante</a>:
                    null
                  }
                  {showAspiranteNuevoTabs ?
                    <a className="tabLinks" href="#" onClick={this.examenesAnteriores}>Exámenes anteriores</a>:
                    null
                  }

                </div>
                    {showDatosDeAspiranteComponent ?
                      <NuevoAspiranteForm/>:
                      null
                    }
                  {showExamenesAnterioresComponent ?
                      <NuevoAspiranteExamenesAnteriores/>:
                      null
                    }
                   
            
            </div>
        )
    }
}
