import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import './../../style/hero.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleHeroVisible } from '../../actions/actions'

export class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount () {
    let hero = this.hero

    hero.classList.toggle('hero__text-container-visible')
  }
  onChange (isVisible) {
    this.props.toggleHeroVisible(isVisible)
  }
  render () {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility offset={{ top: 500 }}>
        <div id='hero' className='hero'>
          <div className='hero__text-container' id='text-container' ref={(input) => { this.hero = input }}>
            <div className='hero__title' id='page-title'>
              Reece Langerock
            </div>
            <div className='hero__subtitle' id='page-title'>
              Front End Developer
            </div>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleHeroVisible
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(Hero)
