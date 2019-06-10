import React, { Component } from 'react'
import './login.css'
import axios from '../../http.js'
import {
  Flex,
  WhiteSpace,
  WingBlank,
  NavBar,
  List,
  InputItem,
  Button,
  Toast
} from 'antd-mobile'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //表单数据
      uname: '',
      pwd: ''
    }
  }
  //方法
  hanleLogin = (val, key) => {
    // console.log(val,key)
    this.setState({
      [key]: val
    })
  }
  //发送请求
  handle = async e => {
    let body = {}
    body.uname = this.state.uname
    body.pwd = this.state.pwd
    const {
      data: {
        meta: { status, msg },
        data
      }
    } = await axios.post(`users/login`, body)
    console.log()
    if (status === 200) {
      // 进入到首页
      const {token} = data
      localStorage.setItem('token',token)
      console.log(this.props);
      const { history} = this.props
      history.push('/home')

    } else {
      // 提示
      Toast.fail('msg！', 1)
    }
  }
  render() {
    return (
      <div>
        {/* 导航标题 */}
        <Flex direction={'column'}>
          <Flex.Item>
            <WhiteSpace size="xs" />
            <WingBlank>
              <NavBar mode="dark">登录</NavBar>
            </WingBlank>
            <WhiteSpace size="xs" />
          </Flex.Item>
          <Flex.Item>
            {/* 表单 */}
            <WhiteSpace size="xs" />
            <WingBlank>
              <List>
                <InputItem
                  name="uname"
                  value={this.state.uname}
                  onChange={val => {
                    this.hanleLogin(val, 'uname')
                  }}
                >
                  姓名
                </InputItem>
                <InputItem
                  name="pwd"
                  value={this.state.pwd}
                  onChange={val => {
                    this.hanleLogin(val, 'pwd')
                  }}
                >
                  密码
                </InputItem>
              </List>
            </WingBlank>
            <WhiteSpace size="xs" />
          </Flex.Item>

          <Flex.Item>
            {/* 按钮 */}
            <WhiteSpace size="xs" />
            <WingBlank>
              <Button type="primary" onClick={this.handle}>
                登录
              </Button>
            </WingBlank>
            <WhiteSpace />
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
export default Login
