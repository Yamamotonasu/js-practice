import React from "react"
import PropTypes from "prop-types"
import ValueImput from './ValueInput'
class InchToCm extends React.Component {
  constructor (props) {
    super(props)
    // ValueInputに表示する値を状態として保持
    this.state = {
      inch: 0, cm: 0
    }
  }
  // インチが変更された時
  inchChanged (e) {
    const inchValue = e.value
    const cmValue = inchValue * 2.54
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }
  // センチが変更された時
  cmChanged (e) {
    const cmValue = e.value
    const inchValue = cmValue * 2.54
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }
  // 画面の描画
  render () {
    return (
      <div>
        <ValueInput title='inch' onChange={e => this.inchChanged(e)} value={this.state.inch} />
        <ValueInput title='cm' onChange={e => this.cmChanged(e)} value={this.state.cm} />
      </div>
    )
  }

}

export default InchToCm
