const csv = require("csvtojson");

exports.getOverview = async (req, res, next) => {
  const jsonArray = await csv().fromFile("uploads/productData.csv");

  res.status(200).render("product", {
    title: "All Products",
    products: jsonArray,
  });
};

exports.getupload = async (req, res, next) => {
  res.status(200).render("upload", {
    title: "Upload Products",
    // products: jsonArray,
  });
};
