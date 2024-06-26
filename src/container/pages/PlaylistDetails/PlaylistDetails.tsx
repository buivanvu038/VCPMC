import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,GlobalOutlined,RetweetOutlined,PauseCircleOutlined,RestOutlined,FormOutlined} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import chitietplaylist from "../../../asset/chitietplaylist.jpg";
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
                             <FormOutlined  className='custom-icon' />
                        </div>
                        <div className='text'>  <Link className='styletabs' to="/editPlaylist">Chỉnh sửa</Link></div>
                        
                    </div>  
                    <div className='styleSetcontrac'>
                        <div className='styleiconcontrac'>
                             <RestOutlined className='custom-iconx' />
                        </div>
                        <div className='text'>  <Link className='styletabs' to="#">Xóa playlist</Link></div>
                        
                    </div> 
                </div>
                </div>
        <div style={{display:"flex"}}>
            <div> 
              <div>
                <div style={{display:"flex"}}>
              <img className="imgplaylist" src={chitietplaylist} alt="user" />
         
                </div>
              <div><h2 className='textimg'>Top ca khúc 2021</h2></div>
              <hr style={{opacity:"0.5"}} />
              <div className='stylett'>Người tạo: <span style={{marginLeft:"60px"}}>Supper Admin</span></div>
              <div className='stylett'>Tổng số: <span style={{marginLeft:"74px"}}>8 bản ghi</span></div>
              <div className='stylett'>Tổng thời lượng:<span style={{marginLeft:"20px"}}>01:31:16</span></div>
              </div>
              <hr style={{opacity:"0.5"}} />
              <div> <p className='styletital'>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit, sed <br />
                        do eiusmod tempor incididunt <br />
                         labore et dolore magna aliqua.</p></div>
                         <hr style={{opacity:"0.5"}} />
                         <div className='chude1'>
                          <div><span className='stylecicle'>●</span>Chủ đề 1</div>
                          <div> <span className='stylecicle'>●</span>Chủ đề 2</div>
                          <div><span className='stylecicle'>●</span>Chủ đề 3</div>
                          <div><span className='stylecicle'>●</span>Chủ đề 4</div>
                          <div><span className='stylecicle'>●</span>Chủ đề 5</div>
                          <div><span className='stylecicle'>●</span>Chủ đề 6</div>

                         </div>
                         <hr style={{opacity:"0.5"}} />
                          <div className='stylefinal'>
                            <div><span><GlobalOutlined /></span> Hiện thị ở chế độ công khai</div>
                            <div><span><PauseCircleOutlined /></span> Phát ngẫu nhiên</div>
                            <div> <span><RetweetOutlined /></span> Lặp lại</div>
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
