"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addCwdToWatchOptions(incoming) {
    var output = incoming.updateIn(['watchOptions', 'cwd'], function (watchCwd) {
        return watchCwd || incoming.get('cwd');
    });
    return [output, []];
}
exports.addCwdToWatchOptions = addCwdToWatchOptions;
//# sourceMappingURL=addCwdToWatchOptions.js.map