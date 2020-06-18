"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ToolsController_1 = __importDefault(require("./controllers/ToolsController"));
var RoutesValidators_1 = __importDefault(require("./validators/RoutesValidators"));
var routes = express_1.Router();
routes.get('/tools', ToolsController_1.default.index);
routes.get('/tags', RoutesValidators_1.default.searchTags, ToolsController_1.default.show);
routes.post('/tools', RoutesValidators_1.default.createTool, ToolsController_1.default.create);
routes.delete('/tools/:id', RoutesValidators_1.default.deleteTool, ToolsController_1.default.delete);
exports.default = routes;
