import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setHashMenu, setPortfolioMenu } from '../../actions'

const useMenuObserver = ({ portfolio, portfolioParamAfterOpenModalbyUrl }) => {
  //10 => (1 = frontend | 0 = sin item por abrir en modal)
  const portfolioParam = portfolio != null ? portfolio.charAt(0) : null
  //mapStateToProps
  const portfolioMenu = useSelector((state) => state.portfolioMenu)
  //mapDispatchToProps
  const dispatchAction = useDispatch()
  const [menuScrollObserved, setMenuScrollObserved] = useState(false)
  const history = useHistory()
  const elementRef = useRef([])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          const { isIntersecting } = entry
          if (isIntersecting) {
            //al intersectar con otro apartado
            //cambia el menu para poder regersar a ese mismo
            dispatchAction(setHashMenu(-1))
            switch (entry.target) {
              case elementRef.current[0]:
                //cuando la ruta deba abrir un modal ira directamente al apartado
                // y abrira el modal, sin detenerse en otros elementos observados
                if (
                  portfolioParam == null ||
                  (portfolio != null && portfolio === '10') ||
                  (portfolio != null && portfolio === '20')
                ) {
                  menuScrollObserved === true && setMenuScrollObserved(false)
                  history.push('/')
                }

                if (
                  portfolioParamAfterOpenModalbyUrl === true &&
                  (portfolio !== '10' || portfolio !== '20')
                ) {
                  menuScrollObserved === true && setMenuScrollObserved(false)
                  history.push('/')
                }
                break
              case elementRef.current[1]:
                if (
                  portfolioParam == null ||
                  (portfolio != null && portfolio === '10') ||
                  (portfolio != null && portfolio === '20')
                ) {
                  menuScrollObserved === true && setMenuScrollObserved(false)
                  history.push('/about')
                }
                if (
                  portfolioParamAfterOpenModalbyUrl === true &&
                  (portfolio !== '10' || portfolio !== '20')
                ) {
                  menuScrollObserved === true && setMenuScrollObserved(false)
                  history.push('/about')
                }
                break
              case elementRef.current[2]:
                if (portfolioMenu == null && portfolioParam == null) {
                  menuScrollObserved === false && setMenuScrollObserved(true)
                  dispatchAction(setPortfolioMenu(1))
                }
                if (portfolioMenu === 1 && portfolioParam === '1') {
                  menuScrollObserved === false && setMenuScrollObserved(true)
                }
                if (portfolioMenu === 2 && portfolioParam === '2') {
                  menuScrollObserved === false && setMenuScrollObserved(true)
                }

                break
              case elementRef.current[3]:
                console.log('menuScrollObserved', menuScrollObserved)
                menuScrollObserved === true && setMenuScrollObserved(false)
                history.push('/reel')
                break
              case elementRef.current[4]:
                menuScrollObserved === true && setMenuScrollObserved(false)
                history.push('/cv')
                break
              default:
                break
            }
          }
        })
        return () => {
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -99% 0px',
      }
    )
    elementRef.current.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [menuScrollObserved])

  return [menuScrollObserved, elementRef]
}

export default useMenuObserver
