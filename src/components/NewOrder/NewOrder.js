import React from "react";
import "./NewOrder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function NewOrder() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);

  const handleClick = () => {
    setshowTradeList(true);
    navigate("/mytrades");
  };

  return (
    <>
      <div className="new-order-container">
        <div className="new-order-content">
          <h3>Байер и производство:</h3>
          <div className="new-order-btn-group">
            <Button type="primary" htmlType="submit" className="btn-new-order">
              Услуги байера
            </Button>

            <Button type="primary" htmlType="submit" className="btn-new-order">
              Производство
            </Button>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="btn-new-order-back"
            onClick={handleClick}
          >
            назад
          </Button>
          {showTradeList && navigate("/mytrades")}
        </div>
      </div>
    </>
  );
}

export default NewOrder;
