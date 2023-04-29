import React from "react";
import "./Production.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cascader } from "antd";
import { DatePicker, Space } from "antd";
import { Button, Form, Input, Select, Upload } from "antd";

const { TextArea } = Input;

function Production() {
  const [formValues, setFormValues] = useState({
    nameOrder: "",
    category: "",
    desc: "",
    quantity: "",
    materialOrder: "",
    sample: "",
    delivery: "",
    orderDeadline: "",
    payment: "",
    moreServices: "",
    comments: "",
  });

  const [showNewOrder, setshowNewOrder] = useState(false);
  const navigate = useNavigate();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [status, setStatus] = useState("");

  const onChangeSelected = (e) => {
    setFormValues((formValues) => {
      return {
        ...formValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onChangeCascad = (value) => {
    console.log(value);
  };

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/neworder");
  };

  const optionsVal = [
    {
      value: "Доставка",
      label: "Доставка",
      children: [
        {
          value: "Доставка",
          label: "Заказчик",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    }]

  const { RangePicker } = DatePicker;

  const onFinish = async (e) => {
    // e.preventDefault();

    const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
    const chat_id = "-1001950653999"; // это айди группы чата,https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
    // где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
    const url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chat_id +
      "&parse_mode=html&text=" +
      encodeURIComponent(
        "Наименование заказа: " +
          formValues.nameOrder +
          "\nОписание заказа: " +
          formValues.desc +
          "\nКатегория: " +
          formValues.category +
          "\nКоличество: " +
          formValues.quantity +
          "\nУсловия оплаты: " +
          formValues.payment +
          "\nДополнительные услуги: " +
          formValues.moreServices +
          "\nПримечания и комментарии: " +
          formValues.comments +
          "\nСсылка на сделки: " +
          "google.com"
      );
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.ok) {
        setStatus("Ваша заявка отправлена");
      } else {
        setStatus("Ошибка");
      }
    } catch (error) {
      console.error(error);
      setStatus("Ошибка");
    }
  };

  return (
    <>
      <div className="production-container">
        <div className="production-content">
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
            onFinish={onFinish}
          >
            <Form.Item label="Наименование заказа:">
              <Input
                placeholder="Например: Пошив блузки"
                name="nameOrder"
                onChange={onChangeSelected}
              />
            </Form.Item>
            <Form.Item label="Категория:">
              <Select
                name="category"
                placeholder="Выберите категорию"
                // onChange={onChangeSelected}
                options={[
                  { value: "female", label: "Женская одежда" },
                  { value: "male", label: "Мужская одежда" },
                  { value: "kids", label: "Детская одежда" },
                  { value: "specialWear", label: "Спецодежда" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Описание заказа:">
              <TextArea
                placeholder="Например: Характеристики изделия или материала"
                rows={5}
                name="desc"
                onChange={onChangeSelected}
              />
            </Form.Item>
            <Form.Item label="Количество:">
              <Input
                type="number"
                name="quantity"
                onChange={onChangeSelected}
              />
            </Form.Item>
            <Form.Item label="Материалы для заказа:">
              <Select
                name="materialOrder"
                placeholder="Выберите категорию"
                onChange={onChange}
                options={[
                  { value: "customer", label: "Предоставляет заказчик" },
                  { value: "performer", label: "Предоставляет исполнитель" },
                  { value: "agreement", label: "По договоренности" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Образец:">
              <Select
                name="sample"
                placeholder="Выберите категорию"
                onChange={onChange}
                options={[
                  { value: "customer", label: "Предоставляет заказчик" },
                  { value: "agreement", label: "По договоренности" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Доставка:">
              <Cascader
                name="delivery"
                options={optionsVal}
                onChange={onChangeCascad}
              />
            </Form.Item>
            <Form.Item label="Срок выполнения заказа:">
              <Space direction="vertical" size={12}>
                <RangePicker
                  name="orderDeadline"
                  placeholder={["начало даты", "конец даты"]}
                  format="DD-MM-YYYY"
                />
              </Space>
            </Form.Item>
            <Form.Item label="Условия оплаты:">
              <Input
                name="payment"
                placeholder="предоплата, постоплата, частичная оплата и т.д."
                onChange={onChangeSelected}
              />
            </Form.Item>
            <Form.Item label="Дополнительные услуги:">
              <Input
                name="moreServices"
                placeholder="Например: упаковка, маркировка и т.д."
                onChange={onChangeSelected}
              />
            </Form.Item>
            <Form.Item label="Примечания и комментарии:">
              <TextArea
                name="comments"
                placeholder="Например: Характеристики изделия или материала"
                rows={3}
                onChange={onChangeSelected}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="btn-production-send-form"
              style={{ marginBottom: "10px" }}
            >
              отправить в канал
            </Button>
          </Form>
          <div className="btns-production-services">
            <Button
              type="primary"
              className="btn-production-back"
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
