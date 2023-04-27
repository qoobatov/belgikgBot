import React from "react";
import "./TradeList.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function TradesList() {

    const navigate = useNavigate()
    const [showTradeList, setshowTradeList] = useState(false); 
  
    const handleClick = () => {
      setshowTradeList(true)
        navigate('/mytrades')
  };


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
      <Button type="primary" className="btn-trade-list-text-to-employee">
        Шоппинг тур
      </Button>
      <Button type="primary" className="btn-trade-list-back" onClick={handleClick}>
        назад
      </Button>
      {showTradeList && navigate('/mytrades')}
      </div>
    </div>
  );
}

export default TradesList;
