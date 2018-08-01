import React, {Component} from 'react'
import '../css/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Redirect, withRouter} from 'react-router-dom'
import SweetAlert from 'sweetalert2-react'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            username: '',
            checkbox: false,
            token: '',
            show: false
        }
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlecheckBox = this.handlecheckBox.bind(this)
        this.sendLoginData = this.sendLoginData.bind(this)
    }
    handlePassword(event) {
        this.setState({password: event.target.value})
    }
    handleUsername(event) {
        this.setState({username: event.target.value})
    }
    handlecheckBox() {
        if(this.state.checkbox == false) {
          this.setState({checkbox: true})
        } else {
            this.setState({checkbox: false})
        }
    }
    sendLoginData(event) {
      if(this.state.username != '' && this.state.password != '') {
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
                
            },
            
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                remember_me: this.state.checkbox
            })
            
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.access_token)
            this.setState({token: responseJson.access_token})
            if(responseJson.access_token != undefined) {
                this.props.history.push({
                    pathname: '/dashboard',
                    state: {token: responseJson.access_token}
                })
            } else {
                console.log('Error')
            }
        })
        .catch((error) => {
            console.error(error);
        })
      } else {
        
         this.setState({show: true})
       }
        event.preventDefault()
     
    }

    render() {
       
        return(
          <div className="loginContainer" >
            <SweetAlert
            show={this.state.show}
            title="Demo"
            text="SweetAlert in React"
            onConfirm={() => this.setState({ show: false })}
           />
             <div className="loginTextAndLogo">
                    <div className="logoContainer">
                      <img className="logoEvantra" src={require('../../src/assets/logo-evantra.png')} alt=""/>
                    </div>
                    <div className="gestionEfectivaTextContainer">
                      <label className="gestionEfectivaText">Gestión Efectiva de Recursos Humanos</label>
                    </div>
             </div> 
               <div className="loginFormContainer">
                    <div className="loginBienvenidoTextContainer">
                        <label className="loginBienvenidoText">Bienvenido</label>
                    </div>
                    <p className="loginWelcomeParagraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptatum tenetur porro ea. Consequatur rerum eius repellat, voluptates et eum est dignissimos distinctio, expedita blanditiis nemo excepturi ipsa, id asperiores?</p>
                    <form className="loginFormSubContainer" onSubmit = {this.sendLoginData} >
                      <div className="form-group">
                        <span className="form-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Nombre de usuario" onChange = {this.handleUsername} value = {this.state.username}/>
                      </div> 
                      <div className="form-group form-group-container">
                        <span className="form-group-addon lock-addon"><i className="fas fa-lock"></i></span>
                        <input type="password" className="form-control"  placeholder="Contraseña" onChange = {this.handlePassword} value = {this.state.password}/>
                      </div>   
                      <div className="loginCheckboxContainer">
                         <div className="form-group form-check">
                           <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick = {this.handlecheckBox} value = {this.state.checkbox}/>
                           <label className="form-check-label" >Recordar mis datos</label>
                         </div>
                      </div> 
                      <div className="accountHelpText">
                       <small id="accountlHelp" className="form-text text-muted"><a >Recuperar mi nombre de usuario o contraseña.</a></small>
                      </div>
                      <div className="loginButtonContainer">
                        <button type="submit"  className="loginButton"><label className="loginIngresarLabel" >ingresar</label></button>
                      </div>      
                    </form>
                </div>  
                
          </div>
        )
    }
}