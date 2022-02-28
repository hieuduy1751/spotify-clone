import { classToPlain, deserialize, Expose, serialize } from "class-transformer";
import { UiModel } from "../_ui_helper/ui-model";

export class ArtistFollowers extends UiModel {
  @Expose({ name: "href" })
  href!: string;

  @Expose({ name: "total" })
  total!: string;

  static fromJson(json: any): ArtistFollowers {
    return deserialize(ArtistFollowers, json);
  }

  serialize(): any {
    return serialize(this);
  }
  
  toPlain(): any {
    return classToPlain(this);
  }
}