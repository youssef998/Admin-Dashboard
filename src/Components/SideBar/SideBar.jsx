import "./SideBar.css";
function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <div className="sideBarTitle">
            DashBoard
            <ul className="sideBarList">
              <li className="sideBarListItem active">Home</li>
              <li className="sideBarListItem">Sales</li>
              <li className="sideBarListItem">Trending</li>
            </ul>
          </div>
        </div>
        <div className="sideBarMenu">
          <div className="sideBarTitle">
            Quick Menu
            <ul className="sideBarList">
              <li className="sideBarListItem">Users</li>
              <li className="sideBarListItem">Products</li>
              <li className="sideBarListItem">Transactions</li>
              <li className="sideBarListItem">Reports</li>
            </ul>
          </div>
        </div>
        <div className="sideBarMenu">
          <div className="sideBarTitle">
            Notifications
            <ul className="sideBarList">
              <li className="sideBarListItem ">Mail</li>
              <li className="sideBarListItem">Feedback</li>
              <li className="sideBarListItem">Messages</li>
            </ul>
          </div>
        </div>
        <div className="sideBarMenu">
          <div className="sideBarTitle">
            Staff
            <ul className="sideBarList">
              <li className="sideBarListItem">Manage</li>
              <li className="sideBarListItem">Analytics</li>
              <li className="sideBarListItem">Reports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
