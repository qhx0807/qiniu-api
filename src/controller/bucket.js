const qiniu = require('qiniu')
const Base = require('./base.js')

module.exports = class extends Base {

  constructor(ctx){
    super(ctx)
    this.qiniu_Mac = {
      "accessKey": "_iCkoUSbXhnN8AF8T8Mi1qBr-6z47dk-0iQs0C_r",
      "secretKey": "c7raaxbjXxadIaSU4PfSuMJMw1ICaoJuEjqXoW4-"
    }
    this.bucketService = think.service('bucket', this.qiniu_Mac)
  }

  async __before () {
    // const userInfo = await this.session('userInfo')
    // if (think.isEmpty(userInfo)) return this.fail(401, '请登录')
    // if (userInfo.accesskey && userInfo.secretkey) {
    //   this.qiniu_Mac = new qiniu.auth.digest.Mac(userInfo.accesskey, userInfo.secretkey)
    // }
  }

  indexAction () {
    return this.success(this.hostConfig.host_2)
  }

  async bucketsAction () {
    const result = await this.bucketService.getBUcketsList()
    return this.success(result)
  }

  async domainAction () {
    const result = await this.bucketService.domainList(bucketName)
    return this.success(result)
  }

  async createAction () {
    const { name, region } = this.post()
    const safeName = qiniu.util.urlsafeBase64Encode(name)
    const result = await this.bucketService.createAction(safeName, region)
    return this.success(result)
  }

  async dropAction () {
    const name = this.get('name')
    const result = this.bucketService.dropBucket(name)
    return this.success(result)
  }

}
