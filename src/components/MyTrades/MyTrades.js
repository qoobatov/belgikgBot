import React from "react";
import "./MyTrades.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function MyTrades() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [showNewOrder, setshowNewOrder] = useState(false);

  const handleClick = () => {
    setshowTradeList(true);
    navigate("/tradelist");
  };
  const handleClickNewOrder = () => {
    setshowNewOrder(true);
    navigate("/neworder");
  };

  return (
    <div className="my-trades-container">
      <div className="my-trades-content">
        <h3>Сделки или оформить заказ:</h3>
        <p className="my-trades-description">
          Если у вас нету текущих сделок, вы можете оформить заказ
        </p>
        <div className="my-trades-content-btns">
          <Button
            type="primary"
            htmlType="submit"
            className="btn-mytrades"
            onClick={handleClick}
          >
            Мои заказы
          </Button>
          <Button
            type="primary"
            onClick={handleClickNewOrder}
          >
            Оформить заказ
          </Button>
        </div>
        <Button type="primary" className="btn-trade-list-text-to-employee">
        Шоппинг тур
      </Button>
        {showTradeList && navigate("/tradelist")}
        {showNewOrder && navigate("/neworder")}
      </div>
      
    </div>
  );
}

export default MyTrades;
