<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 📋 Guía de instalación y ejecución

### Requisitos
- Docker
- Docker Compose

```bash
# 1. Clonar el repositorio
git clone https://github.com/pablosayc21/posts-backend.git

# 2. Ingresar al directorio
cd posts-backend

# 3. Levantar el backend y MongoDB
docker-compose up --build
```
## Ejecución
El servidor corre en `http://localhost:3000/` o `http://127.0.0.1:3000/`. La aplicación se recargará automáticamente si hay algún cambio en los archivos. El frontend de la aplicación es el siguiente: https://github.com/pablosayc21/posts-frontend.git.


## Incluye

### Dependencias
| Dependencia | Versión | Propósito |
|------------|---------|-----------|
| NestJS | ^11.0.1 | Framework principal |
| MongoDB | ^8.21.0 | Base de datos NoSQL |
| Mongoose | ^8.21.0 | ODM para MongoDB |
| RxJS | ^7.8.1 | Programación reactiva |
| Class Validator | ^0.14.3 | Validación de datos |
| Class Transformer | ^0.5.1 | Transformación de objetos |
| TypeScript | ^5.7.3 | Superset de JavaScript |