"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var defaultIgnorePatterns = [
    /node_modules/,
    /bower_components/,
    '.sass-cache',
    '.vscode',
    '.git',
    '.idea',
];
function addDefaultIgnorePatterns(incoming) {
    if (!incoming.get("watch")) {
        return [incoming, []];
    }
    var output = incoming.update("watchOptions", function (watchOptions) {
        var userIgnored = immutable_1.List([])
            .concat(watchOptions.get("ignored"))
            .filter(Boolean)
            .toSet();
        var merged = userIgnored.merge(defaultIgnorePatterns);
        return watchOptions.merge({
            ignored: merged.toList(),
        });
    });
    return [output, []];
}
exports.addDefaultIgnorePatterns = addDefaultIgnorePatterns;
//# sourceMappingURL=addDefaultIgnorePatterns.js.map