import { Brightness2, WbSunny } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { switchLight } from "../../redux/action/CommonAction/actions";

const Header = () => {
  const commonReducer = useSelector((state) => state.commonReducer);

  const { isLight } = commonReducer;

  const dispatch = useDispatch();

  return (
    <div className={`header shadow_sm ${!isLight ? "dark" : ""}`}>
      <h1>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </h1>
      <nav>
        <NavLink className="link" to="/heros">
          Heros
        </NavLink>
        <NavLink className="link" to="/items">
          Items
        </NavLink>
      </nav>
      <div className="header-actions">
        <span onClick={() => dispatch(switchLight())} className="toggle-icon">
          {isLight ? <Brightness2 /> : <WbSunny />}
        </span>
      </div>
    </div>
  );
};

export default Header;
