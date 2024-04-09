import { useMemo } from "react";
import "./DatePickerRange.css";

const DatePickerRange = ({
  prop,
  month,
  pathDivider,
  icons,
  icons1,
  icons2,
  vector,
  vector1,
  propPadding,
  propPadding1,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const dataAggregatorStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const shapeStackStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const imagePaletteStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const monthStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="date-picker-range">
      <div className="data-aggregator1" style={dataAggregatorStyle}>
        <div className="filter-chain">
          <div className="shape-stack" style={shapeStackStyle}>
            <div className="image-palette-parent">
              <div className="image-palette" style={imagePaletteStyle}>
                <div className="div" style={divStyle}>
                  {prop}
                </div>
              </div>
              <div className="month" style={monthStyle}>
                {month}
              </div>
            </div>
          </div>
          <div className="parent">
            <div className="div1">₹</div>
            <div className="path-divider">{pathDivider}</div>
            <div className="month1">/month</div>
          </div>
        </div>
      </div>
      <div className="table-maker-wrapper">
        <div className="table-maker">
          <div className="suitable-for-companies">
            Suitable for companies with 5-10 openings
          </div>
          <div className="row-setter">
            <div className="matrix-transform">
              <img className="icons" loading="lazy" alt="" src={icons} />
              <div className="interview-ready-candidates">
                10 interview-ready candidates
              </div>
            </div>
            <div className="scale-adjustor">
              <img className="icons1" alt="" src={icons1} />
              <div className="unlimited-job-postings">
                Unlimited job postings
              </div>
            </div>
            <div className="transformer-hub">
              <img className="icons2" alt="" src={icons2} />
              <div className="receive-pre-vetted-profiles">
                Receive pre-vetted profiles within 48 hours
              </div>
            </div>
            <div className="icons-parent">
              <img className="icons3" alt="" src="/icons-3.svg" />
              <div className="dedicated-account-manager">
                Dedicated account manager
              </div>
            </div>
            <div className="path-follower">
              <img className="icons4" alt="" src="/icons-3.svg" />
              <div className="assistance-with-interview">
                Assistance with interview scheduling
              </div>
            </div>
            <div className="icons-group">
              <img className="icons5" alt="" src="/icons-3.svg" />
              <div className="custom-reports">Custom reports</div>
            </div>
          </div>
        </div>
      </div>
      <div className="simple-button-wrapper">
        <div className="simple-button4">
          <div className="get-started2">Get Started</div>
          <div className="arrow4">
            <img className="vector-icon11" alt="" src={vector} />
            <img className="vector-icon12" alt="" src={vector1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerRange;
