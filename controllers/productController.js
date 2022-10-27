const product = require("../models/productModel");
const multer = require("multer");
const csv = require("csvtojson");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `productData.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  console.log("multer is here");
  if (file.mimetype.includes("csv")) {
    cb(null, true);
  } else {
    cb("Not an excel! Please upload only excel.", false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserexcel = upload.single("excel");

exports.uploadFile = async (req, res)=> {
  const csvFilePath = "uploads/productData.csv";

 let savedData = await  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      return jsonObj
    });
 
  res.status(201).json({
    status: "success",
    message: 'Data has been uploaded',
    data: {
      savedData,
    },
  });
};
