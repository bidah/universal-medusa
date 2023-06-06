---
sidebar_position: 3
---

# Universal Links

Universal links allow iOS apps to handle links to specific web pages by redirecting the user to the corresponding location within the app. This provides a seamless user experience and helps to bridge the gap between web and app content.

You get out of the box: 

1. Auto deep links: the automatic setup and handling of all in-app links, using a custom scheme, i.e. acme://

2. Auto universal links: auto deep links and web routing, such that any configuration in the apple-app-site-association is always handled. All possible web traffic can be sent to the native app and handled as expected.


:::caution
You need to **have matching routes** between Expo `app` and the Next `pages` directory for deep links to work.
:::



```json title="apps/expo/app.json"
{
  "expo": {
    "scheme": "universal-medusa-scheme"
  }
}
```
*`scheme`: URL scheme to link into your app. Defaults to 'universal-medusa-scheme' but you can change it as you see fit. If we set this to 'demo', then demo:// URLs would open your app when tapped.* Ref: [Expo docs](https://docs.expo.dev/versions/latest/config/app/#scheme)
## Testing deep links


### On simulator

On native, you can use the [`uri-scheme`](https://www.npmjs.com/package/uri-scheme) CLI to test opening native links on a device.

For example, if you want to launch the Expo Go app on iOS to the `/form-sheet` route, you can run:


:::tip
You will need to use the correct address and port that's printed when you run expo start. Replace `192.168.87.39:19000` with the IP address shown when running `npx expo start`.
:::

```bash
npx uri-scheme open exp://192.168.87.39:19000/--/product/medusa-tshirt --ios
```

### On phisical device

Search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more on [React navigation testing deep link documentation](https://reactnavigation.org/docs/deep-linking/#testing-deep-links)

## Setup for production

Refer to [Expo-router universal links documentation](https://expo.github.io/router/docs/features/linking) and [Solito deep link documentation](https://solito.dev/recipes/deep-linking) for further details


