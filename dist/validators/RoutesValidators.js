"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var validators = {
    createTool: celebrate_1.celebrate((_a = {},
        _a[celebrate_1.Segments.BODY] = celebrate_1.Joi.object().keys({
            title: celebrate_1.Joi.string().required(),
            description: celebrate_1.Joi.string().required(),
            link: celebrate_1.Joi.string().required(),
            tags: celebrate_1.Joi.string(),
        }),
        _a)),
    searchTags: celebrate_1.celebrate((_b = {},
        _b[celebrate_1.Segments.QUERY] = celebrate_1.Joi.object().keys({
            tags: celebrate_1.Joi.string().required().lowercase(),
        }),
        _b)),
    deleteTool: celebrate_1.celebrate((_c = {},
        _c[celebrate_1.Segments.PARAMS] = celebrate_1.Joi.object().keys({
            id: celebrate_1.Joi.string().required(),
        }),
        _c)),
};
exports.default = validators;
