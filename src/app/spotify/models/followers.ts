import { classToPlain, deserialize, Expose, serialize } from "class-transformer";
import { UiModel } from "./_ui_helper/ui-model";

export class Followers extends UiModel{
  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "total" })
  total!: number;

  static fromJson(json: any): Followers{
    return deserialize(Followers, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}