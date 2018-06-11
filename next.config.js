const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  // some configuration
  assetPrefix: isProduction ? "/trapphusvalet" : ""
  // another configuration
};
