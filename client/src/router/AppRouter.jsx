import { Route, Routes, Navigate } from 'react-router'
import { useContext } from 'react'
import { publicRoutes, privateRoutes } from '../router/routes'
import Loader from '/src/components/Shared/UI/Loader/Loader'
import { useAuth } from '../context/auth/useAuth'

const AppRouter = () => {
    const {isAuth, isLoading} = useAuth()

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