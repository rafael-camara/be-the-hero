import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
