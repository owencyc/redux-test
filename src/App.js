import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';




class App extends Component {
  //在第一次渲染后调用，只在客户端
  componentDidMount() {
    console.log(this.props)
  } 

  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <div className="App">
          <h2>当月工资为{this.props.tiger.salary}</h2>
          <button onClick={PayIncrease}>升职加薪</button>
          <button onClick={PayDecrease}>迟到罚款</button>
        </div>
      </div>
    );
  }
}

//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' })
  }
}

//连接组件

export default connect(mapStateToProps, mapDispatchToProps)(App);
