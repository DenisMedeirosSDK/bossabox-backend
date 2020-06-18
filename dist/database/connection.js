"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
var mongoose_1 = __importDefault(require("mongoose"));
function connection() {
    mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb://localhost/tools', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
exports.default = connection;
