/*
 * @Author: donger
 * @Description: 登录页
 */

import React, { Component }                       from 'react'
import { connect }                                from 'react-redux'
import { Form, Icon, Input, Button, Checkbox }    from 'antd'
import { getToken }                               from '@/utils/util'
import { getUserInfo }                            from '@/store/userStore/actions'
import './index.scss'

const FormItem = Form.Item

class Login extends Component {
  render () {
    const { form, handleSubmit } = this.props

    if (getToken()) {
      this.props.history.goBack()
      return null
    }

    return (
      <div className="login-page">
        <div className="layout-top">
          <div className="logo">
            <img src="./assets/image/react.svg" alt="logo"/>
            <h2>Kami Admin</h2>
          </div>
          <div className="desc">Created by 824331661@qq.com</div>
        </div>
        <div className="layout-content">
          <Form onSubmit={ handleSubmit } className="login-form">
            <FormItem>
              {form.getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '用户名不能为空!'
                  },
                  {
                    min: 4,
                    max: 20,
                    message: '用户名长度4 ~ 20!'
                  }
                ],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="admin" />
              )}
            </FormItem>
            <FormItem>
              {form.getFieldDecorator('password', {
                rules: [{ required: true, message: '密码不能为空!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="admin" />
              )}
            </FormItem>
            <FormItem>
              {form.getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>自动登录</Checkbox>
              )}
              <a href="/" style={{ float: 'right' }}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="submit-button">登陆</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch, props) => ({
  // 提交表单
  handleSubmit (e) {
    e.preventDefault()

    props.form.validateFields((err, values) => {
      if (!err) {
        const action = getUserInfo(
          values.username,
          values.password,
          () => {
            props.history.push('/home')
          }
        )
        dispatch(action)
      }
    })
  }
})

export default Form.create()(connect(null, mapDispatch)(Login))
