import "./Component1.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  skewTransform,
  theresaWebb,
  hRManagerAmazon,
}) => {
  return (
    <div className="component-16">
      <div className="rework-has-been">{reworkHasBeenAGreatWayToM}</div>
      <div className="scale-transform">
        <img
          className="skew-transform-icon"
          loading="lazy"
          alt=""
          src={skewTransform}
        />
        <div className="container">
          <div className="theresa-webb">{theresaWebb}</div>
          <div className="hr-manager-amazon">{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
