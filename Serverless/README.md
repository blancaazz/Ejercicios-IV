# Serverless

## Ejercicio 1

*Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.*

En Vercel ya me había dado de alta previamente

![vercel](img/vercel.png)


## Ejercicio 2

*Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo.*

Primero he incluido este repositorio de ejercicios en Vercel. Lo siguiente es crear un directorio llamado api donde vamos a incluir las funciones.
Voy a realizar un ejemplo de la página de [vercel](https://vercel.com/docs/serverless-functions/introduction)
He realizado un ejemplo muy básico en el cual he creado una carpeta llamada nombre y dentro un fichero [nombre].js, de esa manera cuando se llame a https://ejercicios-iv-psi.vercel.app/api/nombre/arya aparecerá "Holi arya" y si cambiamos la última parte, aparecerá el nombre que le indiquemos.

## Ejercicio 3

*Tomar alguna de las funciones de prueba de Netlify, y hacer despliegues de prueba con el mismo.*

Primero me he registrado con github, dado permisos a netflify y, posteriormente, incluido el repositorio del proyecto (lecturas) y este de los ejercicios (ejercicios-iv). Dentro del repositorio de los ejercicios, en site settings, functions, he configurado que la carpeta en la que Netlify va a buscar las funciones serverless es mis-funciones.  
Cada fichero de JavaScript debe exportar un método handler. Netlify proporciona dos parámetros: event y context, cuando la función serverless es llamada, el handler recibe un objeto event.
Primero voy a hacer una función muy sencilla de ejemplo, en el fichero hola.js