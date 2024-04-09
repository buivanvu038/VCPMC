import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,SearchOutlined} from '@ant-design/icons';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./StyleContractList.scss"; // Make sure the correct path is provided

const ContractList = () => {
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
            quản lý <span className='iconright'><RightOutlined /></span> Quản lý hợp đồng
          </p>
        </div>
        <h1 className='text'>Danh sách hợp đồng</h1>
        <div className="tabs">
          <input className='inputcontrac' type="radio" name="tabs" id="tab1" defaultChecked />
          <label className='labelcontrac' htmlFor="tab1">Hợp đồng ủy quyền</label>
          
          <input className='inputcontrac' type="radio" name="tabs" id="tab2" />
          <label className='labelcontrac' htmlFor="tab2">Hợp đồng khai thác</label>
            
          <div className="slider"></div>
        </div>
        <div>
          <div className='quyensohuu'>Quyền sở hữu:</div>
          <div className='dropdownsohuu'>
            <select className='dropdowncontent' name="ownership" id="ownership">
              <option value="all">Tất cả</option>
              <option value="javascript">Tất cả</option>
              <option value="python">Tất cả</option>
              <option value="java" selected>Tất cả</option>
            </select>
          </div>
        </div>
        <div>
          <div className='quyensohuu1'>Hiệu lực hợp đồng:</div>
          <div className='dropdown1'>
            <select className='dropdowncontent1' name="contractValidity" id="contractValidity">
              <option value="all">Tất cả</option>
              <option value="javascript">Tất cả</option>
              <option value="python">Tất cả</option>
              <option value="java" selected>Tất cả</option>
            </select>
          </div>
        </div>
        <div>
          <div className="wrapcontrac">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
              <button type="submit" className="searchButton">
              <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
        <div>  <div className='StyleSettingcontrac'>
                    <div className='styleSetcontrac'>
                        <div className='styleiconcontrac'>
                             <PlusCircleOutlined className='custom-icon' />
                        </div>
                        <div className='text'>  <Link className='styletabs' to="/addContract">Thêm hợp Đồng</Link>
</div>
                    </div>

                 
                  
                </div>
                </div>
        <div>
        <table className="custom-table">
      <thead style={{color:"#FFAC69"}}>
        <tr>
          <th>STT</th>
          <th>Số hợp đồng</th>
          <th>Tên hợp đồng</th>
          <th>Người ủy quyền</th>
          <th>Quyền sở hữu</th>
          <th>Hiệu lực hợp đồng</th>
          <th>Ngày tạo</th>
          <th></th>


        </tr>
      </thead>
      <tbody className='bodytable'>
        <tr>
          <td>1</td>
          <td>HD123</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Vương Anh Tú</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>01/04/2021 15:53:13</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Xem chi tiết</Link>
          </td>
         

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>

        <tr>
        <td>2</td>
          <td>YQ14145145</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Khác Hưng</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>12/03/2021 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
        <td colSpan={8}></td>


</tr>

        <tr>
        <td>3</td>
          <td>UH1563167</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Châu Đăng Khoa</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>14/03/2021 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>4</td>
          <td>TH2156355</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Phan Mạnh Quỳnh</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>01/03/2021 15:51:05</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>5</td>
          <td>DG639148</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Karik</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>01/02/2021 13:13:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>6</td>
          <td>FG638149</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Binz</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>01/01/2021 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>7</td>
          <td>HJ256203</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>JustaTee</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>01/04/2021 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
          <td>8</td>
          <td>DG253321</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Đen Vâu</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>01/11/2020 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>9</td>
          <td>HH141654</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>RPT MCK</td>
          <td>Người biểu diễn</td>
          <td>Còn thời hạn</td>
          <td>16/10/2020 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>
        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>10</td>
          <td>JD1466521</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Chillies</td>
          <td>Người biểu diễn</td>
          <td>Đã hủy</td>
          <td>30/09/2020 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>
        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>11</td>
          <td>JH1567587</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Cá Hồi Hoang</td>
          <td>Người biểu diễn</td>
          <td>Đã hủy</td>
          <td>20/09/2020 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>
        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>12</td>
          <td>SG1562100</td>
          <td>Hợp đồng uỷ quyền bài hát</td>
          <td>Mai Deadline</td>
          <td>Người biểu diễn</td>
          <td>Đã hủy</td>
          <td>01/02/2020 15:53:13</td>
          <td className='xemchitiet'>Xem chi tiết</td>
        </tr>
        
      
      </tbody>
    </table>
        </div>
      </div>
    </div>
  );
};

export default ContractList;
