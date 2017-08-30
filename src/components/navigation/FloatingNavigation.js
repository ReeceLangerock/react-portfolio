
import React from 'react'
import ContactItem from './../contact/ContactItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './../../style/contact.css'
import './../../style/floating-navigation.css'
var smoothScroll = require('smoothscroll')

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.handleBarClick = this.handleBarClick.bind(this)
    this.scrollToSomewhere = this.scrollToSomewhere.bind(this)
  }

  handleBarClick () {
    document.getElementById('navigation-bars').classList.toggle('navigation__bars-selected')
    document.getElementById('navigation-menu').classList.toggle('navigation__menu-hidden')
    document.getElementById('navigation-links').classList.toggle('navigation__links-hidden')
  }

  scrollToSomewhere (whereTo) {
    let destination = document.getElementById(whereTo)
    smoothScroll(destination, 1000)
  }

  render () {
    let logoStyle = this.props.heroVisible === false ? 'navigation__logo navigation__logo-visible' : ' navigation__logo'
    let contactStyle = this.props.heroVisible === false ? 'navigation__contact navigation__contact-visible' : ' navigation__contact'
    return (
      <header>
        <div className='navigation'>
          <div className='navigation__container'>
            <div className='navigation__menu' id='navigation-menu' onClick={this.handleBarClick}>
              Menu
            </div>
            <ul className='navigation__links navigation__links-hidden' id='navigation-links'>
              <li>
                <a href='#about' onClick={() => this.scrollToSomewhere('about')}>About</a>
              </li>
              <li>
                <a href='#skills'onClick={() => this.scrollToSomewhere('skills')}>Skills</a>
              </li>
              <li>
                <a href='#portfolio'onClick={() => this.scrollToSomewhere('portfolio')}>Portfolio</a>
              </li>
              <li>
                <a href='#contact'onClick={() => this.scrollToSomewhere('contact')}>Contact</a>
              </li>
            </ul>

            <div className='navigation__bars' onClick={this.handleBarClick} id='navigation-bars'>
              <i className='fa fa-bars' aria-hidden='false' />
            </div>
          </div>
        </div>
        <div className={logoStyle} id='logo' onClick={() => this.scrollToSomewhere('hero')}>
          RL
        </div>

        <div className={contactStyle}>
          <ContactItem iconName='linkedin' urlLink='https://www.linkedin.com/in/reece-langerock/' />
          <ContactItem iconName='envelope' urlLink='mailto:reecelangerock@gmail.com' />
          <ContactItem iconName='github' urlLink='https://github.com/ReeceLangerock' />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  heroVisible: state.componentVisibilityReducer.heroVisible
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
