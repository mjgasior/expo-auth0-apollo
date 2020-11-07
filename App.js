import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloWrapper } from "./+components/ApolloWrapper";
import { AuthorizationButtonManual } from "./+components/AuthorizationButtonManual";
// import { Markers } from "./+components/Markers";

export default function App() {
  return (
    <ApolloWrapper>
      <AuthorizationButtonManual />
    </ApolloWrapper>
  );
}
