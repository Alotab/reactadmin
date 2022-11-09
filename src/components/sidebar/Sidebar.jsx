import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">LamaAdmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonOutlinedIcon className="icon" />
                    <span>Users</span>
                </li>
                <li>
                    <ProductionQuantityLimitsOutlinedIcon className="icon" />
                    <span>Products</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <RedeemOutlinedIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <InsertChartIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <CircleNotificationsOutlinedIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>

        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    
    
    </div>
  )
}

export default Sidebar;
