import "./complete.css";

const Complete = () => {
  const clickHandler = () => {
    const complete = document.getElementById("complete");
    complete.style.display = "none";

    const form = document.getElementById("form");
    form.style.display = "flex";
  };
  return (
    <div id="complete">
      <div className="img">
        <img src="./images/icon-complete.svg" alt="Complete icon" />
      </div>
      <div className="txt">
        <p className="p-1">THANK YOU!</p>
        <p className="p-2">We've added your card details</p>
      </div>
      <button className="btn" onClick={clickHandler}>
        Continue
      </button>
    </div>
  );
};

export default Complete;
