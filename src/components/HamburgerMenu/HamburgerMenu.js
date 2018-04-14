import React, { Component } from "react";

import { IconButton } from "material-ui";
import Popover, { PopoverAnimationVertical } from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

class HamburgerMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.styles = {
      addSpace: {
        marginRight: "10px"
      },
      fullWidth: {
        textAlign: "right",
        width: "100vw"
      }
    };
  }
  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      //flag
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const { fullWidth, addSpace } = this.styles;
    return (
      <div>
        <IconButton onClick={this.handleClick}>
          {/*this is the actual hamburger menu*/}
          <svg
            fill="#FFF"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
          onRequestClose={() => this.handleRequestClose()}
          animation={PopoverAnimationVertical}
        >
          <Menu style={fullWidth}>
            <MenuItem style={addSpace} primaryText="Menu item 1" />
            <MenuItem style={addSpace} primaryText="Menu item 2" />
            <MenuItem style={addSpace} primaryText="Menu item 3" />
            <MenuItem style={addSpace} primaryText="Menu item 4" />
            <MenuItem style={addSpace} primaryText="Menu item 5" />
            <MenuItem style={addSpace} primaryText="Menu item 6" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
export default HamburgerMenu;
