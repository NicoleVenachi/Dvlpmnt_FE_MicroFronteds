import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorList, setColorList] = useState<string[]>(getColorList());

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) =>
    setColor(event.target.value);

  const handleSubmitSaveColor = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setColorList([color, ...colorList]);
  };

  const handleClickClearColors = () => {
    setColor("#f2f2f2");
    setColorList([]);
    localStorage.removeItem("colorList");
  };

  useEffect(() => {
    localStorage.setItem("colorList", JSON.stringify(colorList));
  }, [colorList]);

  return {
    color,
    colorList,
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors,
  };
};
