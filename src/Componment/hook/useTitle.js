import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Road_Sewa`;
  }, [title]);
  return null;
};

export default useTitle;
