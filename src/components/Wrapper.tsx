import MainCard from "./MainCard";
import Options from "./Options";
import "./wrapper.css";
import { FC } from "react";
const Wrapper: FC = () => {
  return (
    <div className="main">
      <div className={"wrapper-container "}>
        <Options />
        <MainCard />
      </div>
    </div>
  );
};

export default Wrapper;
