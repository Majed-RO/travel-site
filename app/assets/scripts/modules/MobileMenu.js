class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon')
    this.menuContent = document.querySelector('.site-header__menu-content')
    this.siteHeader = document.querySelector('.site-header')
    this.events()
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.menuToggle())
  }

  menuToggle() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible')
    this.siteHeader.classList.toggle('site-header--is-expanded')
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x')

    console.log('The menu icon has been clicked, Holla!')
  }
}

export default MobileMenu
