import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, useParams } from 'react-router-dom'


const ProtectedRoute = ({element:Element, ...rest}) => {
//check if user is logged in
const user = useSelector(state=> state?.users)
const {userAuth} = user
  return (
    <Route {...rest} render={() => userAuth ?  <Element {...rest} /> : <Navigate to='/login' /> } />
  )
}

export default ProtectedRoute