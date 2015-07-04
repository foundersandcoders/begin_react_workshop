// https://github.com/robertknight/react-testing
"use strict";
import jsdom from "jsdom";

var FAKE_DOM_HTML = `
<html>
<body>
</body>
</html>
`;

function setupFakeDOM() {
	if (typeof document !== "undefined") {
		return;
	}

	global.document = jsdom.jsdom(FAKE_DOM_HTML);
	global.window = document.defaultView;
	global.navigator = window.navigator;
}

setupFakeDOM();
