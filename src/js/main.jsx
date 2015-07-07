"use strict";
import React from "react";
import FruitAppContainer from "./components/FruitAppContainer.jsx";

const rootEl = document.getElementById("content");

React.render(
	<FruitAppContainer />,
	rootEl
);