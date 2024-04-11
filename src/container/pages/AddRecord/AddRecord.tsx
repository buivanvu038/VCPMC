import React, { useState } from 'react';
import { SearchOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./StyleAddRecord.scss"; // Đảm bảo đường dẫn đúng được cung cấp
import Navbar from "../../../component/Navbar/Navbar";


interface Record {
  id: number;
  name: string;
  singer: string;
  author: string;
}

const initialRecords: Record[] = [
  { id: 1, name: 'Record 1', singer: 'Singer 1', author: 'Author 1' },
  { id: 2, name: 'Record 2', singer: 'Singer 2', author: 'Author 2' },
  { id: 3, name: 'Record 3', singer: 'Singer 3', author: 'Author 3' },
  { id: 4, name: 'Record 4', singer: 'Singer 4', author: 'Author 4' },
  { id: 5, name: 'Record 5', singer: 'Singer 5', author: 'Author 5' }
];


const RecordsPerPage = 5; // Số bản ghi hiển thị trên mỗi trang

const AddRecord: React.FC = () => {
  const [newRecord, setNewRecord] = useState<Record>({ id: 0, name: '', singer: '', author: '' });
  const [records, setRecords] = useState<Record[]>(initialRecords);
  const [currentPage, setCurrentPage] = useState(1);
  const [otherTableRecords, setOtherTableRecords] = useState<Record[]>([]);
  const [otherTableCount, setOtherTableCount] = useState(0); // Biến đếm số thứ tự bảng khác
  const handleAddRecord = () => {
    const updatedRecords = [...records, { ...newRecord, id: records.length + 1 }];
    setRecords(updatedRecords);
    setNewRecord({ id: 0, name: '', singer: '', author: '' });
  };
  // Xử lý khi người dùng nhấp vào nút "Thêm" để chuyển bản ghi sang bảng khác
  const handleAddToOtherTable = (record: Record) => {
    const newRecord = { ...record, id: otherTableCount + 1 }; // Tăng biến đếm số thứ tự bảng khác
    setOtherTableCount(otherTableCount + 1);
    setOtherTableRecords([...otherTableRecords, newRecord]);
  };

  // Xử lý khi người dùng nhấp vào nút "Gỡ" để xóa bản ghi khỏi danh sách
  const handleRemoveFromOtherTable = (recordToRemove: Record) => {
    const updatedRecords = otherTableRecords.filter(record => record !== recordToRemove);
    setOtherTableRecords(updatedRecords);
  };

  return (
    <div className='styleuseraa'>
      <Navbar />
      <div className='containerinfor'>
        <div className='direct'>
          <p className='text'>
            quản lý <span className='iconright'><RightOutlined /></span> Quản lý hợp đồng <span className='iconright'><RightOutlined /></span> chi tiết
          </p>
        </div>
        <h1 className='text'>Danh sách hợp đồng</h1>
      </div>

      <div className='contaitableaddto'>
        <div className='col-6 styletable1'>
          <div className='table1'>
            <h3 className='text'>Kho bản ghi</h3>
            <div>
              <div>
                <div className='quyensohuuaddto'>Thể loại:</div>
                <div className='dropdownaddto'>
                  <select className='dropdowncontentaddto' name="ownership" id="ownership">
                    <option value="all">Tất cả</option>
                    <option value="javascript">Tất cả</option>
                    <option value="python">Tất cả</option>
                    <option value="java" selected>Tất cả</option>
                  </select>
                </div>
              </div>
              <div className='styledropdown1'>
                <div className='quyensohuuaddto1'>PlayList mẫu:</div>
                <div className='dropdownaddto1'>
                  <select className='dropdowncontentaddto1' name="ownership" id="ownership">
                    <option value="all">Tất cả</option>
                    <option value="javascript">Tất cả</option>
                    <option value="python">Tất cả</option>
                    <option value="java" selected>Tất cả</option>
                  </select>
                </div>
              </div>
              <div style={{marginTop:"10%"}} className="wrapeditaddto">
                <div className="searchedit">
                  <input type="text" className="searchTermedit" placeholder="Tên bản ghi, ca sĩ..." />
                  <button type="submit" className="searchButtonaddto">
                    <SearchOutlined />
                  </button> 
                </div>
                <div>
                  <table className='custom-tableplaylistaddto'>
                    <thead className='colortital'>
                      <tr className='styletheadaddto'>
                        <th>STT</th>
                        <th>Tên bản ghi</th>
                        <th>Ca sĩ</th>
                        <th>Tác giả</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className='bodytable'>
                      {records.map((record, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td>{record.id}</td>
                            <td>{record.name}</td>
                            <td>{record.singer}</td>
                            <td>{record.author}</td>
                            <td>
                              <Link onClick={() => handleAddToOtherTable(record)} className='xemchitiet' to="/Detail">Nghe</Link>
                            </td>
                            <td>
                              <div   onClick={() => handleAddToOtherTable(record)} className='xemchitiet' >Thêm</div>
                            </td>
                          </tr>
                          <tr className="table-divideraddto">
                            <td colSpan={8}></td> {/* Sử dụng kiểu số cho colSpan */}
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 styletable2'>
          <div className='table2'>
            <h3 className='text2'>Danh sách bản ghi được thêm vào Playlist</h3>
            <div className='style2addto'>
              <div className='tong1'>Tổng số: <span className='styletongso'>{otherTableRecords.length} bản ghi</span> </div>
              <div className='tong2'>Tổng thời lượng: <span className='styletongso'>00:03:12</span> </div>
            </div>
            <div>
              <div className="wrapaddto">
                <div className="searchaddto">
                  <input type="text" className="searchTermaddto" placeholder="Tên bản ghi, ca sĩ..." />
                  <button type="submit" className="searchButtonaddto">
                    <SearchOutlined />
                  </button>
                </div>
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <table className='custom-tableplaylistaddto1'>
                <thead className='colortital1'>
                  <tr className='styletheadaddto1'>
                    <th>STT</th>
                    <th>Tên bản ghi</th>
                    <th>Ca sĩ</th>
                    <th>Tác giả</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='bodytable'>
                  {otherTableRecords.map((record, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{record.id}</td>
                        <td>{record.name}</td>
                        <td>{record.singer}</td>
                        <td>{record.author}</td>
                        <td>
                          <Link onClick={() => handleAddToOtherTable(record)} className='xemchitiet' to="/Detail">Nghe</Link>
                        </td>
                        <td>
                          <div onClick={() => handleRemoveFromOtherTable(record)} className='xemchitiet'>Gỡ</div>
                        </td>
                      </tr>
                      <tr>
                        <hr style={{width:"800%"}} ></hr> {/* Sử dụng kiểu số cho colSpan */}
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"2%", marginLeft:"46%"}} className='stylebtnadd'>
        <button className='btnedit1add'> Hủy </button>
        <button  className='btneditadd'>Lưu</button>

      </div>
    </div>
  );
};

export default AddRecord;
