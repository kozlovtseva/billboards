const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://213.139.209.229:8002",
            changeOrigin: true,
        })
    );
    app.listen(3000);
};
