import "./left.scss";
import LadyDesktop from "../../assets/images/illustration-woman-online-desktop.svg";
import LadyMobile from "../../assets/images/illustration-woman-online-mobile.svg";
import LadyShadowDesktop from "../../assets/images/bg-pattern-desktop.svg";
import LadyShadowMobile from "../../assets/images/bg-pattern-mobile.svg";

const Left = () => {
  return (
    <div className="Left">
      <div className="Shadow">
        <img src={LadyShadowDesktop} alt="" className="LadyShadowDesktop" />
        <img src={LadyShadowMobile} alt="" className="LadyShadowMobile" />
      </div>
      <div className="women">
        <img className="LadyDesktop" src={LadyDesktop} alt="" />
        <img className="LadyMobile" src={LadyMobile} />
      </div>
    </div>
  );
};

export default Left;
