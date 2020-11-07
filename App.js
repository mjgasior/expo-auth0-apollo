import React from "react";
import { ApolloWrapper } from "./+components/ApolloWrapper";
import { AuthorizationButton } from "./+components/AuthorizationButton";
import { View } from "react-native";
// import { Markers } from "./+components/Markers";

export default function App() {
  return (
    <ApolloWrapper>
      <View>
        <AuthorizationButton />
      </View>
    </ApolloWrapper>
  );
}
