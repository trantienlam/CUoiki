// [GET] /admin/products
module.exports.index = (req, res) => {
  res.render("admin/pages/products/index", {
    pageTitle: "Trang danh sách sản phẩm",
  });
};