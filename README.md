# Cracker mobile

This is a repo that is supposed to use Expo, Auth0 and Apollo GQL client.

Set up the `app.json` file:

```
{
  "expo": {
    "authDomain": "your.domain.auth0.com",
    "clientId": "yourclientidprovidedbyauth0",
    "apiAddress": "theapi"
  }
}
```

# Packages:

- `@apollo/client`
- `expo-auth-session`
- `graphql`
- `jwt-decode`

# Based on:

https://docs.expo.io/guides/authentication/#identity-4
https://docs.expo.io/versions/latest/sdk/auth-session/#useauthrequest
