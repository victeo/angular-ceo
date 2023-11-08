const PROXY_CONF = [
    {
      context: ["/api/"],
      target: "http://20.88.41.42",
      secure: false,
      changeOrigin: true
    }
  ];
  
  module.exports = PROXY_CONF;
  
        