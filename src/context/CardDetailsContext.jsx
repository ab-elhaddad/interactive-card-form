import { createContext, useState } from "react";

export const cardInfoContext = createContext({});
const CardInfoContext = ({ children }) => {
  const [cardInfo, setCardInfo] = useState({
    name: "JANE APPLESEED",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });
  return (
    <cardInfoContext.Provider value={[cardInfo, setCardInfo]}>
      {children}
    </cardInfoContext.Provider>
  );
};

export default CardInfoContext;
