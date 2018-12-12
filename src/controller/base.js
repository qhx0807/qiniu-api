module.exports = class extends think.Controller {
  __before () {
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Headers', 'x-requested-with');
    this.header('Access-Control-Request-Method', 'GET,POST,PUT,DELETE');
    this.header('Access-Control-Allow-Credentials', 'true');
  }
};
