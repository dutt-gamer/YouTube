import "./App.css";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
//import { useState } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <VideoContainer />,
      },
      {
        path: "/demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev);
  // };
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
