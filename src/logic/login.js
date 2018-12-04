module.exports = class extends think.Logic {
  indexAction() {
    this.allowMethods = 'post'
    let rules = {
      username: {
        string: true,
        required: true,
        trim: true
      },
      password: {
        string: true,
        required: true
      }
    }
    let flag = this.validate(rules)
    if(!flag){
      return this.fail('validate error', this.validateErrors)
    }
  }
};
