import React, {Component} from 'react';

class Icon extends Component {

  state = {
    show: false
  }

  toggle = (value) => {
    this.setState({show: value})
  }

  render() {
    const {name, primary, secondary, link} = this.props

    return (
      <div className="social-media-icon">
        <div
          className="img-ctn"
          onMouseEnter={() => this.toggle(true)}
          onMouseLeave={() => this.toggle(false)}>
          {this.state.show
            ? <a href={link} target="_blank"><img src={secondary} alt={name} title={name}/></a>
            : <img src={primary} alt={name} title={name}/>
}
        </div>
      </div>
    )
  }
}

export default Icon;

