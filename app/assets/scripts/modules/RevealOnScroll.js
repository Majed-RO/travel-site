import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
  constructor(els, thresholdPercent) {
    this.revealedItems = els
    this.thresholdPercent = thresholdPercent
    this.browserHeight = window.innerHeight
    this.hideRevealedItem()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle)
    window.addEventListener(
      'resize',
      debounce(() => {
        console.log('resize ran')
        this.browserHeight = window.innerHeight
      }, 333)
    )
  }

  calcCaller() {
    console.log('Scroll function ran')
    this.revealedItems.forEach(el => {
      if (el.isItemRevealed == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log('The element has been calculated')
      /* getBoundingClientRect().top is recognized by Ms Edge, so we used it instead of .y*/
      let scrollPercent =
        (el.getBoundingClientRect().top / this.browserHeight) * 100

      if (scrollPercent < this.thresholdPercent) {
        el.classList.add('reveal-item--is-visible')
        el.isItemRevealed = true

        if (el.isLastItem == true) {
          window.removeEventListener('scroll', this.scrollThrottle)
        }
      }
    }
  }

  hideRevealedItem() {
    this.revealedItems.forEach(el => {
      el.classList.add('reveal-item')
      el.isItemRevealed = false
    })
    this.revealedItems[this.revealedItems.length - 1].isLastItem = true
  }
}

export default RevealOnScroll
