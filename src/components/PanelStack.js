import DatePickerRange from "./DatePickerRange";
import "./PanelStack.css";

const PanelStack = () => {
  return (
    <section className="panel-stack">
      <div className="tabbed-panel">
        <div className="choose-your-simple-container">
          <span>{`Choose Your Simple, `}</span>
          <span className="transparent-pricing">Transparent Pricing</span>
        </div>
      </div>
      <div className="stepper-form">
        <div className="multi-select">
          <DatePickerRange
            prop="1"
            month="Month"
            pathDivider="199.00"
            icons="/icons.svg"
            icons1="/icons.svg"
            icons2="/icons.svg"
            vector="pending_1:187"
            vector1="pending_1:188"
          />
          <div className="date-picker-range1">
            <div className="frame-parent5">
              <div className="frame-wrapper2">
                <div className="frame-parent6">
                  <div className="frame-parent7">
                    <div className="wrapper">
                      <div className="div2">3</div>
                    </div>
                    <div className="months">Months</div>
                  </div>
                  <button className="most-popular-wrapper">
                    <div className="most-popular">Most Popular</div>
                  </button>
                </div>
              </div>
              <div className="group">
                <div className="div3">₹</div>
                <div className="div4">149.00</div>
                <div className="month2">/month</div>
              </div>
            </div>
            <div className="date-picker-range-inner">
              <div className="suitable-for-companies-with-5-parent">
                <div className="suitable-for-companies1">
                  Suitable for companies with 5-10 openings
                </div>
                <div className="frame-parent8">
                  <div className="icons-container">
                    <img className="icons6" alt="" src="/icons-6.svg" />
                    <div className="interview-ready-candidates1">
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className="icons-parent1">
                    <img className="icons7" alt="" src="/icons-6.svg" />
                    <div className="unlimited-job-postings1">
                      Unlimited job postings
                    </div>
                  </div>
                  <div className="icons-parent2">
                    <img className="icons8" alt="" src="/icons-6.svg" />
                    <div className="receive-pre-vetted-profiles1">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="icons-parent3">
                    <img className="icons9" alt="" src="/icons-9.svg" />
                    <div className="dedicated-account-manager1">
                      Dedicated account manager
                    </div>
                  </div>
                  <div className="icons-parent4">
                    <img className="icons10" alt="" src="/icons-9.svg" />
                    <div className="assistance-with-interview1">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="icons-parent5">
                    <img className="icons11" alt="" src="/icons-9.svg" />
                    <div className="custom-reports1">Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="simple-button5">
              <div className="get-started3">Get Started</div>
              <div className="arrow5">
                <img className="vector-icon13" alt="" />
                <img className="vector-icon14" alt="" />
              </div>
            </div>
          </div>
          <DatePickerRange
            prop="6"
            month="Months"
            pathDivider="169.00"
            icons="/icons-12.svg"
            icons1="/icons-12.svg"
            icons2="/icons-12.svg"
            vector="pending_1:258"
            vector1="pending_1:259"
            propPadding="0px var(--padding-17xl) 0px var(--padding-16xl-5)"
            propPadding1="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
            propWidth="15px"
            propMinWidth="15px"
            propMinWidth1="58px"
          />
        </div>
        <div className="star-point-setter">
          <div className="triangle-point-setter">
            <div className="step-3">Step-3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelStack;
