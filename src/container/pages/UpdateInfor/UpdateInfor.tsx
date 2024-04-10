import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleUpdateInfor.scss";

import { RightOutlined ,FormOutlined,CarryOutOutlined,CloseOutlined } from '@ant-design/icons';
import { Modal, Button, Input, Flex } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { message } from 'antd';
import bai1 from "../../../asset/b1.jpg";


const UpdateInfor = () => {
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
            <div className='direct'>
          <p className='text'>
            Kho bản ghi  <span className='iconright'><RightOutlined /></span> Cập nhật thông tin
          </p>
        </div>
                <h1 className='textttcb'>Bản ghi - Mất em </h1>
                <div className="containerupdate">
      <div className="left-column">
        <div className="top-left-box"> <h3 className='textcenter1'>Thông tin bản ghi</h3>
        <div className='textcenter'>   <img className="imgbai1" src={bai1} alt="user" /></div>
        <div className='textcenter2'> <span style={{color:"#18E306"}}><CarryOutOutlined  /></span> <span style={{fontSize:"12px"}}>Matem.mp3</span></div> 
        <div><h5  style={{color:"#ffff"}}>Ngày thêm: <span className='thongtinupdate1'>07/04/2021 - 17:45:30</span></h5>
        
        
        <h5  style={{color:"#ffff"}}>Người tải lên: <span className='thongtinupdate2'>Super Admin</span></h5>
        <h5  style={{color:"#ffff"}}>Phê duyệt: <span className='thongtinupdate3'>Hệ thống <br /><span style={{marginLeft:"370px"}}>(Tự động phê duyệt)</span></span></h5>
        <h5 style={{color:"#ffff"}}>Ngày Phê duyệt: <span className='thongtinupdate4'>07/04/2021 - 17:45:50</span></h5>
        </div>

       

        </div>
        <div className="bottom-left-box">
            <div style={{marginTop:"-90px"}} ><h5 className='textcenter5'>Thông tin ủy quyền</h5></div>
            <div style={{marginBottom:"20px"}}> <div className='text1'>Số hợp đồng: <span className='span1'>BH123</span> </div></div>
            <div style={{marginBottom:"20px"}}>  <div className='text1'>Ngày nhận ủy quyền: <span className='span1'>01/05/2021</span> </div></div>
            <div style={{marginBottom:"20px"}}> <div className='text1'>Ngày hết hạn: <span className='span1'>01/08/2025</span> </div></div>
            <div> <div className='text1'>Trạng thái:<span className='span1'>BH123</span> </div></div>

        </div>
      </div>
      <div className="right-column">
       <h3 style={{color:"#FF7506", marginLeft:"35%"}}>Chỉnh sửa thông tin</h3>
       <div className='forminputthongtin'>
        <div className='styleinputthongtin'>Tên bản ghi<div><input className='styleinput' type="text" /></div></div>
        <div className='styleinputthongtin'>Tên bản ghi<div><input className='styleinput' type="text" /></div></div>
        <div className='styleinputthongtin'>Tên bản ghi <div><input className='styleinput' type="text" /></div></div>
        <div className='styleinputthongtin'>Tên bản ghi<div><input className='styleinput' type="text" /></div></div>
        <div className='styleinputthongtin'>Tên bản ghi<div><input className='styleinput' type="text" /></div></div>
        <div className='styleinputthongtin'>Tên bản ghi <div>  <label   form="cars"></label>
  <select className='styledrop' name="music" id="music">
    <option value="music">Volvo</option>
    <option value="music">Saab</option>
    <option value="music">Opel</option>
    <option value="music">Audi</option>
  </select></div></div>

      
       </div>
      </div>
    </div>
            </div>
            <div className='inputuser'>
               
                <div style={{marginTop:"-57%"}} className='StyleSettingupdate'>
                   

                    <div className='styleSetupdate' onClick={openChangePassword}>
                        <div  className='styleiconupdate'>
                             <CloseOutlined className='custom-iconupdate' />
                        </div>
                        <div className='text'>Xóa bản ghi</div>
                    </div>
                   
                </div>
               <div className='styleluubtn'>
               <div className='btnuserformation'>
                <Button  className='btnsetsaveuserback' key="back" onClick={handleCancel}>
                Hủy
            </Button>,
            <Button className='btnsaveusersubmit' key="submit" type="primary" onClick={handleOk}>
                Xác nhận
            </Button>,

                </div> 
               </div>
               
            </div >
            <div   className='custom-modal'>
               
    {/* <Modal
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
    </Modal> */}
</div>

        </div>
    );
}

export default UpdateInfor;
