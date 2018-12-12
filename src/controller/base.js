module.exports = class extends think.Controller {
  __before () {
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Headers', 'authorization,content-type,x-requested-with,Origin,Accept');
    this.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS');
    this.header('Access-Control-Allow-Credentials', 'true');
  }
};
