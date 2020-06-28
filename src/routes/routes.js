import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import  RoutesDetails   from '../views/routesDetails'
import  ScoreCard   from '../views/scorecard'

const Routes = () => {
    return (
        <Switch>
            <Route
                component={RoutesDetails}
                exact
                path="/"
            />
            <Route
                component={ScoreCard}
                exact
                path="/current"
            />
      </Switch>
    )
}

export default Routes
