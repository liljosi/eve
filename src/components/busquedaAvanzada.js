import React, {Component} from 'react'
import '../css/main.css'
import Select from 'react-select'

export default class busquedaavanzada extends Component {
    constructor() {
        super()
        this.state = {
            selectedOption: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(selectedOption) {
        this.setState({selectedOption})
    }
    render() {
        const {selectedOption} = this.state
        return(
            <div style={this.props.style} className="busquedaAvanzadaContainer">
              <label className="busquedaAvanzadaNombreLabel">Nombre(s)</label>
              <input type="text" placeholder="Ingrese nombre(s) del evaluado" className="busquedaInputNombre"/>
              <label className="busquedaAvanzadaCorporacionLabel">Corporación</label>
              <Select
              name="selected-state"
              value={selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
              className="busquedaInputDependencia"
              />
              <label className="busquedaAvanzadaEstatusLabel">Estatus del Aspirante</label>
              <Select
              name="selected-state"
              value={selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
              className="busquedaInputEstatus"
              />
              <label className="busquedaAvanzadaModalidadLabel">Modalidad</label>
              <Select
              name="selected-state"
              value={selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
              className="busquedaInputModalidad"
              />
              <label className="busquedaAvanzadaPrimerApellidoLabel">Primer apellido</label>
              <input type="text" placeholder="Ingrese primer apellido" className="busquedaInputPrimerApellido"/>
              <label className="busquedaAvanzadaSegundoApellidoLabel">Segundo apellido</label>
              <input type="text" placeholder="Ingrese segundo apellido" className="busquedaInputSegundoApellido"/>
              <label className="busquedaAvanzadaMunicipioLabel">Municipio</label>
              <Select
              name="selected-state"
              value={selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
              className="busquedaInputMunicipio"
              />
              <label className="busquedaAvanzadaFechasLabel">Fechas</label>
            </div>
        )
    }
}