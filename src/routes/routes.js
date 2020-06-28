import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import  RoutesDetails   from '../views/routesDetails'
import  ResuceAdvice   from '../views/rescueAdvice'
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
                component={ResuceAdvice}
                exact
                path="/rescueAdvice"
            />
            <Route
                component={RoutesDetails}
                exact
                path="/todayPerformance"
            />
      </Switch>
    )
}

export default Routes
