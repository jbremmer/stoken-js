# STOKEN.js

STOKEN.js is a tokencode generator compatible with RSA SecurID 128-bit (AES) tokens. It's derived from  [libstoken](https://github.com/cernekee/stoken) through emscripten compilation to WASM.

*!Notice* current limitation - no support for password protected tokens.

Install:

    npm install 
Use:

    const stoken = require("stoken-js");
    const code   = await  computeCode("252...206");


License:

MIT
