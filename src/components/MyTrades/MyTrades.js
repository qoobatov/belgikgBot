import React from "react";
import "./MyTrades.css";
import { Button } from "antd";

function MyTrades() {
  return (
    <div className="my-trades-container">
      <div>
        <Button type="primary" htmlType="submit" className="btn-mytrades">
          Мои сделки
        </Button>
        <Button type="primary" htmlType="submit">
          Мои сделки
        </Button>
      </div>
    </div>
  );
}

export default MyTrades;
