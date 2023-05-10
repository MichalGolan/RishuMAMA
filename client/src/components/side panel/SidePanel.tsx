import React, { useState } from 'react';
import './SidePanel.css';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
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