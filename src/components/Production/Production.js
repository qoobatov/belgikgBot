import React from "react";
import "./Production.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Cascader } from "antd";

import { Button, DatePicker, Form, Input, Select, Upload } from "antd";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const optionsSize = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};





function Production() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const navigate = useNavigate();

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/neworder");
  };
  const { Option } = Select;
  const CheckboxGroup = Checkbox.Group;

  const options = [
    { label: "Женский", value: "female" },
    { label: "Мужской", value: "male" },
    { label: "Детский", value: "kids" },
  ];

  function handleChangeType(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  return (
    <>
      <div className="bayer-services-container">
        <div className="bayer-services-content">
          <h3>Производство:</h3>
          <Form
            labelCol={{
              span: 15,
              color: "red",
            }}
            wrapperCol={{
              span: 25,
            }}
            layout="vertical"
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Наименование заказа:">
              <Input placeholder="Например: Пошив блузки" />
            </Form.Item>
            <Form.Item label="Категория:">
              <Input />
            </Form.Item>{" "}
            <Form.Item label="телефон поставщика:">
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Размерная сетка от и до:">
              <Cascader
                style={{
                  width: "100%",
                }}
                options={optionsSize}
                onChange={onChange}
                multiple
                maxTagCount="responsive"
              />
            </Form.Item>
            <Form.Item label="Тип заказа:">
              <CheckboxGroup options={options} onChange={handleChangeType} />

              <Form.Item label="Цена за шт.  (выбрать валюту):">
                <div className="quantity-currency">
                  <Input type="number" style={{ width: "240px" }} autofocus />
                  <Select defaultValue="KGZ" style={{ width: 80 }}>
                    <Option value="GBP">KGZ</Option>
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="RUB">RUB</Option>
                    <Option value="KZT">KZT</Option>
                  </Select>
                </div>
              </Form.Item>

              <Form.Item label="Количество:">
                <Input type="number" />
              </Form.Item>
              <Form.Item label="Описание товара:">
                <TextArea rows={3} />
              </Form.Item>
            </Form.Item>
            <Form.Item label="Дата:">
              <DatePicker style={{ width: "320px" }} placeholder="выбор даты" />
            </Form.Item>
            <Form.Item
              label="Прикрепить фото:"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card" maxCount={4}>
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 5,
                    }}
                  >
                    добавить
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </Form>

          <Button
            type="primary"
            htmlType="submit"
            className="btn-bayer-services-send-form"
            style={{ marginBottom: "10px" }}
          >
            отправить
          </Button>
          <div className="btns-bayer-services">
            <Button
              type="primary"
              className="btn-bayer-services-back"
              onClick={onClickBackNewOrder}
            >
              назад
            </Button>
          </div>
          {showNewOrder && navigate("/neworder")}
        </div>
      </div>
    </>
  );
}

export default Production;
