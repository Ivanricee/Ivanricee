/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const ItemImage = ({ src, alt, id }) => {
  const imgItemElementRef = useRef(null)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.InteractionOberver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShowImage(true)
          //desconectamos el observador para que no realiza el efecto cuando lo vea de nuevo
          observer.disconnect()
        }
      })

      observer.observe(imgItemElementRef.current)
    })
  })

  return (
    <article
      className={`modal__article-image ${showImage && 'modal__height-auto'}`}
      ref={imgItemElementRef}
    >
      {showImage && (
        <CSSTransition
          in={showImage}
          timeout={300}
          classNames="modal__article-image-animation"
        >
          <img className="modal__article-image-item" src={src} alt={alt} key={id} />
        </CSSTransition>
      )}
    </article>
  )
}

export default ItemImage
