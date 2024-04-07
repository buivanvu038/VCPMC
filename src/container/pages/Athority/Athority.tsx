import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,SearchOutlined} from '@ant-design/icons';
import { FormOutlined,ContainerOutlined,UndoOutlined,PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import "./StyleAthority.scss"; // Make sure the correct path is provided

const Athority = () => {
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
            quản lý <span className='iconright'><RightOutlined /></span> Quản lý hợp đồng <span className='iconright'><RightOutlined /></span> chi tiết 
          </p>
        </div>
        <h1 className='text'>Danh sách hợp đồng</h1>
        <div className="tabs">
  <input className='inputcontrac' type="radio" name="tabs" id="tab1" />
  <label className='labelcontrac' htmlFor="tab1">Thông tin hợp đồng </label>
          
  <input className='inputcontrac' type="radio" name="tabs" id="tab2" defaultChecked />
  <label className='labelcontrac' htmlFor="tab2">Tác phẩm ủy quyền</label>
            
  <div className="slider"></div>
</div>

        <div>
          <div className='quyensohuuatho'>Tình trạng sở hữu:</div>
          <div className='dropdown'>
            <select className='dropdowncontent' name="ownership" id="ownership">
              <option value="all">Tất cả</option>
              <option value="javascript">Tất cả</option>
              <option value="python">Tất cả</option>
              <option value="java" selected>Tất cả</option>
            </select>
          </div>
        </div>
       
        <div>
          <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
              <button type="submit" className="searchButton">
              <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
        <div>  <div className='StyleSettingatho'>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <FormOutlined className='custom-icon' />
                        </div>
                      
          <Link className='xemchitietatho' to="/Editwork">  <div className='text'>Chỉnh sửa tác phẩm</div></Link>
                        
                    </div>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <ContainerOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Gia hạn hợp đồng</div>
                    </div>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <UndoOutlined className='custom-icon' />
                        </div>
                        <div className='text'>Hủy hợp đồng</div>
                    </div>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <PlusOutlined className='custom-iconplus' />
                        </div>
                        <div className='text'>Thêm bản ghi</div>
                    </div>
                  

                 
                  
                </div>
                </div>
        <div>
        <table className="custom-tableatho">
      <thead style={{color:"#FFAC69"}}>
        <tr>
          <th>STT</th>
          <th>Tên bản ghi</th>
          <th>Mã ISRC</th>
          <th>Ca sĩ</th>
          <th>Tác giả</th>
          <th>Ngày tải</th>
          <th>Tình trạng</th>
          <th></th>


        </tr>
      </thead>
      <tbody className='bodytable'>
        <tr>
          <td>1</td>
          <td>Gorgeous Wooden Bike <div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>3:12</div></td>
          <td>VNA1423525</td>
          <td>Vương Anh Tú</td>
          <td>Vương Phong</td>
          <td>01/04/2021 15:53:13</td>
          <td>Mới</td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>

        <tr>
        <td>2</td>
        <td>Small Concrete Fish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>0:15</div></td>
          <td>VNA1423525</td>
          <td>Khác Hưng</td>
          <td>Đinh Nhân DVM</td>
          <td>12/03/2021 15:53:13</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>

        </tr>
        <tr className="table-divider">
        <td colSpan={8}></td>


</tr>

        <tr>
        <td>3</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">
      

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>4</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>5</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>6</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>7</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
          <td>8</td>
          <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>9</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
       
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>10</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
      
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>11</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">
  <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
        <td>12</td>
        <td>SmallConcreteFish<div className='styledetailtext'>Ballad<span className='stylecicle'>●</span>Audio<span className='stylecicle'>●</span>fdfdf</div></td>
          <td>VNA1423525</td>
          <td>KhácHưng</td>
          <td>ĐinhNhânDVM</td>
          <td>fxgfgfgfg</td>
          <td>Mới</td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        
      
      </tbody>
    </table>
        </div>
      </div>
    </div>
  );
};

export default Athority;
