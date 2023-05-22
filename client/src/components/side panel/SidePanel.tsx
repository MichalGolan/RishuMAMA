import './SidePanel.css';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FiltersMenu from './FiltersMenu';

function SidePanel(props: any) {
    const { collapsed, collapseSidebar, rtl } = useProSidebar();

    return (
    <div id="sidePanel" style={({ display: "flex", flexDirection: "row-reverse"})}>
        <Sidebar rtl={true} width="400px"  style={{ height: "100vh"}}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>RishuMAMA</h2>
          </MenuItem>
            {collapsed ? <p></p> : <FiltersMenu />}
        </Menu>
      </Sidebar>
    </div>
    );
  }
  
  export default SidePanel;