import nc from "next-connect";

function onError(err, req, res, next) {
  try {
    console.log('congrats you hit the error middleware');
    console.log(err, err.code);
    if(err.name === 'ValidationError') return err = handleValidationError(err, res);
    if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
  } catch(err) {
    res.status(500).send('An unknown error occurred.');
  }
  // console.error(err);
  // res.status(500).end(err.toString());
}

const handler = nc({
  onError: onError,
  onNoMatch: (req, res) => {
    res.status(404).send("Page is not found");
  },
})

//handle email or username duplicates
const handleDuplicateKeyError = (err, res) => {
  console.log("DuplicateValueError");
  const field = Object.keys(err.keyValue);
  const code = 409;
  res.status(code).send({message: "An account with that username/email already exists."});
}

export default handler