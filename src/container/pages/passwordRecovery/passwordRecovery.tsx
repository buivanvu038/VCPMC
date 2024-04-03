
import React from 'react';
import {   Form } from 'antd';
import logo from "../../../asset/logo.jpg";
import vietnam from "../../../asset/vietnam.jpg";
import english from "../../../asset/english.png";
import { DownOutlined } from '@ant-design/icons';

import "./StyleRecovery.scss";
import {

  Select,

} from 'antd';
const passwordRecovery: React.FC = () => {
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
  <Select defaultValue="vie" className='selectLang-smallrecovery'>
    <Select.Option value="vie">Việt Nam <img className='imglang' src={vietnam} alt="Vietnamese Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
    <Select.Option value="eng">English <img className='imglang' src={english} alt="English Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
  </Select>
</Form.Item> 

        <div >
        <img className='imglogorecovery'src={logo} alt="Logo"  />
         <h1 className='textlogin'>Đăng nhập</h1>
         <span className='textspan' style={{color:"#ffff"}}>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</span> <br />
         <span className='textspan' style={{color:"#ffff"}}>Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</span>

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

      
        </Form>

      <div className='forgotpass'> <a className='textforgotpass' href="/">Quay lại đăng nhập</a></div>
      
      </div>

    </div>
    
  );
};

export default passwordRecovery;
