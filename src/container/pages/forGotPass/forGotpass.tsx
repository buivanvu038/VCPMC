import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import logo from "../../../asset/logo.jpg";
import vietnam from "../../../asset/vietnam.jpg";
import english from "../../../asset/english.png";
import { DownOutlined } from '@ant-design/icons';
import "./Styleforgotpass.scss";
import { Select } from 'antd';

const ForGotPass: React.FC = () => {
  const [email, setEmail] = useState('');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Gửi yêu cầu khôi phục mật khẩu qua email
    sendPasswordRecoveryEmail();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const sendPasswordRecoveryEmail = () => {
    // Thực hiện gửi yêu cầu khôi phục mật khẩu qua email
    // Gọi endpoint hoặc sử dụng thư viện nodemailer
    // Ví dụ:
    console.log(`Gửi yêu cầu khôi phục mật khẩu cho địa chỉ email: ${email}`);
    message.success('Yêu cầu khôi phục mật khẩu đã được gửi qua email.');
  };

  return (
    <div className='background-login'>
      <div className='container'>
        <div className='lang' >
          <Form.Item>
            <Select defaultValue="vie" className='selectLang-smallforgot'>
              <Select.Option value="vie">Việt Nam <img className='imglang' src={vietnam} alt="Vietnamese Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
              <Select.Option value="eng">English <img className='imglang' src={english} alt="English Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
            </Select>
          </Form.Item> 
          <div>
            <img className='imglogoforgot' src={logo} alt="Logo" />
            <h1 className='textlogin'>Đăng nhập</h1>
            <span className='textspan' style={{color:"#ffff"}}>Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu</span>
          </div>
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
            <p  className='textinput'>Email</p>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input className='styleInputforgotpass' onChange={e => setEmail(e.target.value)} />
            </Form.Item>
          </div>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
  {/* Sử dụng sự kiện onClick để xác định hành động khi nút được nhấn */}
  <button className='btnloginforgot' onClick={() => window.location.href="/resetPassword"}>
    Xác nhận
  </button>
</Form.Item>

          
        </Form>
        <div className='forgotpass'> <a className='textforgotpass' href="/Forgotpass">Quên mật khẩu</a></div>
      </div>
    </div>
  );
};

export default ForGotPass;
