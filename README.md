# Mis notas

Autor del curso: [Miguel Angel Durán](https://youtu.be/7iobxzd_2wY)

## ¿Qué es React?

Es una biblioteca de Javascript para construir interfaces de usuarios siendo una biblioteca declarativa y basada en componentes

### Código Declarativo:

Describir con código lo que se quiere renderizar con nombres claros y menos verboso. Para entenderlo mejor, ver códigos con JSX.

### Código Imperativo:

Decirle a nuestra app que se comporte mediante una serie de ordenes o instrucciones y como consecuencia no escala cómodamente.

```javascript
// Obtener botón por TagName
const button = document.querySelector('button')

// Crear un evento click
button.addEventListener('click' fubction() {
  // Alertar que se está procesando
  alert("Procesando...")

  // ...
})
```

### Ejemplo:

#### Imperativo:

```javascript
  // Se pide que cree un botón
  createButton(){
    ...
  }
```

#### Declarativo:

```javascript
  // Se describe que es un botón
  Button(){
    ...
  }
```

### React CDN (Es imperativo)

Siendo React una biblioteca, es posible importarlo en cualquier sitio web creando la raíz del proyecto o componente utilizando un CDN de ReactDOM

```html
<div id="app"></div>
```

```javascript
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

// Crear raíz
const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);

// Renderiza el string
root.render('Hola React');
```

Para renderizar un elemento, es necesario importar un CDN de React para crear el elemento y enviarselo al método render

```javascript
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

// Raiz
const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);

// Crea el componente
const button = React.createElement(
  'button',
  { title: 'Valor de atributo' },
  'Contenido de elemento'
);

// Renderiza el string
root.render(button);
```

Pero para conseguir renderizar varios elementos, se necesita un contenedor padre que contenga todos los elementos

```javascript
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

// Raiz
const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);

// Crea el componente
const button1 = React.createElement(
  'button',
  { title: 'Valor de atributo' },
  'Contenido de elemento1'
);
const button2 = React.createElement(
  'button',
  { title: 'Valor de atributo' },
  'Contenido de elemento2'
);
const button3 = React.createElement(
  'button',
  { title: 'Valor de atributo' },
  'Contenido de elemento3'
);

// Envolvente
const div = React.createElement('div', null, [button1, button2, button3]);

// Renderiza el string
root.render(div);
```

Para envolverlo sin un elemento contenedor es posible usar un fragmento de react

```javascript
// Envolvente
const div = React.createElement(React.Fragment, null, [
  button1,
  button2,
  button3,
]);
```

### React JSX (es declarativo)

Para hacer que el código sea más legible y declarativo, se usa la sintaxis de JSX que se asemeja a HTML pero NO es HTML, es JSX que será compilado a JS imperativo. El ejemplo anterior de los 3 botones se vería así:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <button>Botón 1</button>
    <button>Botón 2</button>
    <button>Botón 3</button>
  </React.Fragment>
);
```

## Crear un proyecto

[create-react-app](https://create-react-app.dev/) es la forma oficial para crear un proyecto de React pero se ha estado quedando atras y ha salido una mejor alternativa mucho más rápida y actualizada.

### Vite

[Vite](https://vitejs.dev/) es un empaquetador de aplicaciones web compatible con React, Vue, Angular, etc...

```bash
  npm create vite@latest
```

Los pasos que hay que seguir son:

1. Nombre del proyecto.
2. React
3. Javascript + SWC

Una vez generado es necesario instalar las dependencia que generó Vite con:

```bash
npm install
```

Y para ejecutar el servidor:

```bash
npm run dev
```

## Componetización
