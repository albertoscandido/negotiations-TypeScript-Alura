export function domInjector(selector: string) {
  return function (
    target: any,
    propertyKey: string,
  ) {
    let elemento: HTMLElement;
    const getter = function() {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(selector);
        console.log(`buscando elemento : ${selector} para injetar em ${propertyKey}`)
      }
      return elemento;
    }

    Object.defineProperty(
      target,
      propertyKey,
      { get: getter }
    );
  }
}