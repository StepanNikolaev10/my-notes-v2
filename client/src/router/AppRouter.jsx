import { Route, Routes, Navigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../context/index.js'
import { publicRoutes, privateRoutes } from '../router/routes'
import LandingPage from '../pages/LandingPage/LandingPage.jsx'
import TaskListPage from '../pages/TaskListPage/TaskListPage.jsx'
import Loader from '/src/components/Shared/UI/Loader/Loader'

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
      isAuth
        ?
          <Routes>
            {privateRoutes.map(route => 
                <Route 
                  key={route.path}
                  path={route.path} 
                  element={route.element} 
                  exact={route.exact}
                />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        :
          <Routes>
            {publicRoutes.map(route => 
                <Route 
                  key={route.path}
                  path={route.path} 
                  element={route.element} 
                  exact={route.exact}
                />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
    )
}

export default AppRouter