"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var ToolSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    link: String,
    tags: [String],
});
var Tool = mongoose_1.default.model('Tools', ToolSchema);
exports.default = Tool;
