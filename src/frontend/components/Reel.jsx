import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'

const Reel = (props) => {
  const refReelLoader = useRef(null)
  const [loadReel, setLoadReel] = useState(false)
  useEffect(() => {
    const observerReel = new window.IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        const { isIntersecting } = entry
        if (isIntersecting) {
          setLoadReel(true)
        }
      })
      return () => {
        observerReel.disconnect()
      }
    })
    observerReel.observe(refReelLoader.current)

    return () => observerReel.disconnect()
  }, [])

  return (
    <>
      <div className="main__title" ref={refReelLoader}>
        <h1>3D Reel.</h1>
      </div>
      <div className="main-reel__video-wrap">
        {loadReel === true && (
          <iframe
            title="Texturing and look dev Reel"
            src="https://www.youtube.com/embed/UOWbHDryB20?start=3"
            loading="lazy"
            frameBorder="0"
            allow="modestbranding=1; showinfo=0; controls=0; vq=hd720; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
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
