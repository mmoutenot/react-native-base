![Pepperoni - Empowered by Futurice](/docs/pepperoni.png?v=2)
Futurice React Native Starter Kit
===

We :green_heart: building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.

Getting started on a new app just takes too damn long, though. Most apps need the same basic building blocks and developer infrastructure, and we are bored of reinventing the wheel time and time again.

This Starter Kit reflects the best practices of React Native development we have discovered while building real-world applications for our customers. It is opinionated about tooling, patterns and development practices. It might not be a one-size-fits-all solution for everyone, but feel free to customize it for your needs, or just take inspiration from it.

React Native Starter Kit is a part of [Pepperoni](http://getpepperoni.com), a framework for kickstarting digital product development.

## Contents

:warning: **WORK IN PROGRESS**

Not all of the below is yet fully implemented

### Application Blueprint

* Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
* Modular and well-documented structure for application code
* [Redux](http://redux.js.org/) and [ImmutableJS](https://facebook.github.io/immutable-js/) for safe and reasonaboutable state management
* [Redux Loop](https://github.com/raisemarketplace/redux-loop) for Elm-style controlled side effects
* Redux-managed Navigators for Stack-based and Tabbed navigation with NavigationExperimental
* Clean and testable service layer for interacting with RESTful APIs
* JSON Web Token authentication
* Multi-environment configuration (dev, staging, production) for iOS and Android
* Disk-persisted application state caching for offline support and snappy startup performance
* Built-in error handling and customizable error screens
* Sample app to show how to wire it all together

### Testing Setup

* [Mocha](https://mochajs.org/) for unit testing application code
* [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components
* Utilities for end-to-end integration testing Redux state, including side effects and asynchronous actions

### Development & Deployment Infrastructure

* [Auth0](https://auth0.com/) for ready-to-use login and signup screens, user authentication and identity management
* [Bitrise.io](https://www.bitrise.io) configurations for Continuous Integration and beta app distribution
* [Microsoft Code Push](http://microsoft.github.io/code-push) for Continuous Deployment and instant app updates
* [Google Tag Manager](https://www.google.com/analytics/tag-manager/) analytics


### Roadmap

* **TODO** Crash reporting
* **TODO** Android and iOS UI Testing with Calaba.sh?
* **TODO** Instanbul code coverage?
* **TODO** Feature flags?

## Getting started

To build your own app on top of the Starter Kit, fork or mirror this repository. Because you can't rename a fork, for serious use we recommend [mirroring using these instructions](https://help.github.com/articles/duplicating-a-repository/). To contribute to Starter Kit development or just playing around, forking is the way to go.

Once you have the code downloaded, follow the **[Setup guide](docs/SETUP.md)** to get started.

## Development workflow

After you have set up the project using above instructions, you can use your favorite IDE or text editor to write code, and run the application from the command line. Turn on React Native hot module reloading in the app developer menu to update your application as you code.

To learn how to structure your application and use the the Redux application architecture, read the **[Architecture guide](docs/ARCHITECTURE.md)** for more details.

##### Start the application in iOS simulator
```
$ react-native run-ios
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ react-native run-android
```

##### Run unit tests
```
$ npm test
```

##### Run tests every time code changes
```
$ npm run test:watch
```

Read the **[Testing guide](docs/TESTING.md)** for more information about writing tests.

## Deployment

Read the **[Deployment guide](docs/DEPLOYMENT.md)** to learn how to deploy the application to test devices, app stores, and how to use Code Push to push updates to your users immediately.

## Contributing

If you find any problems, please [open an issue](https://github.com/futurice/react-native-kindling/issues/new) or submit a fix as a pull request.

We welcome new features, but for large changes let's discuss first to make sure the changes can be accepted and integrated smoothly.

## License

[MIT License](LICENSE)