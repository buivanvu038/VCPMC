import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,SearchOutlined} from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import "./StyleEditwork.scss"; // Make sure the correct path is provided
import { Checkbox } from 'antd';

const Editwork = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const Editwork = () => {
    // Your component code here
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`styleuseraa ${isDarkMode ? 'dark-preview' : 'white-preview'}`}>
      <Navbar/>
      <div className='containerinfor'>
        <div className='direct'>
          <p className='text'>
            quản lý hợp đồng  <span className='iconright'><RightOutlined /></span> Chi tiết hợp đồng <span className='iconright'><RightOutlined /></span> Chỉnh sửa danh sách tác phẩm uỷ quyền
          </p>
        </div>
        <h1 className='text'>Hợp đồng uỷ quyền bài hát - BH123</h1>
        

     
       
        <div>
          <div className="wrapedit">
            <div className="searchedit">
              <input type="text" className="searchTermedit" placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
              <button type="submit" className="searchButton">
              <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
        <div>  <div className='StyleSettingatho'>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <CloseOutlined className='custom-iconx' />
                        </div>
                      
          <Link className='xemchitietatho' to="/Editwork">  <div className='text'>Từ chối bản ghi</div></Link>
                        
                    </div>
                   
                  

                 
                  
                </div>
                </div>
        <div>
        <table className="custom-tabledit">
      <thead style={{color:"#FFAC69"}}>
        <tr>
          <th><Checkbox className='customcheckbox'></Checkbox>  </th>
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
          <th><Checkbox className='customcheckbox'></Checkbox>  </th>
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
        <td> <Checkbox className='customcheckbox'></Checkbox>  </td>

            
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
        <td> <Checkbox className='customcheckbox'></Checkbox>   </td>


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
        <td><Checkbox className='customcheckbox'></Checkbox>  </td>

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
        <td><Checkbox className='customcheckbox'></Checkbox>  </td>

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
        <td><Checkbox className='customcheckbox'></Checkbox>   </td>

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
        <td> <Checkbox className='customcheckbox'></Checkbox>   </td>

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
        <td> <Checkbox className='customcheckbox'></Checkbox>  </td>

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
        <td> <Checkbox className='customcheckbox'></Checkbox>   </td>

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
        <td> <Checkbox className='customcheckbox'></Checkbox>   </td>

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
        <td> <Checkbox className='customcheckbox'></Checkbox>  </td>

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
        <td >
        <Checkbox className='customcheckbox'></Checkbox>  
</td>



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

export default Editwork;
