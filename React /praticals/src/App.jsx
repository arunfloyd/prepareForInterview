import React, { Suspense } from "react";
import "./App.css";
import UseCallback from "./components/UseCallback";
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseReducerCounter from "./components/UseReducerCounter";
import UseReducerObj from "./components/UseReducerObj";
import { Provider } from "react-redux";
import appStore from "./appStore";
const UseContext = React.lazy(() => import("./components/UseContext"));
export const UserName = React.createContext();
function App() {
  return (
    <>
      <UseReducerObj />
    </>
    // <>
    //   <Provider store={appStore}>
    //     <UserName.Provider value={"Arun"}>
    //       <Suspense fallback={<div>Loading ...</div>}>
    //         <UseContext />
    //       </Suspense>
    //     </UserName.Provider>
    //     <UseState />
    //     <UseEffect />
    //     <UseRef />
    //     <UseCallback />
    //     <UseMemo />
    //     <UseReducer />
    //      <UseReducerCounter />
    //     <UseReducerObj />
    //   </Provider>
    // </>
  );
}

export default App;
