# Expo Tamagui Template

This is a expo template to create universal apps (Android, iOS and web) that uses Tamagui as UI library.

## Features included

- Expo 50
- Expo Router v3
- Tamagui (Recommended to read [docs](https://tamagui.dev/docs/intro/introduction))
- Authentication routes and logic
- Localization (using i18n and expo-localization)
- React query
- React hook form with yup validations
- Api requests
- Splash screen

## Requirements

- Node v18 or superior
- Xcode and Android studio, or Expo Go

## How to run project?

- Run `yarn` to install dependencies
- Run `npx expo` and follow terminal instructions to run on different devices / simulators

## What should you change when using this template?

- In App.json you have to update the following data:

  - Name
  - Slug
  - Scheme
  - Favicon (Web)
  - Icon
  - Splash
  - Foreground Image and Background Color (Android)

- Customize Tamagui config as you wish (tamagui.config.ts)

- Create Tamagui custom components or update the current ones

- Update env variables as needed

- Any other thing you want to customize for your project

## Localization

This template includes english and spanish as languages. It takes the user's device language as default.

### How to add a new language?

- Create a json file inside `localization` folder following this name pattern: [language-code].json
- Go to `i18n.ts` and add the new language key-value pairs in the resources object.

## Authentication

This template use Expo SecureStore (Android and iOS) and localStorage (web) to handle session data. It provides AuthContext and SessionProvider. These two expose logIn and logOut methods which encapsulate the logic to call the authentication api, and they also provide some useful info regarding the status of the authentication process (isPendingLogIn, logInError, and an isAuthenticated flag).

## TODO

- Firebase push notifications
- Add dimensions
- Env variants
- Eslint + Prettier + Husky
- Global state management (Redux, Context, etc.)
- How to deploy?
- OTA
- Dark mode
