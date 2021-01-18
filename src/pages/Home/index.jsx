import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner";
import { fetchAllAbilities } from "../../redux/action/abilityAction/actions";
import { fetchAllLores } from "../../redux/action/loreAction/actions";

const Home = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAbilities());
    dispatch(fetchAllLores());
  }, [dispatch]);

  return (
    <div className={`home page ${!isLight ? "dark" : ""}`}>
      <Banner />
    </div>
  );
};

export default Home;
