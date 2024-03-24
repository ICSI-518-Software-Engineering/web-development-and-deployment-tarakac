const uploadFL = require("../utils/helpers/fileUpload.helper");

exports.imageUpload = async (req, res) => {
  try {
    const { filename } = req.body;
    const urlsign = await uploadFL(filename, "image/jpeg || image/png");
    res.json({ url:urlsign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
