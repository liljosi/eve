import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

import Dashboard from '../components/dashboard'
import Programacion from '../components/programacion'
import Aspirantes from '../components/aspirantes'
import Agenda from '../components/agenda'
import AspirantesNuevo from '../components/aspirantes_nuevo'
import Login from '../components/login'
export default () => 
(<BrowserRouter>
<Switch>
  <Route path="/" exact component={Login} />
  <Route path="/dashboard" exact component={Dashboard} />
  <Route path="/programacion" exact component={Programacion} />
  <Route path="/aspirantes" exact component={Aspirantes} />
  <Route path="/agenda" exact component={Agenda} />
  <Route path="/aspirante-nuevo" exact component={AspirantesNuevo}/>
</Switch>
</BrowserRouter>)