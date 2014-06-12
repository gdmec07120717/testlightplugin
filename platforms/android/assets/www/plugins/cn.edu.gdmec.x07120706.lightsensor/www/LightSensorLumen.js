cordova.define("cn.edu.gdmec.x07120706.lightsensor.LightSensorLumen", function(require, exports, module) {var LightSensorLumen = function(lumen, timestamp) {
  this.value = lumen;
  this.timestamp = timestamp || new Date().getTime();
};

module.exports = LightSensorLumen;
});
