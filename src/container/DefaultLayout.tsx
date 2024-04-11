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
import EditPlaylist from './pages/EditPlaylist/EditPlaylist';
import AddNewPlaylist from './pages/AddNewPlaylist/AddNewPlaylist';
import AddToPlaylist from './pages/AddToPlaylist/AddToPlaylist';
import ScheduleList from './pages/ScheduleList/ScheduleList';
import AddRecord from './pages/AddRecord/AddRecord';
import DetailedSchedule from './pages/DetailedSchedule/DetailedSchedule';
import EditBroadcastSchedule from './pages/EditBroadcastSchedule/EditBroadcastSchedule';



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
          <Route path='/editPlaylist' element={<EditPlaylist/>}/>
          <Route path='/addNewPlaylist' element={<AddNewPlaylist/>}/>
          <Route path='/addToPlaylist' element={<AddToPlaylist/>}/>
          <Route path='/addRecord' element={<AddRecord/>}/>
          <Route path='/scheduleList' element={<ScheduleList/>}/>
          <Route path='/detailedSchedule' element={<DetailedSchedule/>}/>
          <Route path='/editBroadcastSchedule' element={<EditBroadcastSchedule/>}/>


        </Routes>
      </div>
    </Router>
  );
};

export default DefaultLayout;
