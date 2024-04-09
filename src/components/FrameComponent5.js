import FrameComponent6 from "./FrameComponent6";
import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <section className="for-employers-child">
      <div className="frame-parent2">
        <div className="our-amazing-benefits-helpful-f-wrapper">
          <div className="our-amazing-benefits-container">
            <span>{`Our Amazing Benefits `}</span>
            <span className="helpful-for-your">Helpful For Your Hiring</span>
          </div>
        </div>
        <div className="frame-child4" />
        <div className="frame-parent3">
          <FrameComponent6
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <FrameComponent6
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propLeft="428.2px"
            propTop="0px"
            propHeight="unset"
            propLineHeight="27.2px"
          />
          <div className="frame-parent4">
            <div className="error-handler-wrapper">
              <div className="error-handler">
                <img className="data-table-icon" alt="" src="/vector-7.svg" />
                <img className="data-graph-icon" alt="" src="/vector-8.svg" />
              </div>
            </div>
            <div className="data-tree">
              <div className="highly-contextualized-intervie-container">
                <p className="highly-contextualized">{`Highly Contextualized `}</p>
                <p className="interview">Interview</p>
              </div>
              <div className="al-models-generate">
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className="data-block">
            <div className="data-stack">
              <div className="data-queue">
                <img className="data-circle-icon" alt="" src="/vector-9.svg" />
                <img
                  className="data-triangle-icon"
                  alt=""
                  src="/vector-10.svg"
                />
                <img className="data-square-icon" alt="" src="/vector-11.svg" />
                <img className="data-star-icon" alt="" src="/vector-12.svg" />
              </div>
            </div>
            <div className="data-oval">
              <div className="automated-scheduling">
                <p className="automated">{`Automated `}</p>
                <p className="scheduling">Scheduling</p>
              </div>
              <div className="email-whatsapp">{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <FrameComponent6
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propLeft="428.2px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
          <FrameComponent6
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propLeft="856.3px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
