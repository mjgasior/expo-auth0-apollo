import React, { useCallback, useState } from "react";
import { Button, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { auth0Login } from "./+utils/auth0Login";

WebBrowser.maybeCompleteAuthSession();

export const AuthorizationButton = () => {
  const [result, setResult] = useState();

  const onPressHandler = useCallback(async () => {
    const response = await auth0Login();
    setResult(response);
    console.log(response);
  }, [setResult]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Login manual!" onPress={onPressHandler} />
      {result && <Text>{JSON.stringify(result.idToken, null, 2)}</Text>}
    </View>
  );
};
