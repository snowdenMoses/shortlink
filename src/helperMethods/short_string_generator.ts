class ShortStringGenerator {
  public generateString () {
    const randomString = Math.random().toString(36).slice(2, 8)
    return randomString
  }
}

export default ShortStringGenerator
