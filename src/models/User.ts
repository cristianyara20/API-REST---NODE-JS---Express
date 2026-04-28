export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

//Base de datos (Coleccion) simulada
export const users: User[] = [
  { id: 1, name: 'Juan Garcia', email: 'juan@sena.edu.co', age: 28 },
  { id: 2, name: 'Maria Lopez', email: 'maria@sena.edu.co', age: 32 },
  { id: 3, name: 'Carlos Rodriguez', email: 'carlos@sena.edu.co', age: 25 }
]; 