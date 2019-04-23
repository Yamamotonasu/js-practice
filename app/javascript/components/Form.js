import React from "react"
import PropTypes from "prop-types"
class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
  // 値が変更された時
  doChange (e) {
    const curValue = e.target.value
    // 数字以外は削除する
    const newValue = curValue.replace(/[^0-9]/g, '')
    this.setState({value: newValue})
  }
  // 送信ボタンが押された時
  doSubmit (e) {
    window.alert('値を送信: ' + this.state.value)
    e.preventDefault()
  }
  // 画面を描画
  render () {
    // イベントをメソッドにバインド
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
      <form onSubmit={doSubmit}>
        <input type="text"
        value={this.state.value}
        onChange={doChange} />
        <input type="submit" value='送信' />
      </form>
    )
  }
}

export default Form
