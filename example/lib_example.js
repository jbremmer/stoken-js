const { computeCode } = require("..");

(async _ => {
  try {

    const code = await computeCode(
      "252503079680743142131101346153112272336172670304467711744173124152503452716757206"
    );

    console.log(code);

  } catch (error) {
    console.error(error);
  }
})();
