import React from 'react'

const NotFound = ({ staticContext = {} }) => {
  staticContext.notf = 404
  return (
    <main>
      <h1>No encontrado</h1>
    </main>
  )
}
export default NotFound
