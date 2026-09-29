const colors = require("colors");

function logger(req, res, next) {
  const data = new Date().toISOString();

  console.log(
    `[${data}] ${req.method} ${req.url}`
  );

  res.on("finish", () => {
    const status = res.statusCode;

    let statusColor;

    if (status >= 200 && status < 300) {
      statusColor = colors.green(status);
    } else if (status >= 300 && status < 400) {
      statusColor = colors.yellow(status);
    } else if (status >= 400 && status < 500) {
      statusColor = colors.red(status);
    } else if (status >= 500) {
      statusColor = colors.bgRed.white(status);
    } else {
      statusColor = status;
    }

    console.log(
      `[${data}] ${req.method} ${req.url} → ${statusColor}`
    );
  });

  next();
}

module.exports = logger;
