import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Button, List, ListItem, ListItemText } from "@material-ui/core";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Nav = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary='Would You Rather?' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Create New Poll' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Scoreboard' />
        </ListItem>
        <ListItem>
          <ListItemText primary='My Stats' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button color='secondary' variant='contained' onClick={toggleDrawer("left", true)}>Menu</Button>
      <Drawer
        anchor='left'
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Nav;
