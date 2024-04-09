import Steps from "./Steps";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <section className="frame-section">
      <div className="data-trapezoid-parent">
        <img className="data-trapezoid-icon" alt="" src="/vector-13.svg" />
        <div className="steps1">
          <div className="data-circle-with-cross">
            <div className="how-our-system-container">
              <span>{`How Our System `}</span>
              <span className="operates">Operates</span>
            </div>
          </div>
          <div className="data-triangle-point-parent">
            <div className="data-triangle-point">
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                frame48095633="/frame-48095633.svg"
              />
              <div className="steps2">
                <div className="sign-up">Sign Up</div>
                <div className="follow-the-link">
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className="wrapper-mingcuteuser-add-line">
                  <img
                    className="mingcuteuser-add-line-icon"
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                frame48095633="/frame-48095633-1.svg"
                propPadding="0px 0px var(--padding-41xl) var(--padding-11xl)"
                propPadding1="0px var(--padding-mini)"
                propMinHeight="100px"
              />
            </div>
            <div className="row-box">
              <button className="simple-button3">
                <div className="get-started1">Get Started</div>
                <div className="arrow3">
                  <img className="vector-icon9" alt="" />
                  <img className="vector-icon10" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
