import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import { RightOutlined ,SearchOutlined} from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import "./StyleEditwork.scss"; // Make sure the correct path is provided
import { Checkbox } from 'antd';

const Editwork = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [individualChecked, setIndividualChecked] = useState(Array(12).fill(false)); // Tạo một mảng 12 phần tử, mỗi phần tử là false

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectAllChecked(isChecked);
    setIndividualChecked(Array(12).fill(isChecked)); // Cập nhật trạng thái của tất cả các checkbox cá nhân
  };

  const handleIndividualChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = [...individualChecked];
    newCheckedState[index] = event.target.checked;
    setIndividualChecked(newCheckedState);
    setSelectAllChecked(newCheckedState.every((isChecked) => isChecked)); // Kiểm tra nếu tất cả các checkbox cá nhân đều được chọn
  };
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
        <th>  <input 
               className='stylecheckapp'
          type="checkbox"
          checked={selectAllChecked}
          onChange={handleSelectAllChange}
        /></th>
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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[0]}
          onChange={handleIndividualChange(0)}
        /></td>
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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[1]}
          onChange={handleIndividualChange(1)}
        /></td>

            
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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[2]}
          onChange={handleIndividualChange(2)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[3]}
          onChange={handleIndividualChange(3)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[4]}
          onChange={handleIndividualChange(4)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[5]}
          onChange={handleIndividualChange(5)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[6]}
          onChange={handleIndividualChange(6)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[7]}
          onChange={handleIndividualChange(7)}
        /></td>
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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[8]}
          onChange={handleIndividualChange(8)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[9]}
          onChange={handleIndividualChange(9)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[10]}
          onChange={handleIndividualChange(10)}
        /></td>

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
        <td > <input 
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked[11]}
          onChange={handleIndividualChange(11)}
        /></td>



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
      <div className='stylebtn'>
        <button className='btnedit1'> Hủy </button>
        <button className='btnedit'>Lưu</button>

      </div>
    </div>
  );
};

export default Editwork;
