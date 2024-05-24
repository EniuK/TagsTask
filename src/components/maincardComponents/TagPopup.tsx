import { useState } from "react";
import { useMyContext } from "../../context/Context.tsx";

interface Tag {
  tagName: string;
  text: string;
  numberOfSelectedTags: number;
}

const TagList: React.FC = () => {
  const { tags, items, setItems } = useMyContext();

  const [actualState, setActualState] = useState<Tag[]>(items);

  function checkState(name: string): boolean {
    return actualState.some((el) => name === el.tagName);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    tag: Tag
  ): void {
    const { checked } = event.target;
    const help = actualState;
    if (checked) {
      setActualState((prev) => [...prev, tag]);
    } else {
      const updatedHelp = help.filter((e) => e.tagName !== tag.tagName);
      setActualState(updatedHelp);
    }
  }

  function handleAddSelectedTags(): void {
    setItems(actualState);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {tags.map((tag) => (
        <div
          key={tag.tagName}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <div>
            <input
              type="checkbox"
              name={tag.text}
              id={tag.tagName}
              checked={checkState(tag.tagName)}
              onChange={(event) => handleChange(event, tag)}
            />
            {tag.text}
          </div>
          <div>{tag.numberOfSelectedTags}</div>
        </div>
      ))}
      <div>
        <button
          onClick={handleAddSelectedTags}
          disabled={tags === actualState ? true : false}
          style={{ textAlign: "center", width: "100%", marginTop: "10px" }}
        >
          Zapisz
        </button>
      </div>
    </div>
  );
};

export default TagList;
