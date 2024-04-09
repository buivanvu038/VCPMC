import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import {  SearchOutlined,AppstoreOutlined,UnorderedListOutlined} from '@ant-design/icons';
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




import "./StyleRecordStore.scss"; // Make sure the correct path is provided


const RecordStore = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
  };
  const [viewMode, setViewMode] = useState('table');

  const switchToTable = () => {
    setViewMode('table');
  };

  const switchToCard = () => {
    setViewMode('card');
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
        <div>
          <div className='thoihan'>Thời hạn sử dụng:</div>
          <div className='dropdownrecord'>
            <select className='dropdowncontentrecord' name="contractValidity" id="contractValidity">
              <option value="all">Tất cả</option>
              <option value="javascript">Tất cả</option>
              <option value="python">Tất cả</option>
              <option value="java" selected>Tất cả</option>
            </select>
          </div>
        </div>
        <div>
          <div className='trangthai'>Trạng thái:</div>
          <div className='dropdownrecord1'>
            <select className='dropdowncontentrecord1' name="contractValidity" id="contractValidity">
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
                             <FormOutlined className='custom-icon' />
                        </div>
                      
          <Link className='xemchitietatho' to="/approvalManagement">  <div className='text'>Quản lý phê duyệt</div></Link>
                        
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
            {  <div style={{marginTop:"-7%",marginRight:"-11.1%"}}>
        <table  className="custom-tabledit">
      <thead style={{color:"#FFAC69"}}>
        <tr>
        
          <th>STT</th>
          <th>Tên bản ghi</th>
          <th>Mã ISRC</th>
          <th>Thời lượng</th>
          <th>Ca sĩ</th>
          <th>Tác giả</th>
          <th>Thể loại</th>
          <th>Dịnh dạng </th>
          <th>Thời hạn sử dụng </th>
          <th> </th>


          



        </tr>
      </thead>
      <tbody className='bodytablerecord'>
        <tr>
          <td>1</td>
          <td>Mất em</td>
          <td>KRA40105463</td>
          <td>04:27</td>
          <td>Phan Mạnh Quỳnh</td>
          <td>Phan Mạnh Quỳnh</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>02/10/2019</span></td>

          <td >
          <Link className='xemchitiet' to="/updateInfor">Cập nhật</Link>
          </td>
          <td >
          <Link className='xemchitiet' to="/Detail">Nghe</Link>
          </td>
        </tr>
        
        <tr className="table-dividerr">
       
  <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>


        <tr> 
        <td>2</td>
        <td>Ergonomic Fresh Chips</td>
          <td>KRA40105519</td>
          <td>16:18</td>
          <td>Chillies</td>
          <td>Chillies</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>07/05/2019</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>

        <tr>
       


        <td>3</td>
        <td>Awesome Metal Salad</td>
          <td>KRA40106918</td>
          <td>56:21</td>
          <td>Đen Vâu</td>
          <td>Đen Vâu</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>24/11/2021</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        
        <tr>
      
        <td>4</td>

        <td>Handcrafted Granite </td>
          <td>KRA40105953</td>
          <td>05:02</td>
          <td>Vũ Cát Tường</td>
          <td>Vũ Trọng Phụng</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /><span>25/11/2021</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
   

        <td>5</td>
        <td>Sleek Granite Ball</td>
          <td>KRA4010501</td>
          <td>02:21</td>
          <td>Min</td>
          <td>Min</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>05/11/2022</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
        

        <td>6</td>
        <td>Generic Granite Bike</td>
          <td>KRA40102799</td>
          <td>05:01</td>
          <td>GDragon</td>
          <td>GDragon</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>15/09/2021</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
       

        <td>7</td>
        <td>Awesome Wooden Soap</td>
          <td>KRA40107386</td>
          <td>03:00</td>
          <td>Lisa</td>
          <td>Lisa</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>07/10/2022</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
      

          <td>8</td>
          <td>Fantastic Wooden Table</td>
          <td>KRA40109480</td>
          <td>04:00</td>
          <td>Lil Knight</td>
          <td>LK</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Còn thời hạn <br /> <span>07/06/2023</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
        
        <td>9</td>
        <td>Build a b*tch</td>
          <td>KRA40102234</td>
          <td>02:32</td>
          <td>Bella Poarch</td>
          <td>Bella Poarch</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Đã hết hạn <br /> <span>07/10/2019</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
       
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
    

        <td>10</td>
        <td>Lyly</td>
          <td>KRA40135546</td>
          <td>05:01</td>
          <td>Alan Walker</td>
          <td>Bruno Mars</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Đã hết hạn <br /> <span>07/10/2019</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
      
           <tr className="table-dividerr">
       
  <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
        <tr>
   
        <td>11</td>
        <td>Talking to the moon </td>
          <td>KRA46463841</td>
          <td>03:31</td>
          <td>Bruno Mars</td>
          <td>Nguyên Hà</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Đã hết hạn <br /> <span>07/11/2019</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
          <td className='xemchitiet'>Nghe</td>
        </tr>
          
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
      



        <td>12</td>
        <td>Old town road</td>
          <td>KRA40173849</td>
          <td>05:12</td>
          <td>Nguyên Hà</td>
          <td>Phan Mạnh Quỳnh</td>
          <td>Ballad</td>
          <td>Audio</td>
          <td>Đã hết hạn <br /><span>07/03/2019</span></td>
          <td >
          <Link className='xemchitiet' to="#">Cập nhật</Link>
          </td>
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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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
    <div className='styleiconboxtt'><FormOutlined /></div>
  

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

export default RecordStore;
