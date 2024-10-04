import { createContext, useState } from "react";
import cardsData from '../data';
import { v4 as uuidv4 } from "uuid";
export const CardContext = createContext({
  items: [],
  checkBoxChange:() => {},
});

export default function CardContextProvider({children}) {

  return <CardContext.Provider value={[]}>
    {children}
  </CardContext.Provider>
}