import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,GlobalOutlined,RetweetOutlined,PauseCircleOutlined,RestOutlined,PlusCircleOutlined,MoreOutlined} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import chitietplaylist from "../../../asset/chitietplaylist.jpg";
import "./StyleEditPlaylist.scss"; // Make sure the correct path is provided
import { Switch } from 'antd';
const EditPlaylist = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
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
            Playlist <span className='iconright'><RightOutlined /></span> Chi tiết playlist
          </p>
        </div>
        <h1 className='text'>Playlist Top ca khúc 2021</h1>
 
        <div>  <div className='StyleSettingcontrac'>
                    <div className='styleSetcontrac'>
                        <div className='styleiconcontrac'>
                             <PlusCircleOutlined  className='custom-icon' />
                        </div>
                        <div className='text'>  <Link className='styletabs' to="/addRecord">Thêm bản ghi</Link></div>
                        
                    </div>  
                 
                </div>
                </div>
        <div style={{display:"flex" , marginTop:"-33px"}}>
            <div> 
              <div>
           
              <div style={{display:'flex'}}>    <img className="imgplaylist" src={chitietplaylist} alt="user" />    <div><MoreOutlined className='styleiconmusic' /></div></div>
              <div><h2 className=''><input className='styleInputeditlist' type="text" /></h2></div>
              <hr style={{opacity:"0.5"}} />
              <div className='stylett'>Người tạo: <span style={{marginLeft:"60px"}}>Supper Admin</span></div>
              <div className='stylett'>Tổng số: <span style={{marginLeft:"74px"}}>8 bản ghi</span></div>
              <div className='stylett'>Tổng thời lượng:<span style={{marginLeft:"20px"}}>01:31:16</span></div>
              </div>
              <hr style={{opacity:"0.5"}} />
              <div> <div className='text'>Mô tả: </div> <div><input className='styleInputeditlist1' type="text" /></div> </div>
                         <hr style={{opacity:"0.5"}} />
                         <div className='text'>Chủ đề:</div>
                         <div className='chude1'>
                         <div><input className='styleInputeditlist2' type="text" /></div> 

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
          <th>Số hợp đồng</th>
          <th>Tên hợp đồng</th>
          <th>Người ủy quyền</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='bodytable'>
        <tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
        </tr>
        <tr className="table-divider">
        <td colSpan={8}></td>


</tr>

<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Gỡ</Link>
          </td>
         

        </tr>
        
      
      </tbody>
    </table>
        </div>
      </div>
      <div className='stylebtneditaddcontrac11'>
        <button className='btnedit1edit'> Hủy </button>
        <button className='btneditedit'>Lưu</button>

      </div>
    </div>
  );
};

export default EditPlaylist;
