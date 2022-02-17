import { classToPlain, deserialize, Expose, serialize } from 'class-transformer';
import { UiModel } from './_ui_helper/ui-model';
export class ExplicitContent extends UiModel{
  @Expose({ name: "filter_enabled" })
  filterEnabled!: boolean;

  @Expose({ name: "filter_locked" })
  filterLocked!: boolean;

  static fromJson(json: any): ExplicitContent{
    return deserialize(ExplicitContent, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}