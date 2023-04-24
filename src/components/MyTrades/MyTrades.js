import React from "react";
import "./MyTrades.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function MyTrades() {

  const navigate = useNavigate()
  const [showTradeList, setshowTradeList] = useState(false); 

  const handleClick = () => {
    setshowTradeList(true)
      navigate('/tradelist')
};


  return (
    <div className="my-trades-container">
      <div className="my-trades-content">
        <h3>Сделки или оформить заказ:</h3>
        <p className="my-trades-description">Если у вас нету текущих сделок, вы можете оформить заказ</p>

        <Button type="primary" htmlType="submit" className="btn-mytrades" onClick={handleClick}>
          Мои сделки
        </Button>
        <Button type="primary" htmlType="submit">
          Оформить заказ
        </Button>
        {showTradeList && navigate('/tradelist')}
      </div>
    </div>
  );
}

export default MyTrades;
