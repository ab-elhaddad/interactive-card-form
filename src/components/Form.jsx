import "./form.css";
import DateCvc from "./DateCvc";
import { useContext, useState } from "react";
import Validation from "./../utility/Validation";
import formatCardNumber from "../utility/formatCardNumber";
import { cardInfoContext } from "../context/CardDetailsContext";

const validation = new Validation();

const Form = () => {
  const [errors, setErrors] = useState({
    nameErr: "",
    numberErr: "",
    monthErr: "",
    yearErr: "",
    cvcErr: "",
  });
  const [cardInfo, setCardInfo] = useContext(cardInfoContext);

  const handleChange = (setErrors) => {
    return () => {
      let isThereErr = false;

      const name = document.getElementById("name");
      const nameErr = validation.name(name.value);
      name.style.border = nameErr
        ? "solid 1px var(--red)"
        : "solid 1px var(--light-grayish-violet)";
      isThereErr |= nameErr !== "";

      const number = document.getElementById("number");
      const numberErr = validation.number(number.value);
      number.style.border = numberErr
        ? "solid 1px var(--red)"
        : "solid 1px var(--light-grayish-violet)";
      number.value = formatCardNumber(number.value);
      isThereErr |= numberErr !== "";

      const month = document.getElementById("month");
      const monthErr = validation.month(month.value);
      month.style.border = monthErr
        ? "solid 1px var(--red)"
        : "solid 1px var(--light-grayish-violet)";
      isThereErr |= monthErr !== "";

      const year = document.getElementById("year");
      const yearErr = validation.year(year.value);
      year.style.border = yearErr
        ? "solid 1px var(--red)"
        : "solid 1px var(--light-grayish-violet)";
      isThereErr |= yearErr !== "";

      const cvc = document.getElementById("cvc");
      const cvcErr = validation.cvc(cvc.value);
      cvc.style.border = cvcErr
        ? "solid 1px var(--red)"
        : "solid 1px var(--light-grayish-violet)";
      isThereErr |= cvcErr !== "";

      setErrors({ nameErr, numberErr, monthErr, yearErr, cvcErr });
      setCardInfo({
        name: name.value ? name.value : cardInfo.name,
        number: number.value ? number.value : cardInfo.number,
        month: month.value ? month.value : cardInfo.month,
        year: year.value ? year.value : cardInfo.year,
        cvc: cvc.value ? cvc.value : cardInfo.cvc,
      });
      return isThereErr;
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calling handleChange to prevent submitting as first action
    let isThereError = handleChange(setErrors)();
    for (let el in errors) isThereError |= errors[el] !== "";

    if (!isThereError) {
      const form = document.getElementById("form");
      form.style.display = "none";

      const complete = document.getElementById("complete");
      complete.style.display = "flex";
    }
  };
  return (
    <form onSubmit={handleSubmit} id="form">
      <div className="field">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          onChange={handleChange(setErrors)}
        />
        <label htmlFor="name" id="error">
          {errors.nameErr}
        </label>
      </div>

      <div className="field">
        <label htmlFor="number">CARDHOLDER NUMBER</label>
        <input
          type="text"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleChange(setErrors)}
          maxLength={20}
        />
        <label htmlFor="number" id="error">
          {errors.numberErr}
        </label>
      </div>

      <DateCvc
        errors={errors}
        handleChange={handleChange}
        setErrors={setErrors}
      />

      <input type="submit" value="Confirm" className="btn" />
    </form>
  );
};

export default Form;
