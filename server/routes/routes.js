const express = require("express");
module.exports.routers = (app) => {
  app.use(express.json({ extended: true, limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use('/api/auth', require('./user.route'))
  app.use('/api/depth', require('./details/depth.route'))
  app.use('/api/dobor', require('./details/dobor.route'))
  app.use('/api/framog_figure', require('./details/framogfigure.route'))
  app.use('/api/framog_type', require('./details/framogtype.route'))
  app.use('/api/layer', require('./details/layer.route'))
  app.use('/api/jamb', require('./details/jamb.route'))
  app.use('/api/ornament_figure', require('./details/ornamentfigure.route'))
  app.use('/api/lock', require('./details/lock.route'))
  app.use('/api/doortype', require('./details/doortype.route'))
  app.use('/api/client', require('./client.route'))
  app.use('/api/glass_count', require('./details/glasscount.route'))
};