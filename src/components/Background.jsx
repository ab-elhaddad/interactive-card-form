import "./background.css";
import Form from "./Form";
import Complete from "./Complete";

const Background = () => {
  return (
    <div className="bg">
      <div className="bg-img"></div>
      <Complete />
      <Form />
    </div>
  );
};

export default Background;
