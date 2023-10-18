import { getAllPatients } from "../controlers/patientsController";

import React from 'react'

const Main = () => {
    const shyaka= getAllPatients().findById("652ee15d7adfc0025513e9e2")
  return (
    <div>
        <h1>{shyaka.username}</h1>
    </div>
  )
}

export default Main

