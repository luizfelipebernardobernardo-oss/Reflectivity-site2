window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
const helmet = require("helmet");

app.use(helmet());