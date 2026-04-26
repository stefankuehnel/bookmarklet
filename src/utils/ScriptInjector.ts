export class ScriptInjector {
  private createScriptElement(
    id: HTMLScriptElement["id"],
    textContent: HTMLScriptElement["textContent"],
  ) {
    const htmlScriptElement = document.createElement("script");
    htmlScriptElement.id = id;
    htmlScriptElement.type = "module";
    htmlScriptElement.textContent = textContent;

    document.body.appendChild(htmlScriptElement);
  }

  public inject(
    id: HTMLScriptElement["id"],
    textContent: HTMLScriptElement["textContent"],
  ) {
    const scriptElement = document.querySelector<HTMLScriptElement>(`#${id}`);

    if (scriptElement) {
      scriptElement.remove();
    }

    this.createScriptElement(id, textContent);
  }
}
