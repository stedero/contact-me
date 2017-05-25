export class Util {

  static slugify(str: string) {
    return str ? str.toLowerCase().trim().replace(/\s+/g, '-') : '';
  }

}