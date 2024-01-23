import React, { ReactNode } from 'react'

interface Children{
  children:ReactNode
}

const Profile:React.FC<Children> = () => {
  return (
    <div>
      <h2 style={{color:'#fff'}}>Home</h2>
    </div>
  )
}

export default Profile
