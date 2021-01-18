import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectHero } from "../../redux/action/heroAction/actions";

const HeroItem = ({ hero }) => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;
  const dispatch = useDispatch();
  return hero ? (
    <div className={`shadow_sm item ${!isLight ? "dark" : ""}`}>
      <img src={`https://api.opendota.com${hero.img}`} alt="" />
      <h4>{hero.localized_name}</h4>
      <NavLink
        onClick={() => dispatch(selectHero(hero))}
        className="link btn_md btn_blue shadow_sm"
        to={`/heros/${hero.localized_name}`}
      >
        Detail
      </NavLink>
    </div>
  ) : (
    ""
  );
};

export default HeroItem;
