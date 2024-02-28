import "./dateCvc.css";

const DateCvc = ({ errors, handleChange, setErrors }) => {
  return (
    <div className="date-cvc">
      <span className="field date">
        <label htmlFor="month">EXP. DATE (MM/YY)</label>
        <span style={{ display: "flex" }}>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="number"
              id="month"
              placeholder="MM"
              onChange={handleChange(setErrors)}
              maxLength={2}
            />
            <label htmlFor="month" id="error">
              {errors.monthErr}
            </label>
          </span>

          <span style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="number"
              id="year"
              placeholder="YY"
              onChange={handleChange(setErrors)}
              maxLength={4}
            />
            <label htmlFor="year" id="error">
              {errors.yearErr}
            </label>
          </span>
        </span>
      </span>

      <span className="field cvc">
        <label htmlFor="cvc">CVC</label>
        <input
          type="number"
          id="cvc"
          placeholder="eg. 123"
          onChange={handleChange(setErrors)}
          maxLength={4}
        />
        <label htmlFor="cvc" id="error">
          {errors.cvcErr}
        </label>
      </span>
    </div>
  );
};

export default DateCvc;
