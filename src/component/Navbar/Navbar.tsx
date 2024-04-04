import logo from "../../asset/logo.jpg";
import { Layout, Menu, Select } from 'antd';
import "./StyleNavbar.scss";
import { Link } from 'react-router-dom';
import { PlaySquareOutlined, UnorderedListOutlined, ScheduleOutlined, FileTextOutlined, FileProtectOutlined, SettingOutlined,QuestionCircleOutlined } from '@ant-design/icons';
import vietnamFlag from "../../asset/vietnam.jpg";
import englishFlag from "../../asset/english.png";
import User from "../../asset/user.jpg";



const { Sider } = Layout;

const Sidebar = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (  
    <div className="stylenavbar">
      <Sider className="sider">
        <div className="stylemobile">
        <div className="logo" />
        <Menu className="custom-dark-menu" style={{ height: "100vh" }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <div> 
            <img className='imglogonavbar' src={logo} alt="Logo" />
          </div>
          <Menu.Item className='key' key="1">
            <Link to="/userInformation">
              <span className='icon'><PlaySquareOutlined /></span>
              <div className='textnavbar'>kho bản ghi</div>
            </Link>
          </Menu.Item>
          <Menu.Item className='key' key="2">
            <Link to="/navbar">
              <span className='icon'><UnorderedListOutlined /></span>
              <div className='textnavbar1'>Playlist</div>
            </Link>
          </Menu.Item>
          <Menu.Item className='key' key="3">
            <Link to="/navbar">
              <span className='icon'><ScheduleOutlined /></span>
              <div className='textnavbar'> Lập lịch phát</div>
            </Link>
          </Menu.Item>
          <Menu.Item className='key' key="4">
            <Link to="/navbar">
              <span className='icon'><FileTextOutlined /></span>
              <div className='textnavbar1'>Quản lý </div>
            </Link>
          </Menu.Item>
          <Menu.Item className='key' key="5">
            <Link to="/navbar">
              <span className='icon'><FileProtectOutlined /></span>
              <div className='textnavbar'>Doanh thu</div>
            </Link>
          </Menu.Item>
          <Menu.Item className='key' key="6">
            <Link to="/navbar">
              <span className='icon'><SettingOutlined /></span>
              <div className='textnavbar1'>Cài đặt</div>
            </Link>
          </Menu.Item>
          <Menu.Item className='key' key="6">
            <Link to="/navbar">
              <span className='icon'><QuestionCircleOutlined /></span>
              <div className='textnavbar1'>Hỗ trợ</div>
            </Link>
          </Menu.Item>
        </Menu>
        </div>
      </Sider>

      <div className="navbar2">
        <div className="langnavbar" style={{ display:"flex" }}>
          <div className="selectlang">
            <Select
              defaultValue="Việt Nam"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'Việt Nam', label: <span><div className="textlang"> Việt Nam</div> <div className="imgstylevn"><img className="imglang" src={vietnamFlag} alt="English Flag" style={{ width: '20px', marginRight: '5px' }} /></div></span> },
                { value: 'English', label: <span > <div className="textlang"> English</div> <div className="imgstyle"><img className="imglang" src={englishFlag} alt="English Flag" style={{ width: '20px', marginRight: '5px' }} /></div></span> },
              ]}
              optionLabelProp="label" // Chỉ định rằng nội dung của mỗi tùy chọn sẽ lấy từ thuộc tính label
            />
          </div>
          <div className="infoUser">
            <div className="userInfo">
            <Link to="/userInformation">
             <img className="imguser" src={User} alt="user" />
                  </Link>
                  <Link to="/userInformation">
                  <h5 className="textuser" style={{ color: "#ffff", marginTop:"-10px" }}>Ng.Tuyết </h5>
                  </Link>
          
              <div className="textadmin"><span>Admin</span></div>
            </div>
          </div>
        </div>
             
      </div>
    </div>
  );
};

export default Sidebar;
