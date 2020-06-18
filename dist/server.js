const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('dotenv');
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const routes_1 = __importDefault(require('./routes'));
const connection_1 = __importDefault(require('./database/connection'));

const server = express_1.default();
server.use(express_1.default.json());
server.use(cors_1.default());
connection_1.default();
server.use(routes_1.default);
server.listen(process.env.PORT || 3333);
