import React, { useCallback, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { login } from "../Authorization";

export const AuthorizationButton = () => {
  const [name, setName] = useState("");

  const onPressHandler = useCallback(async () => {
    const result = await login();
    setName(result.idToken.name);
  }, [setName]);

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Text>Log in!</Text>
    </TouchableOpacity>
  );
};
