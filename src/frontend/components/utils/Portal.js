import { memo, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ id, children }) => {
  //obtiene la referencia de un div creado u obtenido por id

  const modalElement = useRef(
    document.getElementById(id) || document.createElement('div')
  )
  //lo agregamos al estado local
  const [dynamic] = useState(!modalElement.current.parentElement)
  useEffect(() => {
    if (dynamic) {
      //le asignamos el id que le pasamos a portal a nuestro nuevo div

      modalElement.current.id = id
      //agregamos a body el nuevo div
      document.body.prepend(modalElement.current)
    }
    return () => {
      if (dynamic && modalElement.current.parentElement) {
        //  console.log('parent ', modalElement.current.parentElement)
        //  console.log('current ', modalElement.current)
        modalElement.current.parentElement.removeChild(modalElement.current)
      }
    }
  }, [])
  /*const childofelement = document.querySelector('#modal')
  if (childofelement !== null) childofelement.removeChild()*/
  //agregamos el modal al nuevo div
  return createPortal(children, modalElement.current)
}

export default memo(Portal)
