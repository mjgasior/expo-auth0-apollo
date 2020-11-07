import React from "react";
import { ApolloWrapper } from "./+components/ApolloWrapper";
import { AuthorizationButtonManual } from "./+components/AuthorizationButtonManual";
import { View } from "react-native";
// import { Markers } from "./+components/Markers";

export default function App() {
  return (
    <ApolloWrapper>
      <View>
        <AuthorizationButtonManual />
      </View>
    </ApolloWrapper>
  );
}
