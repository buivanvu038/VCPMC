import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import "./StyleAddContract.scss";
import { Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RightOutlined, CloseOutlined, FileWordOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Modal, Button, Input, Select, } from 'antd';
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
const AddContract = () => {
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
                        quản lý <span className='iconright'><RightOutlined /></span> Quản lý hợp đồng <span className='iconright'><RightOutlined /></span> Thêm hợp đồng mới
                    </p>
                </div>
                <h1 className='textttcb'>Thêm hợp đồng khai thác mới</h1>      
            </div>
            <div>
                <div style={{marginTop:"-1%"}} className='contentdetail'>
                    <div className="containerdetail">
                        <div className="item item1">
                            <p>Tên hợp đồng: <input style={{marginLeft:"20px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Số hợp đồng: <input style={{marginLeft:"28px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngày hiệu lực: <span style={{marginLeft:"20px"}} className='styledetailtextedit'><DatePicker /></span></p>
                            <p>Ngày hết hạn: <span style={{marginLeft:"20px"}} className='styledetailtextedit'><DatePicker /></span></p>   
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
                            <h4>Loại hợp đồng</h4>
                            <div > <Radio>Radio</Radio> <hr className='styleHr' /></div>
                            <div >
                            <div  className='textlhd' >Giá trị hợp đồng   <input className='styleinputlhd' type="text" name="" id="" /> <br />(NVĐ) </div> 
                          
                            </div>
                            <div style={{marginTop:"10%"}} >
                            <div  className='textlhd' >Giá trị hợp đồng   <input className='styleinputlhd' type="text" name="" id="" /> <br />(NVĐ) </div> 
                          
                            </div>
                            <div style={{marginTop:"10%"}} >
                            <div  className='textlhdfil' >Giá trị Luợt phát   <input className='styleinputlhd' type="text" name="" id="" /> <br />(NVĐ) </div> 
                            </div>     
                            <div style={{marginTop:"-40px"}}> <Radio>Radio</Radio></div>
                        </div>
                    </div>
                </div>
                <div className='contentdetail2'>
                    <div className="container2">
                        <div className="item item1">  
                            <p>Tên đơn vị sự dụng: <input style={{marginLeft:"14px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Người đại diện:<input style={{marginLeft:"50px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Chức vụ: <input style={{marginLeft:"95px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngày sinh:   <span style={{marginLeft:"82px"}} className='styledetailtextedit'><DatePicker /></span></p>
                            <p>Quốc tịch:  <span style={{marginLeft:"83px"}}>  <Select className='styledetailtext' defaultValue="Việt nam" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="hopdong1">trung quốc</Option>
                                <Option value="hopdong2">Thái lan</Option>
                                <Option value="hopdong3">Mỹ</Option>
                            </Select></span></p>
                            <p>Số điện thoại: <input style={{marginLeft:"56px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Email: <input style={{marginLeft:"111px"}} className='styleinputediting' type="Email" name="" id="" /> </p>
                        </div>
                        <div className="item item2">
                            <p>Giới tính: <span style={{marginLeft:"7px"}}  className='checkboxediting'> <Radio><span style={{ color: '#ffff', }}>Nam</span></Radio> <Radio><span style={{ color: '#ffff' }}>Nữ</span></Radio></span></p>
                            <p>CMND/CCCD: <input style={{marginLeft:"62px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngày cấp: <span style={{marginLeft:"90px"}} className='styledetailtextedit'><DatePicker /></span></p>
                            <p>Nơi cấp: <input style={{marginLeft:"100px"}} className='styleinputediting' type="text" name="" id="" /> </p>

                            <p>Mã số thuế: <input style={{marginLeft:"73px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Nơi cư trú:<input style={{marginLeft:"85px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                        </div>
                        <div className="item item3">
                            <p>Tên đăng nhập:  <input className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Mật khẩu:  <input style={{marginLeft:"43px"}} className='styleinputediting' type="password" name="" id="" /> </p>
                            <p>Số tài khoản: <input style={{marginLeft:"22px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                            <p>Ngân hàng:  <input style={{marginLeft:"32px"}} className='styleinputediting' type="text" name="" id="" /> </p>
                        </div>
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
            <div className='stylebtneditaddcontrac'>
        <button className='btnedit1edit'> Hủy </button>
        <button className='btneditedit'>Lưu</button>
      </div>
        </div>
    );
}

export default AddContract;
