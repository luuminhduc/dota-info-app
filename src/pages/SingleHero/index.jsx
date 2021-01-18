import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const SingleHero = () => {
  const heroReducer = useSelector((state) => state.heroReducer);
  const { selectedHero } = heroReducer;

  const abilityReducer = useSelector((state) => state.abilityReducer);

  const loreReducer = useSelector((state) => state.loreReducer);

  const itemReducer = useSelector((state) => state.itemReducer);

  const { itemList } = itemReducer;

  const [instruction, setInstruction] = useState(null);

  const dispatch = useDispatch();

  const { loreList } = loreReducer;

  const { abilityList } = abilityReducer;

  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;

  useEffect(() => {
    if (selectedHero) {
      const { id } = selectedHero;
      fetchInstruction(id);
    }
  }, [selectedHero, dispatch]);

  const fetchInstruction = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://api.opendota.com/api/heroes/${id}/itemPopularity`,
      });
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        setInstruction(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSkills = () => {
    const imgUrl =
      "https://steamcdn-a.akamaihd.net/apps/dota2/images/abilities/";
    const { name } = selectedHero;
    const abilities = abilityList[name].abilities.filter(
      (el) => el !== "generic_hidden"
    );

    return (
      <div className="d-flex flex_row justify-center skill_imgs align-center">
        {abilities?.map((el, idx) => (
          <img
            className="radius_5 mr_5"
            key={idx}
            src={`${imgUrl}${el}_md.png`}
          />
        ))}
      </div>
    );
  };

  const getBaseStats = () => {
    const {
      base_str,
      base_agi,
      base_int,
      str_gain,
      agi_gain,
      int_gain,
    } = selectedHero;
    return (
      <div className=" base d-flex d-flex-column justify-start align-start mb_5">
        <span className="mb_5">
          Strength: {base_str} + {str_gain}
        </span>
        <span className="mb_5">
          Agility: {base_agi} + {agi_gain}
        </span>
        <span className="mb_5">
          Intelligene: {base_int} + {int_gain}
        </span>
      </div>
    );
  };

  const renderDetails = () => {
    const {
      base_health,
      base_health_regen,
      base_mana,
      base_mana_regen,
      base_armor,
      base_mr,
      base_attack_min,
      base_attack_max,
      attack_range,
      attack_rate,
      move_speed,
      legs,
    } = selectedHero;
    return (
      <div className="shadow_md details">
        <div className="item shadow_sm">
          <p>Health: </p>
          <strong>{base_health}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Health_Regen:</p>
          <strong>{base_health_regen}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Mana: </p>
          <strong>{base_mana}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Mana_regen: </p>
          <strong>{base_mana_regen}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Amor: </p>
          <strong>{base_armor}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Mr: </p>
          <strong>{base_mr}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Attack_min: </p>
          <strong>{base_attack_min}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Attack_max: </p>
          <strong>{base_attack_max}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Attack range: </p>
          <strong>{attack_range}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Attack rate: </p>
          <strong>{attack_rate}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Attack range: </p>
          <strong>{attack_range}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Move speed: </p>
          <strong>{move_speed}</strong>
        </div>
        <div className="item shadow_sm">
          <p>Legs: </p>
          <strong>{legs}</strong>
        </div>
      </div>
    );
  };

  const renderLore = () => {
    const { localized_name } = selectedHero;
    const lore = loreList[localized_name.toLowerCase()];
    return (
      <div className="lore shadow_md">
        <p>{lore}</p>
      </div>
    );
  };

  const renderInstruction = () => {
    let keys = Object.keys(instruction);
    const values = Object.values(instruction);
    keys = keys.map((key, idx) => ({ stage: key, item: values[idx] }));
    return itemList && instruction ? (
      <div className="shadow_md lore">
        {keys?.map((item, idx) => (
          <div className="item" key={idx}>
            <h2>{item.stage}</h2>
            {renderStageItems(item.item)}
          </div>
        ))}
      </div>
    ) : (
      ""
    );
  };

  const renderStageItems = (items) => {
    const itemArr = Object.keys(items).map((el) =>
      itemList.find((e) => +e.id === +el)
    );
    return (
      <div className="group">
        {itemArr?.map((el, idx) => (
          <div className="group_item" key={idx}>
            <img src={`https://api.opendota.com${el.img}`} alt="" />
            <small>{el.dname}</small>
            <small>{el.cost}</small>
          </div>
        ))}
      </div>
    );
  };

  return selectedHero && abilityList && loreList ? (
    <div className={`singleHero page ${!isLight ? "dark" : ""}`}>
      <div className="container_lg">
        <div className="d-flex shadow_md d-flex-row info justify-between align-center">
          <div className="d-flex d-flex-row  justify-center align-center">
            <img
              className="mr_5 radius_5"
              src={`https://api.opendota.com${selectedHero.img}`}
              alt=""
            />
            <div className="d-flex d-flex-column justify-start align-start skills">
              <h1>{selectedHero.localized_name}</h1>
              <p>
                <span className="strong">{selectedHero.attack_type} - </span>
                {selectedHero.roles?.map((el, idx) => (
                  <span key={idx}>{`${el}, `} </span>
                ))}
              </p>
            </div>
          </div>
          <div className="d-flex d-flex-column justify-start align-start">
            {getBaseStats()}
            {getSkills()}
          </div>
        </div>
        {renderDetails()}
        {renderLore()}
        {instruction ? renderInstruction() : ""}
      </div>
    </div>
  ) : (
    <div className={`singleHero page ${!isLight ? "dark" : ""}`}>
      <div className="container_md">
        <p>No hero is found</p>
      </div>
    </div>
  );
};

export default SingleHero;
