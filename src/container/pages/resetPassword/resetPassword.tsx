
import React from 'react';
import {  Checkbox, Form, Input } from 'antd';
import logo from "../../../asset/logo.jpg";
import vietnam from "../../../asset/vietnam.jpg";
import english from "../../../asset/english.png";
import { DownOutlined } from '@ant-design/icons';

import "./StyleResetPassword.scss";
import {

  Select,

} from 'antd';
const resetPassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <div className='background-login'>
     
      <div className='container'>
        
    <div className='lang' >
    <Form.Item>
  <Select defaultValue="vie" className='selectLangreset-small'>
    <Select.Option value="vie">Việt Nam <img className='imglang' src={vietnam} alt="Vietnamese Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
    <Select.Option value="eng">English <img className='imglang' src={english} alt="English Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
  </Select>
</Form.Item>


        <img className='imglogo' src={logo} alt="Logo" />
         <h1 className='textlogin'>Đặt lại mật khẩu</h1>
          </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

<div className='row-12'>
        <p className='textinput'>Mật khẩu mới:</p>
          <Form.Item
         
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='styleInput' />
          </Form.Item>
          </div>
      <div className='row-12'>
        <p className='textinput'>Nhập lại mật khẩu mới:</p>
          <Form.Item
         
            name="retypepassword"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='styleInput' />
          </Form.Item>
          </div>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox className='checkboxpass'>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <button className='btnretype' >
              Lưu mật khẩu
            </button>

          </Form.Item>

        </Form>

    
      </div>

    </div>
    
  );
};

export default resetPassword;
