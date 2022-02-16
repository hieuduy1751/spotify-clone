import { UiModel } from './../_ui_helper/ui-model';
import { classToPlain, deserialize, Expose, serialize } from "class-transformer";

export class PlaylistFollowers extends UiModel{
  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "total" })
  total!: number;

  static fromJson(json: any): PlaylistFollowers {
    return deserialize(PlaylistFollowers, json);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}