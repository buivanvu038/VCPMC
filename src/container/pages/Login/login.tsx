import './Style.css';
import logo from "../../../asset/logo.jpg";
import vietnam from "../../../asset/vietnam.jpg";
import english from "../../../asset/english.png";


import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Checkbox, Form, Input, Button, Dropdown, message, Space } from 'antd';
import type { MenuProps } from 'antd';
import { FormProps } from 'antd/es/form';

const handleMenuClick: MenuProps['onClick'] = (e) => {
  
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'English',
    key: '1',
    icon:    <img className='imgenglish' src={english} alt="Logo" />,
  },
 
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Login: React.FC = () => {
  // Define type for form field values
  type FieldType = {
    username: string;
    password: string;
    remember: boolean;
  };

  // Define form submission success handler
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  // Define form submission failure handler
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container'>
     
      <div>
      <div   className='btnlanguage'>
        <Dropdown menu={menuProps}>
          <Button className='btnlanguage2' >
            <Space>
         Tiếng Việt 
              <img className='imgvietnam' src={vietnam} alt="Logo" />
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
        <div>
          <img className='imglogo' src={logo} alt="Logo" />
          <h2 style={{color:"white", marginLeft:"20px "}}>Đăng nhập</h2>
        </div>
        
        <Form
          className='formlogin'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div>
            <p className='text1'>Tên đăng nhập</p>
            <Form.Item
              label=""
              name="username"
              rules={[{ required: true, message: 'Hãy nhập tên đăng nhập' }]}
            >
              <Input className='inputUser' />
            </Form.Item>
          </div>
          <div>
            <p className='text2'>PassWord</p>
            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password type='password' className='inputpassword'/>
            </Form.Item>
          </div>
          <div className='memorize'>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className='checkbox'>Ghi nhớ đăng nhập </Checkbox>
            </Form.Item>
          </div>

          <Form.Item className='btnstyle' wrapperCol={{ offset: 0, span: 16 }}>
            <Button className='buttonlogin' type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='textforgotpass'>
        <a className='forgotpass' href="/#">Quên mật khẩu?</a>
      </div>
    </div>
  );
};

export default Login;
