import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

new ClientArea()
/* see the extension called event-emitter 
The EventEmitter is a module that facilitates communication/interaction between objects in Node*/
new StickyHeader()
new MobileMenu()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)
let modal

/* Load/ import the modal script only when the visitor click on open button */
document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    if (typeof modal == 'undefined') {
      e.preventDefault()
      import(/* webpackChunkName: "modal" */ './modules/Modal')
        .then(x => {
          modal = new x.default()
          setTimeout(() => modal.openModal(), 20)
        })
        .catch(() =>
          console.log('There was a problem while loading the asset!')
        )
    } else {
      modal.openModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
