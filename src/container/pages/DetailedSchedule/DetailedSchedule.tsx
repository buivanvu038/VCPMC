import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleDetailedSchedule.scss";
import { CameraOutlined ,FormOutlined,RightOutlined } from '@ant-design/icons';
import { Modal, Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { message } from 'antd';
import { Link } from 'react-router-dom';

const DetailedSchedule = () => {
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);
    const [individualChecked, setIndividualChecked] = useState(false);

    const openChangePassword = () => {
        setChangePasswordVisible(true);
    }
    
    const handleOk = () => {
        setChangePasswordVisible(false);
        // Thực hiện xác nhận đổi mật khẩu ở đây
        message.open({
            type: 'success',
            content: 'Chỉnh sửa thành công!',
            duration: 8
        });
    }
    
    const handleCancel = () => {
        setChangePasswordVisible(false);
    }
    
    const handleIndividualChange = () => {
        setIndividualChecked(!individualChecked);
    }

    return (
        <div className='styleuseraa'>
            <Navbar />
            <div className='containerinfor'>
                <p className='text'>
                    quản lý <span className='iconright'><RightOutlined /></span> Chi tiết
                </p>
                <h1 className='textttcb'>Lịch phát số 1</h1>
                <h2 className='textttcb'>Danh sách Playlist</h2>

                <div>
                    <div className='StyleSettingatho'>
                        <div className='styleSetatho'>
                            <div className='styleiconatho'>
                                <FormOutlined className='custom-icon' />
                            </div>
                            <div style={{color:'#FF7506', textDecoration:"none"}} onClick={openChangePassword} className='xemchitietatho'>Chỉnh sửa <br /> Lịch phát</div>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="custom-table">
                        <thead style={{color:"#FFAC69"}}>
                            <tr>
                                <th>STT</th>
                                <th>Tên Playlist</th>
                                <th>Ngày phát Playlist</th>
                                <th>Bắt đầu - Kết thúc</th>
                                <th>Chu kỳ phát</th>
                                <th>Thiết bị</th>
                            </tr>
                        </thead>
                        <tbody className='bodytable'>
                            <tr>
                                <td>1</td>
                                <td>Top USUK 2021</td>
                                <td>22/05/2021 - 30/05/2021</td>
                                <td>06:00:00 - 08:00:00  <br /><span>13:00:00 - 15:00:00</span></td>
                                <td>Thứ 3 | Thứ 6</td>
                                <td>Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5</td>
                            </tr>
                            <tr className="table-divider">
                                <td colSpan={8}></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Top USUK 2021</td>
                                <td>22/05/2021 - 30/05/2021</td>
                                <td>06:00:00 - 08:00:00  <br /><span>13:00:00 - 15:00:00</span></td>
                                <td>Thứ 3 | Thứ 6</td>
                                <td>Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5</td>
                            </tr>
                            <tr className="table-divider">
                                <td colSpan={8}></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Top USUK 2021</td>
                                <td>22/05/2021 - 30/05/2021</td>
                                <td>06:00:00 - 08:00:00  <br /><span>13:00:00 - 15:00:00</span></td>
                                <td>Thứ 3 | Thứ 6</td>
                                <td>Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                visible={changePasswordVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                styles={{
                    content: { backgroundColor: '#3E3E5B', width:"80%" }, 
                }}
            >
                <div>
                    <h2 className='text'>Top USUK 2021</h2>
                    <div className='text'>Lặp lại trong tuần</div>
                </div>
                <div className='stylemodel1'>

                <div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                      
                    />
                    <label htmlFor="individualCheckbox">Thứ hai </label>
                </div>  <div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                     
                    />
                    <label htmlFor="individualCheckbox">Thứ ba </label>
                </div>  <div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                       
                    />
                    <label htmlFor="individualCheckbox">Thứ tư </label>
                </div>  <div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                      
                    />
                    <label htmlFor="individualCheckbox">Thứ năm </label>
                </div>
                
                </div>
                <div className='stylemodel2'><div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                    />
                    <label htmlFor="individualCheckbox">Thứ sáu </label>
                </div><div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                       
                    />
                    <label htmlFor="individualCheckbox">Thứ bảy </label>
                </div><div>
                    <input
                        className='stylecheckapp'
                        type="checkbox"
                        
                    />
                    <label htmlFor="individualCheckbox">Chủ nhật </label>
                </div></div>
                <hr />
                <div>
                thứ hai
                 <div className='styletimedate'>
                    <input className='styleinputtime' type="text" name="" id="" /><span className='text'>:</span>
                    <input className='styleinputtime' type="text" name="" id="" /><span className='text'>:</span>
                    <input className='styleinputtime' type="text" name="" id="" />
                    <span style={{marginLeft:"9px", marginRight:"9px"}} className='text'>-</span>
                    <input className='styleinputtime' type="text" name="" id="" /><span className='text'>:</span>
                    <input className='styleinputtime' type="text" name="" id="" /><span className='text'>:</span>
                    <input className='styleinputtime' type="text" name="" id="" /><span className='text'>:</span>
                 </div>
                </div>
              
            </Modal>
        </div>
    );
}

export default DetailedSchedule;
