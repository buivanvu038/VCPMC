import React from 'react';
import Login from './pages/Login/login'; // Ensure proper casing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForGotpass from './pages/forGotPass/forGotpass';
import PasswordRecovery from './pages/passwordRecovery/passwordRecovery';
import ResetPassword from './pages/resetPassword/resetPassword';
import Navbar from '../component/Navbar/Navbar';
import UserInformation from './pages/userinformation/UserInformation';
import Disconnect from './pages/disconnect/Disconnect';
import ContractList from './pages/ContractList/ContractList';
import Detail from './pages/Detail/Detail';
import Athority from './pages/Athority/Athority';
import Editwork from './pages/Editwork/Editwork';
import ContractEditing from './pages/ContractEditing/ContractEditing';
import AddContract from './pages/AddContract/AddContract';
import RecordStore from './pages/RecordStore/RecordStore';
import UpdateInfor from './pages/UpdateInfor/UpdateInfor';
import ApprovalManagement from './pages/ApprovalManagement/ApprovalManagement';
import Playlist from './pages/Playlist/Playlist';
import PlaylistDetails from './pages/PlaylistDetails/PlaylistDetails';



const DefaultLayout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Use PascalCase for component names */}
          <Route path="/Login" element={<Login />} /> {/* Use PascalCase for component names */}
          <Route path="/ForGotpass" element={<ForGotpass />} />
          <Route path="/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="/disconnect" element={<Disconnect />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/userInformation" element={<UserInformation />} />
          <Route path="/contractList" element={<ContractList />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/athority" element={<Athority />} />
          <Route path="/editwork" element={<Editwork />} />
          <Route path="/contractEditing" element={<ContractEditing />} />
          <Route path="/addContract" element={<AddContract />} />
          <Route path="/recordStore" element={<RecordStore />} />
          <Route path="/updateInfor" element={<UpdateInfor />} />
          <Route path='/approvalManagement' element={<ApprovalManagement/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/playlistDetails' element={<PlaylistDetails/>}/>



        </Routes>
      </div>
    </Router>
  );
};

export default DefaultLayout;
