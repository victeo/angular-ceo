var winston = require("winston");

function logProvider() {
  return winston.createLogger({
    level: "debug",
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
  });
}

const PROXY_CONF = [
    {
      context: ["/api"],
      target: "http://20.88.41.42",
      secure: false,
      changeOrigin: true
    }
  ];
  
  module.exports = PROXY_CONF;
  
        