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

La sintaxis de JSX la veré mediante voy practicando

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

Antes que nada, **es muy importante de que el nombre de los componentes sean PascalCase**. Existen otros tipos como:

- PascalCase: La primera letra de cada palabra es mayúscula
- cameCase: La primera letra de cada palabra es mayúscula excepto la primera palabra
- snake_case: Todo en minúsculas pero separados por guión bajo
- kebab-case: Todo en minúculas pero separado por guiones

### Crear componente

Por defecto Vite nos genera un componente en el archivo "./src/App.jsx", pero un componente es básicamente esto:

```javascript
export function App() {
  return (
    <React.Fragment>
      <button>Botón 1</button>
      <button>Botón 2</button>
      <button>Botón 3</button>
    </React.Fragment>
  );
}
```

Se exporta la función que retorna todo el componente pero también se puede hacer de la siguiente manera:

```javascript
function App() {
  return (
    <React.Fragment>
      <button>Botón 1</button>
      <button>Botón 2</button>
      <button>Botón 3</button>
    </React.Fragment>
  );
}

export default App;
```

Este componente se puede importar en los lugares donde queremos renderizar el componente, como por ejemplo en la raíz que se encuentra en "./src/main.jsx":

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

// Se importa
import App from './App';

// Se renderiza
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## Estilos

### En linea

No es posible añadir estilos en el atributo style como se hace en html :

```html
<button style="background: blue; color: white;">Like</button>
```

En JSX, los estilos no pueden ser de tipo string sino un objeto:

```javascript
<button style={{ background: 'blue', color: 'white' }}>Like</button>
```

Las primeras llaves es para indicar a React que se insertará código de JS en lugar de string, las segundas llaves es para crear el objeto de js.

**Importante:** No usar Kabab-case como por ejemplo `background-color`, en este caso se usa camelCase: `backgroundColor`

### En archivo .css

En este caso se importa al componente en la parte superior:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importamos estilos globales en el punto de entrada
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

#### Clases JSX

Como todo el JSX es Javascript, `class` es una palabra reservada del lenguaje, por lo tanto en JSX se debe definir como `className`
