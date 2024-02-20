import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import test from "../../postcss.base.config.cjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default test.getDefaultConfig(__dirname);
