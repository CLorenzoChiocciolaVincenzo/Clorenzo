import { createContext } from "react";
import Root from "../Note/note";

export interface IAppContext{
    jsonData: Root[] | undefined,
    setJsonData: (arg: Root[]) => void,
}

export const AppContext = createContext<IAppContext | null>(null)