export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  CURSOS: {
    LIST: "/cursos",
    DETAIL: (id) => `/cursos/${id}`,
    CREATE: "/cursos",
    UPDATE: (id) => `/cursos/${id}`,
    DELETE: (id) => `/cursos/${id}`,
  },
  DOCENTES: {
    LIST: "/docentes",
    DETAIL: (id) => `/docentes/${id}`,
    CREATE: "/docentes",
    UPDATE: (id) => `/docentes/${id}`,
    DELETE: (id) => `/docentes/${id}`,
  },
  ESTUDIANTES: {
    LIST: "/estudiantes",
    DETAIL: (id) => `/estudiantes/${id}`,
    CREATE: "/estudiantes",
    UPDATE: (id) => `/estudiantes/${id}`,
    DELETE: (id) => `/estudiantes/${id}`,
  },
  MATRICULAS: {
    LIST: "/matriculas",
    DETAIL: (id) => `/matriculas/${id}`,
    CREATE: "/matriculas",
    UPDATE: (id) => `/matriculas/${id}`,
    DELETE: (id) => `/matriculas/${id}`,
  },
  CALIFICACIONES: {
    LIST: "/calificaciones",
    DETAIL: (id) => `/calificaciones/${id}`,
    CREATE: "/calificaciones",
    UPDATE: (id) => `/calificaciones/${id}`,
    DELETE: (id) => `/calificaciones/${id}`,
  },
  ASIGNATURAS: {
    LIST: "/asignaturas",
    DETAIL: (id) => `/asignaturas/${id}`,
    CREATE: "/asignaturas",
    UPDATE: (id) => `/asignaturas/${id}`,
    DELETE: (id) => `/asignaturas/${id}`,
  },
  ASIGNACIONES: {
    LIST: "/asignaciones",
    DETAIL: (id) => `/asignaciones/${id}`,
    CREATE: "/asignaciones",
    UPDATE: (id) => `/asignaciones/${id}`,
    DELETE: (id) => `/asignaciones/${id}`,
  },
};

export default ENDPOINTS;
