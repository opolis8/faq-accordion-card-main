import "./center.scss";
import Content from "../content/Content";
import Left from "../left/Left";
import myImage from "../../assets/images/illustration-box-desktop.svg";

const Center = () => {
  return (
    <div className="Center">
      <div className="container">
        <div className="box">
          <img src={myImage} alt="" />
        </div>

        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Center;
