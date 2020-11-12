import React /*, { useEffect }*/ from 'react'
import { connect } from 'react-redux'

const Reel = (props) => {
  return (
    <>
      <h1 className="main__title">3D Reel.</h1>
      <div className="main-reel__video-wrap">
        <iframe
          title="Texturing and look dev Reel"
          src="https://www.youtube.com/embed/UOWbHDryB20?start=3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    cover: state.cover,
  }
}
export default connect(mapStateToProps, null)(Reel)
