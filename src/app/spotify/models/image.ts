import { UiModel } from './_ui_helper/ui-model';
import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class Image extends UiModel{
  @Expose({name: 'height'})
  height?: string;

  @Expose({name: 'url'})
  url!: string;

  @Expose({name: 'width'})
  width?: string;

  static fromJson(json: any): Image {
    return deserialize(Image, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}