
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="" 
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2356 7879</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. New York</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>

          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single;