import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import {  SearchOutlined,AppstoreOutlined,UnorderedListOutlined,CheckOutlined,CloseOutlined} from '@ant-design/icons';
import {  FormOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import bai1 from "../../../asset/b1.jpg";
import bai2 from "../../../asset/b2.jpg";
import bai3 from "../../../asset/b3.jpg";
import bai4 from "../../../asset/b4.jpeg";
import bai5 from "../../../asset/b5.jpeg";
import bai6 from "../../../asset/b6.jpeg";
import bai7 from "../../../asset/b7.jpeg";
import bai8 from "../../../asset/b8.jpeg";




import "./StyleApprovalManagement.scss"; // Make sure the correct path is provided


const ApprovalManagement = () => {
    const [viewMode, setViewMode] = useState('table');

    const switchToTable = () => {
      setViewMode('table');
    };
  
    const switchToCard = () => {
      setViewMode('card');
    };
    const [selectAllChecked2, setSelectAllChecked2] = useState(false);
    const [individualChecked2, setIndividualChecked2] = useState<boolean[]>([false, false, false, false, false, false, false,false]);
  
    const handleSelectAllChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      setSelectAllChecked2(isChecked);
      setIndividualChecked2(Array(8).fill(isChecked)); // Cập nhật trạng thái của tất cả các checkbox cá nhân
    };
  
    const handleIndividualChange2 = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedState = [...individualChecked2];
      newCheckedState[index] = event.target.checked;
      setIndividualChecked2(newCheckedState);
      setSelectAllChecked2(newCheckedState.every((isChecked) => isChecked)); // Kiểm tra nếu tất cả các checkbox cá nhân đều được chọn
    };

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



  return (
    <div className={`styleuseraa ${viewMode === 'table' ? 'table-view' : 'card-view'}`}>
      <Navbar/>
      <div className='containerinfor'>
      <div>
  <h1 style={{ color: "#ffffff", fontWeight: "bold", fontFamily: "Arial, sans-serif" ,marginTop:"-5px" }}>Kho bản ghi</h1>
</div>


        <div >
          <div  className="wrapeditrecord">
            <div className="searchedit">
              <input type="text" className="searchTermedit" placeholder="Tên hợp đồng,số hợp đồng,người ủy quyền..." />
              <button type="submit" className="searchButton">
              <SearchOutlined />
              </button>
            </div>
            
          </div>
          
        </div>
        <div className='customdrop'>
        <div>
          <div className='theloai'>Thể loại:</div>
          <div className='dropdown0'>
            <select className='dropdowncontent0' name="ownership" id="ownership">
              <option value="all">Tất cả</option>
              <option value="javascript">Tất cả</option>
              <option value="python">Tất cả</option>
              <option value="java" selected>Tất cả</option>
            </select>
          </div>
        </div>
        <div>
          <div className='dinhdang'>Định dạng:</div>
          <div className='dropdownrecordcc'>
            <select className='dropdowncontentrecordcc' name="contractValidity" id="contractValidity">
              <option value="all">Tất cả</option>
              <option value="javascript">Tất cả</option>
              <option value="python">Tất cả</option>
              <option value="java" selected>Tất cả</option>
            </select>
          </div>
        </div>
       
      
        </div>    
        <div>  <div className='StyleSettingatho'>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <CheckOutlined className='custom-icon' style={{color:"#0FBF00"}} />
                        </div>
                      
          <Link className='xemchitietatho' to="/approvalManagement">  <div className='text'>Phê duyệt</div></Link>
                        
                    </div>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <CloseOutlined className='custom-iconx' />
                        </div>
                      
          <Link className='xemchitietatho' to="/approvalManagement">  <div className='text'>Từ chối </div></Link>
                        
                    </div>
                </div>
                </div>
                <div>
                <div className="view-mode-buttons">
        <button onClick={switchToTable} className={viewMode === 'table' ? 'active' : ''}>
          <span className='styleiconapp'><UnorderedListOutlined /></span> 
        </button>
        <button onClick={switchToCard} className={viewMode === 'card' ? 'active' : ''}>
          <span className='styleiconapp'><AppstoreOutlined /></span> 
        </button>
      </div>
        {viewMode === 'table' ? (
          <table className="custom-tabledit">
            {  <div style={{marginTop:"-4%",marginRight:"-11.1%"}}>
            <table className="custom-tableatho">
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
          <th>Ca sĩ</th>
          <th>Tác giả</th>
          <th>Mã ISRC</th>
          <th>Số hợp đồng</th>
          <th>Ngày tải</th>
        
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
        <td> <input
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
        <td> <input
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
        <td> <input
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
        <td> <input
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
        <td> <input
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
        <td> <input
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
        <td> <input
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
        <td>   <input
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
        <td> <input
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
        <td> <input
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
        <td> <input
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
    
        </div>}
          </table>
        ) : (
          <div className="card-container">
            {
                
             <div>
                 <div className='stylecheckboxlist'>
                 <input
          type="checkbox"
          className='stylecheckapp'
          checked={selectAllChecked2}
          onChange={handleSelectAllChange2}
        />
        Chọn tất cả
      </div>
 
  <div className="row">
    <div className="column">
      <div className="card">
     <div>
  <img  src={bai1} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
  

    
    </div>
    <div className='styleiconboxtt'> <input
            className='stylecheckapp'
          type="checkbox"
          checked={individualChecked2[0]}
          onChange={handleIndividualChange2(0)}
        /></div>
  

  </div>
  </div>

      </div>
    </div>
    <div className="column">
      <div className="card">
      <div>
  <img  src={bai2} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'> <input
          type="checkbox"
          className='stylecheckapp'
          checked={individualChecked2[1]}
          onChange={handleIndividualChange2(1)}
        /></div>
  

  </div>
  </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
      <div>
  <img  src={bai3} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'> <input
          type="checkbox"   className='stylecheckapp'
          checked={individualChecked2[2]}
          onChange={handleIndividualChange2(2)}
        /></div>
  

  </div>
  </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
      <div>
  <img  src={bai4} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'>  <input
       className='stylecheckapp'
          type="checkbox"
          checked={individualChecked2[3]}
          onChange={handleIndividualChange2(3)}
        /></div>
  

  </div>
  </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="column">
      <div className="card">
     <div>
  <img  src={bai5} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'>  <input
       className='stylecheckapp'
          type="checkbox"
          checked={individualChecked2[4]}
          onChange={handleIndividualChange2(4)}
        /></div>
  

  </div>
  </div>

      </div>
    </div>
    <div className="column">
      <div className="card">
      <div>
  <img  src={bai6} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'> <input
       className='stylecheckapp'
          type="checkbox"
          checked={individualChecked2[5]}
          onChange={handleIndividualChange2(5)}
        /></div>
  

  </div>
  </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
      <div>
  <img  src={bai7} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'> <input
       className='stylecheckapp'
          type="checkbox"
          checked={individualChecked2[6]}
          onChange={handleIndividualChange2(6)}
        /></div>
  

  </div>
  </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
      <div>
  <img  src={bai8} alt="user" />
  <h4 style={{marginLeft:"-24px " ,color:"#ffff"}} >Handcrafted Fresh Bacon Multy</h4>
  <div className="card-content">
    <p className='thongtin'>Ca sĩ: Bella Poarch</p>
    <p  className='thongtin'>Sáng tác: Leilani Zulauf</p>
    <p  className='thongtin'>Số hợp đồng: HD395738503</p>
    <div style={{display:"flex" }}>
    <div className='boxthongtin1'><span className='texttheloai1'>Thể loại</span  > <span className='textloai1'>Pop</span> </div>
    <div className='boxthongtin2'><span className='texttheloai2'>Định dạng</span  > <span className='textloai2'>Audio</span> </div>
    <div className='boxthongtin3'><span className='texttheloai2'>Thời lượng</span  > <span className='textloai3'>03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'>
    <input
       className='stylecheckapp'
          type="checkbox"
          checked={individualChecked2[7]}
          onChange={handleIndividualChange2(7)}
        /></div>
  

  </div>
  </div>
      </div>
    </div>
  </div>
</div>


}
          </div>
        )}
      </div>

                </div>
       
      </div>
     
    
  );
};

export default ApprovalManagement;
