import * as React from "react";
import { Button, Text, View, Platform } from "react-native";
import {
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession();

const useProxy = Platform.select({ web: false, default: true });

const redirectUri = makeRedirectUri({
  useProxy,
});

export const AuthorizationButton = () => {
  const [request, result, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: Constants.manifest.extra.clientId,
      redirectUri,
      scopes: ["openid", "profile", "email"],
    },
    {
      authorizationEndpoint: `https://${Constants.manifest.extra.authDomain}/authorize`,
      tokenEndpoint: `https://${Constants.manifest.extra.authDomain}/oauth/token`,
    }
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Loginghg!"
        disabled={!request}
        onPress={() => promptAsync({ useProxy, returnUrl: redirectUri })}
      />
      {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
    </View>
  );
};
