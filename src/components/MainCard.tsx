import "./maincard.css";
import TagStrenght from "./maincardComponents/MainCardFooter";
import MainCardOptions from "./maincardComponents/MainCardOptions";
import MainCardTags from "./maincardComponents/MainCardTags";
import MainCardHead from "./maincardComponents/MainCardHead.tsx";
import MainCardSearchBar from "./maincardComponents/MainCardSearchbar.tsx";
import { useState } from "react";
import { useMyContext } from "../context/Context.tsx";
import TagList from "./maincardComponents/TagPopup.tsx";

const MainCard: React.FC = () => {
  const { items } = useMyContext();
  const [isSearchbarFocused, setIsSearchbarFocused] = useState<boolean>(false);

  console.log(isSearchbarFocused);

  return (
    <div className={"maincard-wrapper"}>
      <div className={"maincard-content"}>
        <MainCardHead />
        <div className={"maincard-searchbar"}>
          <MainCardSearchBar focusHandler={setIsSearchbarFocused} />
        </div>
        {isSearchbarFocused ? (
          <TagList />
        ) : (
          <>
            <div className={"maincard-tags"}>
              <MainCardTags tagsArray={items} />
            </div>
            <div className={"maincard-options"}>
              <MainCardOptions />
            </div>
            <div className={"maincard-footer"}>
              <TagStrenght tagsStrength={items.length} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainCard;
