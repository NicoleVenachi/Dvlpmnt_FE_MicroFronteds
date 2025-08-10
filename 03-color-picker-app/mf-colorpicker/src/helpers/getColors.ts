export const getColorList = () => {
  const colors = localStorage.getItem("colorList");
  return colors ? JSON.parse(colors) : [];
};

export const getLastColor = () => {
  const colors = getColorList();
  return colors[0] || "#32d6e2";
};
