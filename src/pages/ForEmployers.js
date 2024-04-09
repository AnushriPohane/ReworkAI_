import FrameComponent7 from "../components/FrameComponent7";
import MaxFlowNetwork from "../components/MaxFlowNetwork";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import PanelStack from "../components/PanelStack";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import LayoutConstraint from "../components/LayoutConstraint";
import FrameComponent from "../components/FrameComponent";
import "./ForEmployers.css";

const ForEmployers = () => {
  return (
    <div className="for-employers">
      <section className="input-filter">
        <FrameComponent7 />
        <MaxFlowNetwork />
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <PanelStack />
      <div className="pentagon-point-setter">
        <button className="simple-button">
          <div className="book-a-demo">Book a Demo</div>
          <div className="arrow">
            <img className="vector-icon" alt="" />
            <img className="vector-icon1" alt="" />
          </div>
        </button>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <LayoutConstraint />
      <FrameComponent />
      <section className="for-employers-inner">
        <div className="frame-parent">
          <div className="optimize-your-hiring-strategy-parent">
            <div className="optimize-your-hiring">
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </div>
            <div className="discover-the-strengths">
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <button className="cta-button">
            <div className="request-your-free">
              Request Your Free Hiring Audit
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
