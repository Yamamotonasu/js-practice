// import React from "react"
import PropTypes from "prop-types"
import React, {Component} from 'react'
export default class ValueInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }
  // 値がユーザーによって変更された時
  handleChange (e) {
    const v = e.target.value
    const newValue = v.replace(/[^0-9.]+/g, '')
    this.setState({value: newValue})
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue
      })
    }
  }
  // プロパティが変更された時
  conmponentWillReceiveProps (nextProps) {
    this.setState({value: nextProps.value})
  }
  render () {
    return (
      <div>
        <label>{this.props.title}: <br/>
          <input type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
        </label>
      </div>
    )
  }
}

export default ValueInput
