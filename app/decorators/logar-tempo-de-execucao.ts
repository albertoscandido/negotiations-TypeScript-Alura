export function logarTempoDeExecucao() {
  return function(
    // se chamado em um método estático, ele é a função construtora da classe. Se chamado num método que não é estático, ele irá retornar o Prototype daquela classe.
    target: any,
    // guarda nome do método
    propertyKey: string,
    // uma referência para o método original
    descriptor: PropertyDescriptor
  ) {
    //guarda método original
    const metodoOriginal = descriptor.value;    
    descriptor.value = function(...args: any[]) {
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos`)
      retorno
    };
    
    return descriptor;
  }
}