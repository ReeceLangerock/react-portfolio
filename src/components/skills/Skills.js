import React from 'react'
import './../../style/skills.css'
import SkillsItem from './SkillsItem'
import VisibilitySensor from 'react-visibility-sensor'

export class Skills extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange (isVisible) {
    let container1 = this.container1
    let container2 = this.container2
    let container3 = this.container3
    let container4 = this.container4

    if (isVisible) {
      container1.classList.add('fromLeft')
      container2.classList.add('fromRight')
      container3.classList.add('fromLeft')
      container4.classList.add('fromRight')
    } else {
      // container1.classList.remove("fromLeft");
      // container2.classList.remove("fromRight");
      // container3.classList.remove("fromLeft");
      // container4.classList.remove("fromRight");
    }
  }
  render () {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility offset={{ bottom: 300 }}>
        <section id='skills'>
          <div className='skills'>
            <div className='container'>
              <div className='skills__title-container'>
                <h1 className='skills__title'>Skills</h1>
                <span className='skills__subtitle'> here's a few of the things I know</span>
              </div>

              <div className='skills__container'>
                <div
                  className='skills__container-child'
                  ref={input => {
                    this.container1 = input
                  }}
                >
                  <i className='fa fa-code skills__container-icon ' />

                  <div className='skills_subcontainer'>
                    <div className='skills__container-header'>
                      <div className='skills__container-title'>
                        <span>Front-End Programming</span>
                      </div>
                    </div>
                    <div className='skills_icon-container'>
                      <SkillsItem skillName='react' />
                      <SkillsItem skillName='redux' />
                      <SkillsItem skillName='javascript' />

                      <SkillsItem skillName='html5' />
                      <SkillsItem skillName='css-3' />
                      <SkillsItem skillName='bootstrap-4' />
                    </div>
                  </div>
                </div>

                <div
                  className='skills__container-child'
                  ref={input => {
                    this.container2 = input
                  }}
                >
                  <i className='fa fa-server skills__container-icon ' />

                  <div className='skills_subcontainer'>
                    <div className='skills__container-header'>
                      <div className='skills__container-title'>
                        <span>Back-End Programming</span>
                      </div>
                    </div>
                    <div className='skills_icon-container'>
                      <SkillsItem skillName='nodejs-1' />
                      <SkillsItem skillName='express-109' />

                      <SkillsItem skillName='mongodb' />
                      <SkillsItem skillName='auth0' />
                      <SkillsItem skillName='java-4' />
                    </div>
                  </div>
                </div>

                <div
                  className='skills__container-child'
                  ref={input => {
                    this.container3 = input
                  }}
                >
                  <i className='fa fa-cogs skills__container-icon ' />

                  <div className='skills_subcontainer'>
                    <div className='skills__container-header'>
                      <div className='skills__container-title'>
                        <span>Dev Ops</span>
                      </div>
                    </div>
                    <div className='skills_icon-container'>
                      <SkillsItem skillName='git-icon' />

                      <SkillsItem skillName='heroku' />
                      <SkillsItem skillName='surge' />
                      <SkillsItem skillName='npm' />
                      <SkillsItem skillName='jest' />
                    </div>
                  </div>
                </div>

                <div
                  className='skills__container-child'
                  ref={input => {
                    this.container4 = input
                  }}
                >
                  <i className='fa fa-book skills__container-icon ' />

                  <div className='skills_subcontainer'>
                    <div className='skills__container-header'>
                      <div className='skills__container-title'>
                        <span>Education </span>
                      </div>
                    </div>
                    <p>
                      I am, and always will be, a lifelong learner. One of the rewarding challenges and greatest joys of development, is that there's always something new to learn. In addition to never-ending improvement
                      skills listed here, I'm currently learning D3, continuous integration and test driven design with Jest and Enzyme.
                    </p>
                    <br />
                    <p>"I have no special talent. I am only passionately curious"</p>
                    <p className='float-right'> - Albert Einstein</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    )
  }
}
export default Skills

// onClick = {()=>this.handleIconClick(this.props.urlLink)}
