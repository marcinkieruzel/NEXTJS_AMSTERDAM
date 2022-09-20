import type { AppProps } from "next/app";
import { createContext, Dispatch, useState } from "react";
import Layout from "../components/Layout";
import { Property } from "../interfaces";

export const UserChoicesContex = createContext<{
  userChoices: Property[];
  setUserChoices: Dispatch<Property[]>;
}>({
  userChoices: [],
  setUserChoices: () => null,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [userChoices, setUserChoices] = useState([]);

  return (
    <UserChoicesContex.Provider value={{ userChoices, setUserChoices }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserChoicesContex.Provider>
  );
}
