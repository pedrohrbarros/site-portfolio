import React from 'react'
import { Work } from '../../entities/Work'
import { pedro_barros } from '../../hooks/usePersons'

type Props = {
    works: Work[]
}

function Experience(props: Props) {
  return (
    <>
      {props.works.map((work: Work) => (
        <div>{work.role}</div>
      ))}
    </>
  )
}

export default Experience