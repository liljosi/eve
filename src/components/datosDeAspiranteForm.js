import React, {Component} from 'react'
import '../css/main.css'

export default class AspiranteForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="nuevoAspiranteFormContainer">
              <label className="formOficioLabel">No. de Oficio</label>
              <input type="text" className="formInputMedianoOficio" placeholder="número de oficio"/>
              <label className="formFechaLabel">Fecha de Oficio</label>
              <input type="date" className="formInputMedianoFecha" placeholder="18/08/2018"/>
              <label className="formNombreLabel">Nombre(s)</label>
              <input type="text" className="formInputGrandeNombre" placeholder="Ingrese nombres de evaluado"/>
              <label className="formPrimerApellidoLabel">Primer Apellido</label>
              <input type="text" className="formInputMedianoPrimerApellido" placeholder="Ingrese primer apellido"/>
              <label className="formSegundoApellidoLabel">Segundo Apellido</label>
              <input type="text" className="formInputMedianoSegundoApellido" placeholder="Ingrese segundo apellido"/>
              <label className="formCurpLabel">CURP</label>
              <input type="text" className="formInputMedianoCurp"/>
              <label className="formRfcLabel">RFC</label>
              <input type="text" className="formInputMedianoRfc"/>
              <label className="formCelularLabel">Celular</label>
              <input type="text" className="formInputMedianoCelular"/>
              <label className="formParticularLabel">Teléfono particular</label>
              <input type="text" className="formInputMedianoParticular"/>
              <div className="formSideBar">
                
              </div>
            </div>
        )
    }
}