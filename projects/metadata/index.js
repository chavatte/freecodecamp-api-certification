const multer = require("multer");

const uploadDir = "uploads/";
const upload = multer({ dest: uploadDir });

function fileAnalyse(req, res) {
  const { file } = req;
  if (!file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

  const { originalname: name, mimetype: type, size } = file;

  res.json({ name, type, size });
}

module.exports = { upload, fileAnalyse };
