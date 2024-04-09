import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleContractEditing.scss";
import { Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { RightOutlined, FormOutlined, ContainerOutlined, CloseOutlined, FileWordOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Modal, Button, Input, Select, } from 'antd';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { DatePicker } from 'antd';

import { Upload } from 'antd';
import { Flex } from 'antd';



const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};

const { TextArea } = Input;
const { Option } = Select;
const props = {
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info: { file: any, fileList: any }) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
    }
};


const ContractEditing = () => {
    const [changePasswordVisible, setChangePasswordVisible] = useState(false);
    const [value, setValue] = useState('');
    const [, setSelectedValue] = useState('');

    const openChangePassword = () => {
        setChangePasswordVisible(true);
    }

    const handleOk = () => {
        setChangePasswordVisible(false);
        // Thực hiện xác nhận hủy hợp đồng ở đây
        message.open({
            type: 'success',
            content: 'Hủy hợp đồng thành công!',
            duration: 8
        });
    }

    const handleCancel = () => {
        setChangePasswordVisible(false);
    }

    const handleChange = (value: string) => {
        setSelectedValue(value);
    }

    return (
        <div className='styleuseraa'>
            <Navbar />
            <div className='containerinfor'>
                <div className='direct'>
                    <p className='thanhngang'>
                        quản lý <span className='iconright'><RightOutlined /></span> Quản lý hợp đồng<span className='iconright'><RightOutlined /></span>
                    </p>
                </div>
                <h1 className='textttcb'> Chi tiết hợp đồng uỷ quyền bài hát - BH123</h1>

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
                <div className='contentdetail'>
                    <div className="containerdetail">
                        <div className="item item1">
                            <p>Số hợp đồng: <input style={{marginLeft:"20px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Tên hợp đồng: <input style={{marginLeft:"11px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngày hiệu lực: <span style={{marginLeft:"14px"}} className='styledetailtextedit'><DatePicker /></span></p>
                            <p>Ngày hết hạn: <span style={{marginLeft:"14px"}} className='styledetailtextedit'><DatePicker /></span></p>

                            <p>Tình trạng:  <span> <Select  className='styledetailtext' defaultValue="Đang hiệu lực" style={{marginLeft:"35px",width:"220px"}} onChange={handleChange}>
                                <Option value="hopdong1">Hợp đồng 1</Option>
                                <Option value="hopdong2">Hợp đồng 2</Option>
                                <Option value="hopdong3">Hợp đồng 3</Option>
                            </Select></span>

                            </p>
                        </div>
                        <div className="item item2">
                            
                            <p style={{display:"flex"}}>Đính kèm tệp: <span style={{marginLeft:"10px"}}>   <Flex gap={8}>
                                <Upload {...props}>
                                    <Button className='styledetailtextupload' icon={<UploadOutlined />}>Tải lên</Button>
                                </Upload>
                               
                            </Flex></span> </p>
                         
                            <p style={{ marginLeft: "110px " }}><span style={{ color: "#ffff" }}> <FileWordOutlined /></span> <span className='styledetailtext'>hetthuongcannho.doc</span> <span style={{ color: "red" }}><CloseOutlined /></span><br />
                                <span style={{ color: "#ffff" }}> <FilePdfOutlined /></span>   <span className='styledetailtext'>hetthuongcannho.doc</span> <span style={{ color: "red" }}><CloseOutlined /></span>
                            </p>
                        </div>
                       
                        <div className="item item3">
                            <h4 style={{ color: "#FFAC69" }}> Mức nhuận bút</h4>
                            <p>Quyền tác giả: <span style={{marginLeft:"100px"}} className='styledetailtext'>0%</span></p>
                            <h4> Quyền liên quan:</h4>
                            <p>Quyền của người biểu diễn: <span className='styledetailtext'>50%</span></p>
                            <p>Quyền của nhà sản xuất: <span style={{marginLeft:"20px"}} className='styledetailtext'>50%</span></p>
                            <p>(Bản ghi/video)</p>
                        </div>
                    </div>
                    
                </div>
                
                <div className='contentdetail2'>
                <hr style={{ width:"99%", opacity: 0.5, marginTop:"-2%" }} />

                    <div className="container2">
                        
                        <div className="item item1">
                            <h3 style={{ color: "#FFAC69" }}>Thông tin pháp nhân uỷ quyền</h3>
                            <p>Pháp nhân uỷ quyền: <span style={{marginLeft:"7px"}}  className='checkboxediting'> <Radio><span style={{ color: '#ffff', }}>Cá nhân</span></Radio> <Radio><span style={{ color: '#ffff' }}>Tổ chức</span></Radio></span></p>
                            <p>Tên người uỷ quyền:<input style={{marginLeft:"14px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngày sinh: <span style={{marginLeft:"83px"}} className='styledetailtextedit'><DatePicker /></span></p>
                            <p>Giới tính:   <span style={{marginLeft:"90px"}} className='checkboxediting'> <Radio><span style={{ color: '#ffff' }}>Nam</span></Radio> <Radio><span style={{ color: '#ffff' }}>Nữ</span></Radio></span></p>
                            <p>Quốc tịch:  <span style={{marginLeft:"83px"}}>  <Select className='styledetailtext' defaultValue="Việt nam" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="hopdong1">trung quốc</Option>
                                <Option value="hopdong2">Thái lan</Option>
                                <Option value="hopdong3">Mỹ</Option>
                            </Select></span></p>
                            <p>Số điện thoại: <input style={{marginLeft:"56px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                        </div>
                        <div className="item item2">
                            <p>Số CMND/ CCCD: <input style={{marginLeft:"25px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngày cấp: <span style={{marginLeft:"80px"}} className='styledetailtextedit'><DatePicker /></span></p>
                            <p>Nơi cấp: <span style={{marginLeft:"90px"}} className='styledetailtextedit'><DatePicker /></span></p>

                            <p>Mã số thuế: <input style={{marginLeft:"62px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Nơi cư trú: 
                                  
                                    <TextArea
                                    
                                        showCount
                                        maxLength={100}
                                        onChange={onChange}
                                        placeholder="69/53, Nguyễn Gia Trí,Phường 25,Quận Bình Thạnh,Thành phố Hồ Chí Minh  "
                                        style={{ height: 80,width:250, resize: 'none' ,marginLeft:"75px " }}
                                    />
                               </p>

                        </div>
                        <div className="item item3">
                            <p>Email:  <input style={{marginLeft:"69px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Tên đăng nhập:  <input className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Mật khẩu:  <input style={{marginLeft:"43px"}} className='styleinputediting' type="password" name="" id="" /> </p>
                            <p>Số tài khoản: <input style={{marginLeft:"22px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngân hàng:  <input style={{marginLeft:"32px"}} className='styleinputediting' type="text" name="" id="" /> </p>
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
                        <div className='text'>Chỉnh sửa hợp đồng</div>
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
            </div>
            <div className='custom-modal'>
                <Modal
                    styles={{
                        content: { backgroundColor: '#3E3E5B', width: "80%", },
                    }}
                    className='formsetpass'
                    visible={changePasswordVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button className='btnsetpassback' key="back" onClick={handleCancel}>
                            Quay lại
                        </Button>,
                        <Button className='btnsetpasssubmit' key="submit" type="primary" onClick={handleOk}>
                            Hủy hợp đồng
                        </Button>,
                    ]}
                >
                    <div>
                        <div ><h2 style={{ color: "#ffff", textAlign: "center" }}>Hủy hợp đồng uỷ quyền</h2></div>
                    </div>
                    <TextArea
                        style={{ background: "#2F2F41", border: "none", color: "#fff" }}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </Modal>
                
            </div>
            <div className='stylebtnedit'>
        <button className='btnedit1edit'> Hủy </button>
        <button className='btneditedit'>Lưu</button>

      </div>
        </div>
        
    );
}

export default ContractEditing;
