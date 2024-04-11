import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleScheduleList.scss";
import User from "../../../asset/user.jpg";
import { CameraOutlined ,FormOutlined,LockOutlined,PlusCircleOutlined } from '@ant-design/icons';
import { Modal, Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { message } from 'antd';
import { Link } from 'react-router-dom';

const ScheduleList = () => {
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
                <h1 className='textttcb'>Danh sách lịch phát</h1>
                <div>  <div className='StyleSettingatho'>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <PlusCircleOutlined className='custom-icon' />
                        </div>
                      
          <Link className='xemchitietatho' to="/addNewPlaylist">  <div className='text'>Thêm <br /> Lịch phát</div></Link>
                        
                    </div>
                </div>
                </div>
    <div> <table className="custom-table">
      <thead style={{color:"#FFAC69"}}>
        <tr>
          <th>STT</th>
          <th>Tên lịch</th>
          <th>Thời gian phát</th>
          <th></th>


        </tr>
      </thead>
      <tbody className='bodytable'>
        <tr>
          <td>1</td>
          <td>Lịch phát số 1</td>
          <td>22/05/2021 - 30/05/2021</td>
          <td >
          <Link className='xemchitiet' to="/detailedSchedule">Xem chi tiết</Link>
          </td>
          <td >
          <Link style={{color:"red"}} className='xemchitiet' to="#">Xóa</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>Lịch phát số 1</td>
          <td>22/05/2021 - 30/05/2021</td>
          <td >
          <Link className='xemchitiet' to="/detailedSchedule">Xem chi tiết</Link>
          </td>
          <td >
          <Link style={{color:"red"}} className='xemchitiet' to="#">Xóa</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>Lịch phát số 1</td>
          <td>22/05/2021 - 30/05/2021</td>
          <td >
          <Link className='xemchitiet' to="#">Xem chi tiết</Link>
          </td>
          <td >
          <Link style={{color:"red"}} className='xemchitiet' to="#">Xóa</Link>
          </td>
         

        </tr>
        
      
      </tbody>
    </table></div>
        </div>
        </div>
    );
}

export default ScheduleList;
