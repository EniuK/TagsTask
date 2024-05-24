import "./maincardhead.css";

const MainCardHead: React.FC = () => {
  return (
    <div className="maincard-head">
      <span>Tagi</span>
      <div>
        <img
          src="./public/options/close.svg"
          alt="exit"
          width={"50px"}
          height={"50px"}
        />
      </div>
    </div>
  );
};

export default MainCardHead;
