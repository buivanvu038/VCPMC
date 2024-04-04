import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleUserInformation.scss";
import User from "../../../asset/user.jpg";
import { CameraOutlined ,FormOutlined,LockOutlined,LogoutOutlined } from '@ant-design/icons';
import { Modal, Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { message } from 'antd';

const UserInformation = () => {
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);

    const openChangePassword = () => {
        setChangePasswordVisible(true);
    }
    
    const handleOk = () => {
        setChangePasswordVisible(false);
        // Thực hiện xác nhận đổi mật khẩu ở đây
        message.open({
            type: 'success',
            content: 'Đổi mật khẩu thành công!',
            duration: 8
        });
    }
    
    const handleCancel = () => {
        setChangePasswordVisible(false);
    }

    return (
        <div className='styleuseraa'>
            <Navbar />
            <div className='containerinfor'>
                <h1 className='textttcb'>Thông tin cơ bản</h1>
                <div>
                    <img className="imguserinfor" src={User} alt="user" />
                    <div className='styleiconcammera'> <CameraOutlined /></div>
                    <span className='nameuser'>Tuyết Nguyễn</span>
                </div>
            </div>
            <div className='inputuser'>
                <div style={{display:"flex" , flexWrap:"wrap"}} className='row'>
                    <div  className='col-6'>
                        <div>
                            <div className='text'>Họ:</div>
                            <input className='Styleinput' type="text" />
                        </div>
                        <div>
                            <div  className='text'>Ngày sinh:</div>
                            <input className='Styleinput' type="text" />
                        </div>
                    </div>
                    <div style={{marginLeft:"10px"}} className='col-6'>  
                        <div>
                            <div className='text'>Tên:</div>
                            <input className='Styleinput' type="text" />
                        </div>
                        <div>
                            <div className='text'>Số điện thoại:</div>
                            <input className='Styleinput' type="text" />
                        </div>
                    </div>
                </div>
                <div className='StyleSetting'>
                    <div className='styleSet'>
                        <div className='styleicon'>
                             <FormOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Sửa thông tin</div>
                    </div>

                    <div className='styleSet' onClick={openChangePassword}>
                        <div className='styleicon'>
                             <LockOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Đổi mật khẩu</div>
                    </div>
                    <div className='styleSet'>
                        <div className='styleicon'>
                             <LogoutOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Đăng xuất</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div  className='text'>Email:</div>
                        <div >
                            <input  className='styleinput2' readOnly  type="email" placeholder='tuyetnguyenngoc@alta.com.vn' />
                        </div>
                    </div>
                    <div>
                        <div  className='text'>Tên đăng nhập:</div>
                        <div >
                            <input  className='styleinput2' readOnly type="text" placeholder='tuyetnguyenngoc@alta.com.vn'  />
                        </div>
                    </div>
                    <div>
                        <div  className='text'>Phân quyền:</div>
                        <div >
                            <input className='styleinputrole' readOnly  type="text" placeholder='admin' />
                        </div>
                    </div>
                </div>
            </div >
            <div   className='custom-modal'>
               
    <Modal
     styles={{
        content: { backgroundColor: '#3E3E5B',width:"80%", }, 
      }}
      
        className='formsetpass'
        
        visible={changePasswordVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button  className='btnsetpassback' key="back" onClick={handleCancel}>
                Hủy
            </Button>,
            <Button className='btnsetpasssubmit' key="submit" type="primary" onClick={handleOk}>
                Xác nhận
            </Button>,
        ]}
    >
        <div>
        <div ><h2 style={{color:"#ffff" ,textAlign:"center"}}>Thay đổi mật khẩu</h2></div>
        <div className='stylesetpass'>  <div className='text'>Mật khẩu hiện tại:</div>
            <Input.Password
            className='setpass'
                placeholder="Nhập mật khẩu hiện tại"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            /></div>
        </div>
        <div className='stylesetpass'>
            <div className='text'>Mật khẩu mới:</div>
            <Input.Password
            className='setpass'
                placeholder="Nhập mật khẩu mới"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </div>
        <div className='stylesetpass'>
            <div className='text'>Nhập lại mật khẩu mới:</div>
            <Input.Password
            className='setpass'
                placeholder="Nhập lại mật khẩu mới"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </div>
    </Modal>
</div>

        </div>
    );
}

export default UserInformation;
