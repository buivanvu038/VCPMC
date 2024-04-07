import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleDetail.scss";

import { RightOutlined ,FormOutlined,ContainerOutlined,CloseOutlined } from '@ant-design/icons';
import { Modal, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { message } from 'antd';
const { TextArea } = Input;



const Detail = () => {
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);

    const openChangePassword = () => {
        setChangePasswordVisible(true);
    }
    
    const handleOk = () => {
        setChangePasswordVisible(false);
        // Thực hiện xác nhận đổi mật khẩu ở đây
        message.open({
            type: 'success',
            content: 'Hủy hợp đồng thành công!',
            duration: 8
        });
    }
    const handleCancel = () => {
        setChangePasswordVisible(false);
    }
    const [value, setValue] = useState('');

    return (
        <div className='styleuseraa'>
            <Navbar />
            <div className='containerinfor'>
            <div className='direct'>
          <p className='thanhngang'>
            quản lý <span className='iconright'><RightOutlined /></span> Quản lý hợp đồng<span className='iconright'><RightOutlined /></span> 
          </p>
        </div>
                <h1 className='textttcb'>Chi tiết hợp đồng uỷ quyền bài hát - BH123</h1>
                
                <div>
                <div className="tabs">
          <input className='inputcontrac' type="radio" name="tabs" id="tab1" defaultChecked />
         
          <label className='labelcontrac' htmlFor="tab1">
  <div className='xemchitietdetail'>
    <Link className='styletabs' to="/detail">Thông tin hợp đồng</Link>
  </div>
</label>
          
          <input className='inputcontrac' type="radio" name="tabs" id="tab2" />
          <label className='labelcontrac' htmlFor="tab2">
  <div className='xemchitietdetail'>
    <Link className='styletabs' to="/athority">Tác phẩm ủy quyền</Link>
  </div>
</label>



            
          <div className="slider"></div>
        </div>
                </div>
            </div>
            <div>
            <div className='contentdetail'><div className="containerdetail">  
   <div className="item item1">
    <p>Số hợp đồng: <span className='styledetailtext'>BH123</span> </p>
    <p>Tên hợp đồng:  <span className='styledetailtext'>Hợp đồng uỷ quyền tác phẩm âm nhạc</span></p>
    <p>Ngày hiệu lực:  <span className='styledetailtext'>01/05/2021</span></p>
    <p>Ngày hết hạn: <span className='styledetailtext'>01/12/2021 </span></p>
    <p>Tình trạng:  <span className='styledetailtext'>Còn thời hạn</span></p>

    </div>  
  
    <div className="item item2">
    <p>Đính kèm tệp:   <span className='styledetailtext'>hetthuongcannho.doc</span></p>
    <p style={{marginLeft:"110px "}}>  <span className='styledetailtext'>hetthuongcannho.doc</span> </p></div>  
   <div className="item item3">
    <h4 style={{color:"#FFAC69"}}> Mức nhuận bút</h4>
    <p>Quyền tác giả:  <span className='styledetailtext'>0%</span></p>
    <h4> Quyền liên quan:</h4>
    <p>Quyền của người biểu diễn: <span className='styledetailtext'>50%</span></p>
    <p>Quyền của nhà sản xuất: <span className='styledetailtext'>50%</span></p>
    <p>(Bản ghi/video)</p>



    </div>  
    
</div>
</div>

<div className='contentdetail2'><div className="container2">  
   <div className="item item1">
    <h3>Thông tin pháp nhân uỷ quyền</h3>
    <p>Pháp nhân uỷ quyền: <span className='styledetailtext'> Cá nhân</span></p>
    <p>Tên người uỷ quyền: <span className='styledetailtext'> Nguyễn Văn A </span></p>
    <p>Ngày sinh:  <span className='styledetailtext'>10/01/1984</span></p>
    <p>Giới tính: Nam <span className='styledetailtext'>Nam</span></p>
    <p>Quốc tịch: Việt Nam <span className='styledetailtext'>Việt Nam</span></p>
    <p>Số điện thoại:  <span className='styledetailtext'>(+84) 345 678 901</span></p>


    </div>  
   <div className="item item2">
    <p>Số CMND/ CCCD:  <span className='styledetailtext'>10/07/2011</span></p>
    <p>Nơi cấp:  <span className='styledetailtext'>Tp.HCM, Việt Nam</span></p>

    <p>Mã số thuế: 92387489 <span className='styledetailtext'>92387489</span></p>
    <p>Nơi cư trú: <span className='styledetailtext'>69/53, Nguyễn Gia Trí, <br /> Phường 25,
Quận Bình Thạnh, <br /> Thành phố Hồ Chí Minh </span></p>

    </div>  
   <div className="item item3">
    <p>Email:  <span className='styledetailtext'>nguyenvana@gmail.com</span></p>
    <p>Tài khoản đăng nhập:  <span className='styledetailtext'>nguyenvana@gmail.com</span></p>
    <p>Mật khẩu: <span className='styledetailtext'> ●	●	●	●	●	●	●	●	</span></p>
    <p>Số tài khoản:  <span className='styledetailtext'>1231123312211223</span></p>
    <p>Ngân hàng:  <span className='styledetailtext'>ACB - Ngân hàng Á Châu</span></p>
    </div>  
    
</div>
</div>
</div>
            
            <div className='inputuser'>
               
                <div className='StyleSettingDetail'>
                    <div className='styleSetDetail'>
                        <div className='styleiconDetail'>
                             <FormOutlined className='custom-icon' />
                        </div>
                      
                        <Link className='xemchitietatho' to="/contractEditing">  <div className='text'>Chỉnh sửa hợp đồng</div></Link>
                    </div>
                    <div className='styleSetDetail'>
                        <div className='styleiconDetail'>
                             <ContainerOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Gia hạn hợp đồng</div>
                    </div>

                    <div className='styleSetDetail' onClick={openChangePassword}>
                        <div className='styleiconDetail'>
                             <CloseOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Hủy hợp đồng</div>
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
                Quay lại
            </Button>,
            <Button className='btnsetpasssubmit' key="submit" type="primary" onClick={handleOk}>
                Hủy hợp đồng
            </Button>,
        ]}
    >
        <div>
        <div ><h2 style={{color:"#ffff" ,textAlign:"center"}}>Hủy hợp đồng uỷ quyền</h2></div>
      
        </div>
      
        <TextArea
        
        style={{background:"#2F2F41",border:"none" ,color:"#fff"}}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </Modal>
</div>

        </div>
    );
}

export default Detail;
