import { useState, FC, ChangeEvent } from "react";
import { useMyContext } from "../../context/Context.tsx";

interface Props {
  focusHandler: (value: boolean) => void;
}

const MainCardSearchBar: FC<Props> = ({ focusHandler }) => {
  const { sortTags } = useMyContext();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchValue(value);
    sortTags(value);
  };

  return (
    <>
      <div className={"maincard-input-container"}>
        <img
          src="./public/options/search.svg"
          alt="search"
          width={"20px"}
          height={"20px"}
          onClick={() => focusHandler(true)}
        />
        <input
          className="maincard-searchbar-input"
          type="text"
          placeholder="Wyszukaj grupę lub tag"
          value={searchValue}
          onChange={handleInputChange}
        />
        <div style={{ marginRight: "60px" }}>
          <img
            src="./public/options/closecircle.svg"
            alt="close"
            width={"20px"}
            height={"20px"}
            onClick={() => focusHandler(false)}
          />
        </div>
      </div>
    </>
  );
};

export default MainCardSearchBar;
