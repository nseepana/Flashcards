# Flashcards
Udacity, React native mobile flash cards project.

## Setup

This project was bootstrapped with [React Native](https://reactnative.dev/).

## Available Scripts

to run on ios simulator.

### `yarn ios`


to link native modules:

### `$ cd ios && pod install && cd ..`;

## REF:

* [React Navigation] (https://reactnavigation.org/docs/bottom-tab-navigator/)
* [Native base FAQ](https://nativebase.io/docs/v0.3.0/faq)
* [JSON Cyclic structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
* []()




When I run it in Xcode I'm getting a "Build Failed" error, with message:
	ld: library not found for -lRNVectorIcons
	clang: error: linker command failed with exit code 1 (use -v to see invocation)
Solution:
	React Native Vector Icons is a peer dependency of NativeBase. Hence you need to complete the installation of Icons manually.
	Please go through installation procedure of Icons.







