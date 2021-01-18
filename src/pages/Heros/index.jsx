import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterHero from "../../components/FilterHero";
import HeroList from "../../components/HeroList";
import SearchHero from "../../components/SearchHero";
import { fetchAllHeros } from "../../redux/action/heroAction/actions";

const Heros = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;

  const dispatch = useDispatch();

  useSelector(() => {
    dispatch(fetchAllHeros());
  }, [dispatch]);

  return (
    <div className={`heros page ${!isLight ? "dark" : ""}`}>
      <div className="container_lg">
        <div className="page_actions">
          <SearchHero />
          <FilterHero />
        </div>
        <HeroList />
      </div>
    </div>
  );
};

export default Heros;
