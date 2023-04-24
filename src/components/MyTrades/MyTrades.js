import React from "react";
import "./MyTrades.css";
import { Button } from "antd";

function MyTrades() {
  return (
    <div className="my-trades-container">
      <div>
        <h3>Сделки или оформить заказ:</h3>
        <p>Если у вас нету текущих сделок, вы можете оформить заказ</p>

        <Button type="primary" htmlType="submit" className="btn-mytrades">
          Мои сделки
        </Button>
        <Button type="primary" htmlType="submit">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default MyTrades;
