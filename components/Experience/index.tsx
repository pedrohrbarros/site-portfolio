import React from 'react'
import { Role } from '../../entities/Work'

function Experience(roles: any & Role[]) {

  return (
    <>
      {roles.map((role: Role) => (
        <h1 className="font-h1 text-white text-3xl">{role.name}</h1>
      ))}
    </>
  )
}

export default Experience