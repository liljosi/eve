import React, {Component} from 'react'

const Table = ({data, style}) => {
   console.log(data)
        return(
        <div>
          <label className="tableResultadoLabel" style={style}>Resultado de búsqueda</label>
          <table className="table">
            <thead>
                <tr>
                  <th>Aspirante</th>
                  <th>Oficio</th>
                  <th>Nombre(s)</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>CURP</th>
                  <th>Fecha de Nacimiento</th>
                </tr>
            </thead>
            <tbody>
              {
                data.map(row => (
                  <tr>
                    <td>{row.aspirante}</td>
                    <td>{row.oficio}</td>
                    <td>{row.nombre}</td>
                    <td>{row.primer_apellido}</td>
                    <td>{row.segundo_apellido}</td>
                    <td>{row.curp}</td>
                    <td>{row.fecha}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        )
    }
export default Table