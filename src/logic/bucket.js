module.exports = class extends think.Logic {
  indexAction() {

  }

  bucketsAction () {
    this.allowMethods = 'get'
  }

  domainAction () {
    this.allowMethods = 'get'
    this.rules = {
      bucket: {
        required: true,
        string: true,
        method: 'GET'
      }
    }
  }

  createActio () {
    this.allowMethods = 'post'
  }
};
