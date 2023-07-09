const sendEmail = require("./nodemailer");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const from = req.body.email;
  const body = req.body.body;
  const subject = req.body.name;

  console.log(req.body);
  console.log(from);

  const { confirmation, err } = sendEmail(from, subject, body);

  if (err) {
    res.status(400).json({
      error: err,
    });
    return;
  }

  res.status(200).json({
    success: true,
  });

  console.log(confirmation);

  if (confirmation) {
    console.log(confirmation, "confirmation");
  }
});

module.exports = router;
