import React, { useState } from 'react';

interface Record {
  id: number;
  name: string;
  singer: string;
  author: string;
}

const RecordsPerPage = 5; // Số bản ghi hiển thị trên mỗi trang

const RecordTable: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newRecord, setNewRecord] = useState<Record>({ id: 0, name: '', singer: '', author: '' });
  const [otherTableRecords, setOtherTableRecords] = useState<Record[]>([]);

  // Tính toán số trang dựa trên số lượng bản ghi và số bản ghi trên mỗi trang
  const totalPages = Math.ceil(records.length / RecordsPerPage);

  // Lấy danh sách bản ghi cho trang hiện tại
  const getCurrentPageRecords = () => {
    const startIndex = (currentPage - 1) * RecordsPerPage;
    const endIndex = startIndex + RecordsPerPage;
    return records.slice(startIndex, endIndex);
  };

  // Xử lý khi người dùng thay đổi giá trị của input thêm bản ghi
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Record) => {
    setNewRecord({ ...newRecord, [field]: e.target.value });
  };

  // Xử lý khi người dùng thêm bản ghi mới
  const handleAddRecord = () => {
    const updatedRecords = [...records, { ...newRecord, id: records.length + 1 }];
    setRecords(updatedRecords);
    setNewRecord({ id: 0, name: '', singer: '', author: '' });
  };

  // Xử lý khi người dùng chọn trang
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Xử lý khi người dùng nhấp vào nút "Thêm" để chuyển bản ghi sang bảng khác
  const handleAddToOtherTable = (record: Record) => {
    setOtherTableRecords([...otherTableRecords, record]);
  };

  return (
    <div>
      <div style={{ float: 'left' }}>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên bản ghi</th>
              <th>Ca sĩ</th>
              <th>Tác giả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageRecords().map((record, index) => (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.singer}</td>
                <td>{record.author}</td>
                <td>
                  <button onClick={() => handleAddToOtherTable(record)}>Thêm</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ float: 'right' }}>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên bản ghi</th>
              <th>Ca sĩ</th>
              <th>Tác giả</th>
            </tr>
          </thead>
          <tbody>
            {otherTableRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.singer}</td>
                <td>{record.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ clear: 'both' }}>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
          ))}
        </div>
        <div>
          <input type="text" value={newRecord.name} onChange={(e) => handleInputChange(e, 'name')} placeholder="Tên bản ghi" />
          <input type="text" value={newRecord.singer} onChange={(e) => handleInputChange(e, 'singer')} placeholder="Ca sĩ" />
          <input type="text" value={newRecord.author} onChange={(e) => handleInputChange(e, 'author')} placeholder="Tác giả" />
          <button onClick={handleAddRecord}>Thêm bản ghi</button>
        </div>
      </div>
    </div>
  );
};

export default RecordTable;
