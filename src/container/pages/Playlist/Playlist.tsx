import React, { useState } from 'react';
import Navbar from "../../../component/Navbar/Navbar";
import {  SearchOutlined,AppstoreOutlined,UnorderedListOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
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
import "./StylePlaylist.scss"; // Make sure the correct path is provided


const Playlist = () => {
  
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
     
        <div>  <div className='StyleSettingatho'>
                    <div className='styleSetatho'>
                        <div className='styleiconatho'>
                             <FormOutlined className='custom-icon' />
                        </div>
                      
          <Link className='xemchitietatho' to="/addNewPlaylist">  <div className='text'>Thêm <br /> Playlist</div></Link>
                        
                    </div>
                </div>
                </div>
                <div>
                <div  style={{marginTop:"20px"}} className="view-mode-buttons">
        <button onClick={switchToTable} className={viewMode === 'table' ? 'active' : ''}>
          <span className='styleiconapp'><UnorderedListOutlined /></span> 
        </button>
        <button onClick={switchToCard} className={viewMode === 'card' ? 'active' : ''}>
          <span className='styleiconapp'><AppstoreOutlined /></span> 
        </button>
      </div>
        {viewMode === 'table' ? (
          <table className="custom-tabledit">
           {  <div style={{marginTop:"-4%",marginRight:"-1%", marginBottom:"20px"}}>
        <table  className="custom-tabledit">
      <thead style={{color:"#FFAC69"}}>
        <tr>
          <th>STT</th>
          <th>Tiêu đề</th>
          <th>Bản ghi</th>
          <th>Thời lượng</th>
          <th>Chủ đề</th>
          <th>Ngày tạo</th>
          <th>Người tạo</th>
          <th> </th>
        </tr>
      </thead>
      <tbody className='bodytablerecord'>
        <tr>
          <td>1</td>
          <td>Top ca khúc 2021</td>
          <td>20</td>
          <td>01:04:27</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>
          <div className='chude'>...</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Cindy Cường</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        
        <tr className="table-dividerr">
       
  <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>2</td>
          <td>Top USUK 2020</td>
          <td>10</td>
          <td>01:16:18</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Grady Phùng</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        <tr>
          <td>3</td>
          <td>Top EDM</td>
          <td>30</td>
          <td>56:21</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Viola Khang</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
        
     <tr>
          <td>4</td>
          <td>Top USUK</td>
          <td>30</td>
          <td>02:05:02</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Rene Hiền</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>5</td>
          <td>Top Korea 2021</td>
          <td>10</td>
          <td>01:05:01</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Yvette Đỗ</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>6</td>
          <td>Top Vpop 2021</td>
          <td>12</td>
          <td>01:05:017</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Cedric Hoàng</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>7</td>
          <td>Top nhạc Hoa lời Việt</td>
          <td>43</td>
          <td>01:03:00</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Noel Dung</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>8</td>
          <td>Top play 2020</td>
          <td>23</td>
          <td>01:04:00</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Adrienne Nhung</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-divider">

        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>9</td>
          <td>Top nhạc Hoa lời Việt 2020</td>
          <td>20</td>
          <td>01:02:32</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Adrienne Lư</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>10</td>
          <td>Ai rồi cũng phải dolce thôi</td>
          <td>35</td>
          <td>01:05:01</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Yvette Hồ</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
      
           <tr className="table-dividerr">
       
  <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
</tr>
<tr>
          <td>11</td>
          <td>Talking to the moon</td>
          <td>14</td>
          <td>01:05:12</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Nicolas Huỳnh</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
        </tr>
          
        <tr className="table-dividerr">
       
       <td colSpan={11}></td> {/* Sử dụng kiểu số cho colSpan */}
     </tr>
     <tr>
          <td>1</td>
          <td>Top ca khúc 2021</td>
          <td>20</td>
          <td>01:04:27</td>
          <td><div className='stylechude'>
          <div className='chude'>Pop</div>
          <div className='chude'>Chill</div>
          <div className='chude'>Dingga</div>
          <div className='chude'>Songs</div>
          <div className='chude'>lofi</div>
        


          
          </div> </td>
          <td>22/10/2020</td>
          <td>Cindy Cường</td>
          <td >
          <Link className='xemchitiet' to="/playlistDetails">Chi tiết</Link>
          </td>
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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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
    <p className=''> <div className='stylechudecard'>
          <div className='chudecard'>Chủ đề ví dụ </div>
          <div className='chudecard'>Pop</div>
          <div className='chudecard'>Trending</div>
          <div className='chudecard'>Good</div>
        


          
          </div></p>
    <p  className='thongtincard'>Người tạo: Admin</p>
    <p  className='thongtincard'>Ngày tạo: 12/12/2020</p>
    <div style={{display:"flex" }}>
    <div className='chudecard'><span className='texttheloai1'>Số bản ghi</span  > <br /> <span className='textloai1'>20</span> </div>
    <div className='chudecard'><span className='texttheloai2'>Thời lượng </span  > <br /> <span className='textloai2'>1:03:00</span> </div>
    
    </div>
    <div className='styleiconboxtt'><ExclamationCircleOutlined /></div>
  

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

export default Playlist;
