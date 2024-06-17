import React from "react"
import {Route, Routes} from 'react-router-dom';
import routes from '../router/index'

function AppRouter() {
    return (
        <Routes>
          {routes.map(route =>
            <Route key={route.path} exact={route.exact} path={route.path} element={route.element} />
          )}
        </Routes> 
      )
}

export default AppRouter