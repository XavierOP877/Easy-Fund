import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { useContract, useMetamask } from "@thirdweb-dev/react";
import { useDispatch } from "react-redux";

const App = () => {
  const connectWithMetamask = useMetamask();
  const { contract, error } = useContract(`${import.meta.env.VITE_CONTRACT_ADDRESS}`);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metamaskResponse = await connectWithMetamask();
        dispatch({ type: "SetContract", payload: contract });
      } catch (error) {
        console.error("Error connecting with MetaMask:", error);
        
      }
    };

    fetchData();
  }, [connectWithMetamask, contract, dispatch]);

  return (
    <section className="flex flex-col justify-between h-screen">
      <section className="h-max m-2">
        <Header />
      </section>
      <section className="h-full m-2">
        <Body />
      </section>
      <section className="h-max m-2">
        <Footer />
      </section>
    </section>
  );
};

export default App;
