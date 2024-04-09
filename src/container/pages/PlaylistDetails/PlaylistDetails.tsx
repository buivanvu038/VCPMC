import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,SearchOutlined} from '@ant-design/icons';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./StylePlaylistDetails.scss"; // Make sure the correct path is provided

const PlaylistDetails = () => {
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
                             <PlusCircleOutlined className='custom-icon' />
                        </div>
                        <div className='text'>  <Link className='styletabs' to="/addContract">Thêm hợp Đồng</Link></div>
                    </div>  
                </div>
                </div>
        <div style={{display:"flex"}}>
            <div> <h1>dsk</h1> </div>
        <table style={{marginLeft:"11%"}} className="custom-tableplaylist">
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
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
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
         

        </tr>
        
      
      </tbody>
    </table>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
