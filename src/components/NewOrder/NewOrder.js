import React from "react";
import "./NewOrder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function NewOrder() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [showBayerServices, setshowBayerServices] = useState(false);

  const handleClickBack = () => {
    setshowTradeList(true);
    navigate("/mytrades");
  };
  const onClickBayerServices = () => {
    setshowBayerServices(true);
    navigate("/bayerservices");
  };

  return (
    <>
      <div className="new-order-container">
        <div className="new-order-content">
          <h3>Байер и производство:</h3>
          <div className="new-order-btn-group">
            <Button type="primary" htmlType="submit" className="btn-new-order" onClick={onClickBayerServices}>
              Услуги байера
            </Button>

            <Button type="primary" htmlType="submit" className="btn-new-order">
              Производство
            </Button>
          </div>
          <Button
            type="primary"
            className="btn-new-order-text-to-employee"
          >
            Написать сотруднику
          </Button>
          <Button
            type="primary"
            className="btn-new-order-back"
            onClick={handleClickBack}
          >
            назад
          </Button>
          {showTradeList && navigate("/mytrades")}
          {showBayerServices && navigate("/bayerservices")}
        </div>
      </div>
    </>
  );
}

export default NewOrder;
