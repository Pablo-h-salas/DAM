Web App Full Stack Base - Ionic frontend
========================================

Proyecto basado en [Web App Full Stack Base](https://github.com/gotoiot/app-fullstack-base).

En esta extensión del proyecto se utiliza el framework ionic para realizar el frontend.

## Comenzando 🚀

Esta sección es una guía con los pasos esenciales para que puedas poner en marcha la aplicación.

### Instalar las dependencias

Para correr este proyecto es necesario que instales `Docker` y `Docker Compose`. 

En [este artículo](https://www.gotoiot.com/pages/articles/docker_installation_linux/) publicado en nuestra web están los detalles para instalar Docker y Docker Compose en una máquina Linux. Si querés instalar ambas herramientas en una Raspberry Pi podés seguir [este artículo](https://www.gotoiot.com/pages/articles/rpi_docker_installation) de nuestra web que te muestra todos los pasos necesarios.

En caso que quieras instalar las herramientas en otra plataforma o tengas algún incoveniente, podes leer la documentación oficial de [Docker](https://docs.docker.com/get-docker/) y también la de [Docker Compose](https://docs.docker.com/compose/install/).

Continua con la descarga del código cuando tengas las dependencias instaladas y funcionando.

### Ejecutar la aplicación

Para ejecutar la aplicación tenes que correr el comando `docker compose up` desde la raíz del proyecto. Este comando va a descargar las imágenes de Docker de node, de typescript, de la base datos y del admin de la DB, y luego ponerlas en funcionamiento. 

Para acceder al cliente web ingresa a a la URL [http://localhost:8100/](http://localhost:8100/) y para acceder al admin de la DB accedé a [localhost:8001/](http://localhost:8001/). 

Si pudiste acceder al cliente web y al administrador significa que la aplicación se encuentra corriendo bien. 

> Si te aparece un error la primera vez que corres la app, deteńe el proceso y volvé a iniciarla. Esto es debido a que el backend espera que la DB esté creada al iniciar, y en la primera ejecución puede no alcanzar a crearse. A partir de la segunda vez el problema queda solucionado.

### Interactuar con las paginas del proyecto
Una vez escrito http://localhost:8100/ nos encontramos el pagina HOME, alli se podra ver la opcion de ver los dispositivos disponibles. Esto nos redirige a la pagina http://localhost:8100/listado-dispositivos. Aqui veremos todos los dispositivos que se encuentran en la tabla dispositivos de la base de datos, se puede seleccionar sobre cada uno de ellos. 
Al seleccionar un dispositico nos redirige a una pagina como: http://localhost:8100/dispositivos/4. El numero al final de la URL representa el id del dispositivo seleccionado. En esta pagina hay un "button" que nos permite visualizar el historico de mediciones, llevandonos a una ruta del tipo http://localhost:8100/dispositivos/4/mediciones.

## Licencia 📄

Este proyecto está bajo Licencia ([MIT](https://choosealicense.com/licenses/mit/)). Podés ver el archivo [LICENSE.md](LICENSE.md) para más detalles sobre el uso de este material.
