const securid = require("../lib/securid");

const stoken_compute_code = securid.cwrap('stoken_compute_code', "string", ["string", "string"]);

securid['onRuntimeInitialized'] = _ => {

    try {
        const code = stoken_compute_code("252503079680743142131101346153112272336172670304467711744173124152503452716757206"/**, "pin" */);

        if ("ERR_TOKEN_GARBLED" === code) throw new Error("Token string provided is garbled");
        if (code.startsWith("ERR_")) throw new Error("Error while computing token"); 
        /** Possible codes: ERR_TOKEN_FAILED_SIZEOF | ERR_TOKEN_GARBLED | ERR_TOKEN_DECRYPT_FAILED*/

        console.log("Computed code: ", code);
    } catch (err) {
        console.log(err);
    }
}