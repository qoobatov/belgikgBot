import React from "react";
import "./TradeList.css";
import { Button } from "antd";

function TradesList() {
  return (
    <div className="trade-list-container">
      <div className="trade-list-content">
        <h3>Ваши сделки:</h3>
        <div className="trade-more-info">
          <span>Сделка#</span>
          <Button type="primary" htmlType="submit" className="btn-trade-list">
            подробнее
          </Button>
        </div>
        <div className="trade-more-info">
          <span>Сделка#</span>
          <Button type="primary" htmlType="submit" className="btn-trade-list">
            подробнее
          </Button>
        </div>
        <div className="trade-more-info">
          <span>Сделка#</span>
          <Button type="primary" htmlType="submit" className="btn-trade-list">
            подробнее
          </Button>
        </div>
        <div className="trade-more-info">
          <span>Сделка#</span>
          <Button type="primary" htmlType="submit" className="btn-trade-list">
            подробнее
          </Button>
        </div>
        <div className="trade-more-info">
          <span>Сделка#</span>
          <Button type="primary" htmlType="submit" className="btn-trade-list">
            подробнее
          </Button>
        </div>
      <Button type="primary" htmlType="submit" className="btn-trade-list">
        назад
      </Button>
      </div>
    </div>
  );
}

export default TradesList;
