import React from 'react'
import { ButtonUserStyles, UserStyles } from './UserStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentUser } from '../../redux/user/userSlice'

const User = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch()
    const navigate = useNavigate() 
  return (
    <UserStyles>
         <div> {currentUser.nombre} </div>
        <ButtonUserStyles onClick={()=> {
            dispatch(setCurrentUser(null));
            navigate('/')
        } }>Cerrar Sesión</ButtonUserStyles>
    </UserStyles>
  )
}

export default User