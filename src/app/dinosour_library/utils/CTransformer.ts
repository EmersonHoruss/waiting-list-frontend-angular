import {
  plainToClass,
  classToPlain,
  ClassConstructor,
} from 'class-transformer';

export abstract class CTransformer {
  public static toPlain<T>(clsObject: T): Object {
    return classToPlain(clsObject);
  }
  public static toClass<T>(cls: ClassConstructor<T>, plainObj: Object): T {
    return plainToClass(cls, plainObj);
  }
}
