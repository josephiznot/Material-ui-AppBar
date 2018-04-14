import React from "react";

import AppBar from "material-ui/AppBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function LandingPage() {
  return (
    <div>
      <AppBar
        showMenuIconButton={false}
        iconElementRight={<HamburgerMenu />}
        style={{ background: "#3c8dbc", marginRight: 10 }}
        zDepth={1}
      />
    </div>
  );
}
