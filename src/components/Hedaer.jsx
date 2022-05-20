import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItem from "@material-ui/core/ListItem";

import List from "@material-ui/core/List";
import { Link, Outlet } from "react-router-dom";

const Hedaer = () => {
    return (
        <div>
             <List>
          <ListItem button>
            <ListItemIcon>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home Page
              </Link>
            </ListItemIcon>
            <ListItemText />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link
                to="/companyDetail"
                style={{ textDecoration: "none", color: "black" }}
              >
                SLife Page
              </Link>
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </List>
        <Outlet/>
        </div>
    );
};

export default Hedaer;