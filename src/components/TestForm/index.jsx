import { useState } from "react";
import st from "./style.module.css";
import { addUsers } from "../../api/api";

const TestForm = () => {
  const [user, setUser] = useState({
    username: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    nameCompany: "",
    offert: false,
    password: "",
    pass: "",
  });

  const changeHandler = (event) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setUser((user) => {
      return {
        ...user,
        [event.target.name]: event.target.value,
        offert: event.target.checked,
        password: newPassword,
        pass: newPassword,
      };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    addUsers(user)
      .then((res) => res.json())
      .then((data) => localStorage.setItem("jwt", data.jwt));
  };

  return (
    <form className={st.form} onSubmit={submit}>
      <input
        type="text"
        placeholder="Введите имя"
        name="username"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Введите Фамилию"
        name="lastName"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder={`только для субкондтракта
        введите название компании
      `}
        name="nameCompany"
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="Введите телефон"
        name="phone"
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="Введите email"
        name="email"
        onChange={changeHandler}
        id="email"
      />
      <input
        type="text"
        placeholder="Введите страну"
        name="country"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Введите город"
        name="city"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Введите адрес доставки"
        name="address"
        onChange={changeHandler}
      />
      {/* <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={changeHandler}
      /> */}
      <div>
        <input
          id="offert"
          type="checkbox"
          name="offert"
          onChange={changeHandler}
        />
        <label htmlFor="offert">Принять договор офферты</label>
      </div>
      <button type="submit" className={st.form__btn}>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default TestForm;
