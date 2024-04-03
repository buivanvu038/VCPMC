
import React from 'react';
import {   Form } from 'antd';
import logo from "../../../asset/logo.jpg";
import vietnam from "../../../asset/vietnam.jpg";
import english from "../../../asset/english.png";
import { DownOutlined } from '@ant-design/icons';

import "./Styledisconnect.scss";
import {

  Select,

} from 'antd';
const Disconnect: React.FC = () => {
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
  <Select defaultValue="vie" className='selectLang-smalldis'>
    <Select.Option value="vie">Việt Nam <img className='imglang' src={vietnam} alt="Vietnamese Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
    <Select.Option value="eng">English <img className='imglang' src={english} alt="English Flag" /> <span className='icondown'><DownOutlined /></span></Select.Option>
  </Select>
</Form.Item> 

        <div >
        <img className='imglogodis'src={logo} alt="Logo"  />
         <h1 className='textlogindisconnect'>Không thể kết nối</h1>
         <span className='textspan' style={{color:"#ffff"}}>Dường như đã có chút trục trặc hoặc link này đã hết hạn. <br /> Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.</span> 
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

export default Disconnect;
