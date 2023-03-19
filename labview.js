
import { boostrapServer } from "./labserv.js";
import { boostrapServerHtml } from "./html.js";

const main = async () => {
    const port = 3000;
    await boostrapServer(port)
    await boostrapServerHtml(port)
};

(async () => {
   await main();
})()

