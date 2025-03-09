import { Bookmarklet } from "@/components/Bookmarklet";
import { WebComponent } from "@/utils/WebComponent";

export class BookmarkletRenderer {
  constructor() {
    WebComponent.defineReactComponent(<Bookmarklet />, "x-bookmarklet");
  }

  public render() {
    const bookmarklet = document.querySelector("x-bookmarklet");

    if (bookmarklet) {
      bookmarklet.remove();
    }

    document.body.prepend(document.createElement("x-bookmarklet"));
  }
}
