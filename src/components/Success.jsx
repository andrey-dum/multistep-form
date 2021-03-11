import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Success = ({reset}) => {
  const {user} = useSelector(state => state.user)

  return (
    <div className="success">
        <h1>SUCCESS!</h1>
        {/* {user && <div>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.email}</div>
        </div>} */}
        {user &&  <pre>{JSON.stringify(user, null, 2)}</pre>}
        <Link to="/contacts" onClick={reset}>Home</Link>
    </div>
  )
}

export default Success