export interface MyContext {
  // Aquí puedes añadir propiedades al contexto, como información de usuario autenticado
  // user?: any;
}

export const context = async ({ req }: any): Promise<MyContext> => {
  // Lógica para inicializar el contexto (ej. leer headers de autorización)
  return {};
};
