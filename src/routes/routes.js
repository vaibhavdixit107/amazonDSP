import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import  RoutesDetails   from '../views/routesDetails'

const Routes = () => {
    return (
        <Switch>
            <Route
                component={RoutesDetails}
                exact                
                path="/"
            />
      </Switch>
    )
}

export default Routes