/**
 * @format
 */

// eslint-disable-next-line no-unused-vars
import React from "react";

import {AppRegistry} from "react-native";
import App from "./src/App";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, () => App);
// export default from "./storybook";
// AppRegistry.runApplication("App", {rootTag: document.getElementById("reactRootId")});
