import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloWrapper } from "./+components/ApolloWrapper";
import { Markers } from "./+components/Markers";

export default function App() {
  return (
    <ApolloWrapper>
      <Markers />
    </ApolloWrapper>
  );
}
