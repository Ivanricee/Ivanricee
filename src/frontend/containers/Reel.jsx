import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setActiveMenu } from '../actions'

const Reel = (props) => {
  useEffect(() => {
    props.setActiveMenu(3)
  }, [])
  return (
    <main className="main--reel">
      <h1>Video Player</h1>
    </main>
  )
}
const mapDispatchToProps = {
  setActiveMenu,
}
export default connect(null, mapDispatchToProps)(Reel)
