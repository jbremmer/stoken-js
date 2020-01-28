const securid = require("./lib/securid");

const stoken_compute_code = securid.cwrap("stoken_compute_code", "string", [
  "string",
  "string"
]);


exports.computeCode = (token, pin) => {
  
  return new Promise((resolve, reject) => {
    
    securid["onRuntimeInitialized"] = _ => {
      
      const code = stoken_compute_code(token, pin);

      switch (code) {
        case "ERR_TOKEN_GARBLED":
          reject(new Error("Token string provided is garbled"));
          break;
        case "ERR_TOKEN_FAILED_SIZEOF":
          reject(new Error("Failed to allocate memory for token."));
          break;
        case "ERR_TOKEN_DECRYPT_FAILED":
          reject(new Error("error while decrypting token."));
          break;

        default:
          resolve(code);
          break;
      }
    };

  });

};
