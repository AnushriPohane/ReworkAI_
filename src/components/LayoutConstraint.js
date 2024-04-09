import Component from "./Component";
import "./LayoutConstraint.css";

const LayoutConstraint = () => {
  return (
    <section className="layout-constraint">
      <div className="layout-spacer">
        <div className="layout-alignment">
          <div className="layout-distribution">
            <div className="success-stories">
              <span>{`Success `}</span>
              <span className="stories">Stories</span>
            </div>
          </div>
          <div className="layout-basis">
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className="image-holder-wrapper">
          <div className="image-holder">
            <div className="image-holder-child" />
            <div className="image-holder-item" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutConstraint;
