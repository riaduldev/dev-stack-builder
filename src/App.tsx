import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import type { ITechnology } from "./Components/Types/Type";
import Technologys from "./Components/Technology/Technologys";
import Footer from "./Components/Footer/Footer";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  // console.log(data);
  return data;
};

function App() {
  const [technologyPromise] = useState(() => technologyFetch());
  // console.log(technologyPromise);
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense
        fallback={<div className="flex w-full items-center justify-center py-20">
      <span className="loading loading-spinner loading-xl"></span>
    </div>}
      >
        <Technologys technologyPromise={technologyPromise}></Technologys>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
