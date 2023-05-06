import "./App.css";
import ClassCompLife from "./components/ClassCompLife";
import ClassCompLife2 from "./components/ClassCompLife2";
import CustomHook from "./components/CustomHook";
import ObjectUseState from "./components/ObjectUseState";
import UseCallbackhook from "./components/UseCallbackhook";
import UseContextHook from "./components/UseContextHook";
import UseEffectHook from "./components/UseEffectHook";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemohook2 from "./components/UseMemohook2";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";
import React, { createContext } from "react";
import GetDerived from "./components/GetDerived";
import ShouldUpdate from "./components/ShouldUpdate";
import GetSnapshot from "./components/GetSnapshot";
import GetError from "./components/GetError";
import DidCatch from "./components/DidCatch";
import { Counter } from "./components/Redux/Reducer/counter";
import FetchDataAPI from "./components/FetchDataAPI";
import AxiosLib from "./components/AxiosLib";
import DidMount from "./components/DidMount";
import Reactquery from "./components/reactquery";
import SwrComp from "./components/SwrComp";

export const LoginContext = createContext();

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <ObjectUseState />
      <UseEffectHook />

      <LoginContext.Provider value={true}>
        <div>
          <UseContextHook />
        </div>
      </LoginContext.Provider>
      <UseRefHook />
      <UseReducerHook />
      <UseLayoutEffect />
      <UseMemohook2 />
      <UseCallbackhook />
      <CustomHook />
      <ClassCompLife />
      <ClassCompLife2 />
      <GetDerived />
      <ShouldUpdate />
      <GetSnapshot />
      <GetError />
      <DidCatch />
      <Counter />
      <FetchDataAPI />
      <AxiosLib />
      <DidMount />

      <SwrComp />
      <Reactquery />
    </div>
  );
}

export default App;
