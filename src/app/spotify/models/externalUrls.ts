import { UiModel } from './_ui_helper/ui-model';
import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class ExternalUlrs extends UiModel{
  @Expose({name: 'spotify'})
  spotify?: string;

  static fromJson(json: any): ExternalUlrs {
    return deserialize(ExternalUlrs, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}