const validateImage = (req, res, next) => {
  const image = req.file;
  if(!image) {
      return res.status(400).json({message: "Debe proporcionar exactamente 1 imagen"});
    }
  const allowFormats = ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"];
  if(!image || !allowFormats.includes(image.mimetype)) {
      return res.status(400).json({message: `El archivo ${image.filename} no es un formato de imagen válido.`})
  }
  next();
};

module.exports = {validateImage}