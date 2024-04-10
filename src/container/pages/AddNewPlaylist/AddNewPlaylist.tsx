import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,GlobalOutlined,RetweetOutlined,PauseCircleOutlined,RestOutlined,PlusCircleOutlined} from '@ant-design/icons';
import { Modal, Button, Input, Select, } from 'antd';
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Switch } from 'antd';
import "./StyleAddNewPlaylist.scss"; // Make sure the correct path is provided
const { TextArea } = Input;
interface Record {
    id: number;
    name: string;
    singer: string;
    author: string;
  }
  
  const RecordsPerPage = 5; // Số bản ghi hiển thị trên mỗi trang
  
const AddNewPlaylist = () => {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
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

      const [records, setRecords] = useState<Record[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newRecord, setNewRecord] = useState<Record>({ id: 0, name: '', singer: '', author: '' });

  // Tính toán số trang dựa trên số lượng bản ghi và số bản ghi trên mỗi trang
  const totalPages = Math.ceil(records.length / RecordsPerPage);

  // Lấy danh sách bản ghi cho trang hiện tại
  const getCurrentPageRecords = () => {
    const startIndex = (currentPage - 1) * RecordsPerPage;
    const endIndex = startIndex + RecordsPerPage;
    return records.slice(startIndex, endIndex);
  };

  // Xử lý khi người dùng thay đổi giá trị của input thêm bản ghi
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Record) => {
    setNewRecord({ ...newRecord, [field]: e.target.value });
  };

  // Xử lý khi người dùng thêm bản ghi mới
  const handleAddRecord = () => {
    const updatedRecords = [...records, { ...newRecord, id: records.length + 1 }];
    setRecords(updatedRecords);
    setNewRecord({ id: 0, name: '', singer: '', author: '' });
  };

  // Xử lý khi người dùng chọn trang
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`styleuseraa ${isDarkMode ? 'dark-preview' : 'white-preview'}`}>
      <Navbar/>
      <div className='containerinfor'>
        <div className='direct'>
          <p className='text'>
            Playlist <span className='iconright'><RightOutlined /></span> Thêm playlist mới
          </p>
        </div>
        <h1 className='text'>Thêm Playlist</h1>
 
        <div >  <div style={{marginTop:"1.8%"}} className='StyleSettingcontrac'>
                    <div className='styleSetcontrac'>
                        <div className='styleiconcontrac'>
                             <PlusCircleOutlined  className='custom-icon' />
                        </div>
                        <div className='text'>  <Link className='styletabs' to="/addToPlaylist">Thêm bản ghi</Link></div>
                        
                    </div>  
                   
                </div>
                </div>
        <div style={{display:"flex"}}>
            <div> 
              <div>
                <div style={{display:"flex"}}>
            <div className='text'>Ảnh bìa:</div>
            <p style={{display:"flex"}}> <span style={{marginLeft:"-60px", marginTop:"10px"}}>   <Flex gap={8}>
                                <Upload {...props}>
                                    <Button className='styledetailtextupload' icon={<UploadOutlined />}>Tải lên</Button>
                                </Upload>
                               
                            </Flex></span> </p>
                </div>
              <hr style={{opacity:"0.5"}} />
           <div style={{marginBottom:"5px"}} className='text'>Tiêu đề:</div>
           <div>  <input className='styleInputadd' type="text" value={newRecord.name} onChange={(e) => handleInputChange(e, 'name')} placeholder="" /></div>
              </div>
              <hr style={{opacity:"0.5"}} />
              <div> 
              <div style={{color:'#ffff', marginBottom:"10px"}}>Tổng số:<span  className='stylett' style={{marginLeft:"160px"}}>0 bản ghi</span></div>
              <div  style={{color:'#ffff', marginBottom:"10px"}}>Tổng thời lượng:<span className='stylett' style={{marginLeft:"120px"}}>--:--:--</span></div>
              <hr style={{opacity:"0.5"}} />
              <div style={{color:'#ffff', marginBottom:"10px"}} >Mô tả:</div>
              <div >
  <textarea
    className='styleInputadd1' 
    value={newRecord.singer} 
    onChange={(e: React.ChangeEvent<any>) => handleInputChange(e, 'singer')} 
    placeholder="" 
    style={{ width: '100%', height: '100px', padding: '10px' }} // Thiết lập kích thước và padding
  />
</div>


              </div>
                         <hr style={{opacity:"0.5"}} />
                         <div className='chude1'>
                            <div>Chủ đề:</div>
                        <input className='styleInputadd1' type="text" value={newRecord.author} onChange={(e) => handleInputChange(e, 'author')} placeholder="Nhập chủ đề" />
                         </div>
                         <hr style={{opacity:"0.5"}} />
                          <div className='stylefinal'>
                            <div><span style={{marginRight:"10px"}}> <Switch defaultChecked onChange={onChange} /></span > Chế độ công khai</div>
                       
                          </div>
            </div>
          
        <table style={{marginLeft:"3%"}} className="custom-tableplaylist">
      <thead style={{color:"#FFAC69"}}>
        <tr>
        <th>STT</th>
            <th>Tên bản ghi</th>
            <th>Ca sĩ</th>
            <th>Tác giả</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='bodytable'>
      {getCurrentPageRecords().map((record, index) => (
       
            <tr   key={index}>
              <td >{record.id}</td>
              <td>{record.name}</td>
              <td>{record.singer}</td>
              <td>{record.author}</td>
            </tr>
          ))}
         
      </tbody>
      
    </table>
    
    {/* <span>
      <div className='stylePagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
      </span> */}
      
   
    
      <div>
      
     
        {/* <button onClick={handleAddRecord}>Thêm bản ghi</button> */}
      </div>
  
        </div>
      </div>
      <div style={{marginTop:"5%", marginLeft:"50%"}} className='stylebtnadd'>
        <button className='btnedit1add'> Hủy </button>
        <button onClick={handleAddRecord} className='btneditadd'>Lưu</button>

      </div>
    </div>
  );
};

export default AddNewPlaylist;
