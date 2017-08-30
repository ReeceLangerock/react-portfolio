import React from 'react'
import './../../style/project.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSelectedProject } from '../../actions/actions'
import handleClickOutside from 'react-onclickoutside'
import projectData from './../../data/portfolio.json'

export class Project extends React.Component {
  constructor (props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOutside () {
    if (this.props.selectedProject !== 'NONE') {
      document.getElementById('projects-container').classList.toggle('portfolio__item-container-blocked')
      this.props.setSelectedProject('NONE')
    }
  };

  handleClose () {
    document.getElementById('projects-container').classList.toggle('portfolio__item-container-blocked')
    this.props.setSelectedProject('NONE')
  }
  renderBuiltWith () {
    return projectData[this.props.projectName]['built-with'].map((item, index) =>
      <li key={item + index}>
        {item}
      </li>
    )
  }

  render () {
    let style = this.props.projectName === 'NONE' ? 'project__hidden' : 'project__visible'
    let key = this.props.projectName

    return (
      <div className={`project ${style}`} id={`project${this.props.projectName}`}>
        <div className='modal-close' onClick={this.handleClose}>
          X
        </div>
        <div className='project__container'>
          <div className='project__image'>
            <img alt='website responsiveness template' src={require(`../../assets/projectImages/${this.props.projectName}-Preview.png`)} />
          </div>
          {key !== 'NONE' &&
            <div className='project__info'>
              <div className='project__info-header'>
                <span>
                  {projectData[key].platform}
                </span>
                <span>
                  {projectData[key]['date-completed']}
                </span>
              </div>
              <h1>
                {this.props.projectName}
              </h1>
              <p>
                {projectData[key].description}
              </p>
              <h3>Built With:</h3>
              <ul>
                {this.renderBuiltWith()}
              </ul>
              <h3>
                <a href={projectData[key].link} rel='noopener noreferrer' target='_blank'>
                  Visit the Site
                </a>
              </h3>

              <h3>
                <a href={projectData[key].github} rel='noopener noreferrer' target='_blank'>
                  Visit the Repo
                </a>
              </h3>
            </div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedProject: state.portfolioProjectReducer.selectedProject
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSelectedProject
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(handleClickOutside(Project))
