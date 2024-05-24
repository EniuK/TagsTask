import { useMyContext } from "../../context/Context.tsx";

type MainCardTagsProps = {
  tagsArray: any[];
};

const MainCardTags: React.FC<MainCardTagsProps> = ({ tagsArray }) => {
  const chosenTags: any[] = tagsArray || [];
  const { setItems } = useMyContext();

  const handleTagRemoval = (tagName: string) => {
    const updatedTags = chosenTags.filter((tag) => tag.tagName !== tagName);
    setItems(updatedTags);
  };

  return (
    <>
      {chosenTags.map((tag: any, index: number) => (
        <div
          key={index}
          id={tag.tagName}
          className="maincard-tags-tag-container"
        >
          <div className="maincard-tags-tag">
            <b>{tag.text}</b>
          </div>
          <div
            className="maincard-tags-tag-deleteicon"
            onClick={() => handleTagRemoval(tag.tagName)}
          >
            <img
              src="./public/options/close.svg"
              alt="close"
              width={"20px"}
              height={"20px"}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MainCardTags;
