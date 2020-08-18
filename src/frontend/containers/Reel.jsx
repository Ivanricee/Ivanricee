import React /*, { useEffect }*/ from 'react'
import { connect } from 'react-redux'

const Reel = (props) => {
  return (
    <main className="main--reel">
      <h1>Video Player</h1>
    </main>
  )
}
const mapStateToProps = (state) => {
  return {
    cover: state.cover,
  }
}
export default connect(mapStateToProps, null)(Reel)
