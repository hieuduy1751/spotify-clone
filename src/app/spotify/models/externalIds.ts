import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class ExternalIds {
  @Expose({name: 'isrc'})
  isrc!: string;

  static fromJson(json: any): ExternalIds {
    return deserialize(ExternalIds, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}