import { useEffect, useState } from "react";
function Card({ link, fnID, setActive }) {
  const { data } = useFetch(link);

  const handleClick = () => {
    fnID(data?.id);
    setActive(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={data?.sprites.front_default} alt="" />
    </div>
  );
}

export default Card;