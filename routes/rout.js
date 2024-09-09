import { fortunes, tours, staff } from "../lib/data/info.js";




function home(req, res) {
  res.render("home", { name: "вот так вот" });
}
function about(req, res) {
  res.render("about", {
    fortunes: fortunes,
  });
}

const aboutId = (req, res, next) => {
  const i = 20;
  res.render("aboutId", {
    test: req.params.id,
    test1: req.params,
  });
};
const api = (req, res) => {
  res.status = 200;
  res.json(tours);
};
const testForm = (req,res)=>{
  res.render('testform')

}
const testFormPost = (req,res)=>{
  res.render('testform', {
    object: req.body.title
  })

}


const staf = (req, res, next) => {
  const cityStaff = staff[req.params.city];
  if (!cityStaff) return next(); // Если город не опознан, управление
  // передастся обработчику ошибки 404.
  const info = cityStaff[req.params.name];
  if (!info) return next(); // Если работник не опознан, управление
  // передастся обработчику ошибки 404.
  res.render("staffer", info);
};



const notFound = (req, res) => {
  res.status = "404";
  res.render("404", { layout: "notepage" }); //индивидуальный шаблон
};
const serverError = (error, req, res, next) => {
  console.error(error.message);
  res.status = "500";
  res.render("500", { layout: "notepage" });
};

export {testFormPost, home, about, notFound, serverError, aboutId, api, staf, testForm };
