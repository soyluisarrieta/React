# Mis notas

Curso: [Aprendiendo React](https://github.com/midudev/aprendiendo-react)  
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

Otra forma de renderizar un fragmento de manera más limpia es:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <button>Botón 1</button>
    <button>Botón 2</button>
    <button>Botón 3</button>
  </>
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

#### Clases en JSX

Como todo el JSX es Javascript, `class` es una palabra reservada del lenguaje, por lo tanto en JSX se debe definir como `className`

#### Eventos en JSX

**OnClick:** Se ejecuta algo cuando se ejecuta el evento click declarado en el elemento

```javascript
<button onClick={() => console.log('Click!')}></button>
```

#### Enviar y recibir propiedades

```javascript
<Button btnLabel='Aceptar'>
```

```javascript
function Button({ btnLabel }) {
  return (
    <React.Fragment>
      <button>{btnLabel}</button>
    </React.Fragment>
  );
}

export default Button;
```

#### La propiedad Children

```javascript
<Button>Aceptar</Button>
```

```javascript
function Button({ children }) {
  return (
    <React.Fragment>
      <button>{children}</button>
    </React.Fragment>
  );
}

export default Button;
```

## Renderizado de listas

Gracias a que en React todo es Javascript, podemos utilizar métodos que nos permitan recorrer objetos, arrays, etc...

```javascript
function ButtonList() {
  const buttons = [
    { text: 'Button 1' },
    { text: 'Button 2' },
    { text: 'Button 3' },
    { text: 'Button 4' },
  ];
  return (
    <>
      {buttons.map((button) => (
        <button>{button.text}</button>
      ))}
    </>
  );
}

export default Button;
```

## Los Hooks en React

### useState

Permite a React crear una variable que puede cambiar su estado. Los hooks deben ser importados y creados de la siguiente manera:

```javascript
import { useState } from 'react'

export funtion TwitterFollowCard() {
  const state = useState(false) // Devuelve un arreglo y se puede inicializar, en este caso en false

  const isFollowing = state[0] // 1. Almacena el estado actual
  const setIsFollowing = state[1] // 2. Función para cambiar el estado
  ...
}
```

La manera más común de crear un estado es de la siguiente manera:

```javascript
import { useState } from 'react'

export funtion TwitterFollowCard() {
  const [isFollowing, setIsFollowing] = useState(false)
  ...
}
```

> ### ❗ **IMPORTANTE** 
> 
> Los Setters deben ser algo interno del componente, esta es una práctica muy común y en general es una mala práctica enviarlo a un componente o función. En su lugar, se recomienda pasar la función de actualización de estado como prop a través de los componentes padres.
> 
> **La razón principal** es que, al pasar el setter directamente a un componente hijo, ese componente puede actualizar el estado sin pasar por los componentes intermedios. Esto puede hacer que sea más difícil de rastrear y depurar problemas en la lógica del estado.
> 
> Además, pasar el setter directamente a un componente hijo puede hacer que ese componente sea demasiado dependiente del estado y, por lo tanto, menos reutilizable. Si en algún momento se desea cambiar la forma en que se maneja el estado, se tendría que hacer cambios en todos los componentes que utilizan el setter directamente.
> 
> En lugar de pasar el setter directamente, es mejor pasar una función que actualice el estado a través de los componentes intermedios. De esta manera, se puede controlar mejor la lógica del estado y mantener la flexibilidad y reutilización de los componentes.

### useEffect

Permite ejecutar código arbitrario cuando el componente es renderizado y opcionalmente cada vez que cambia una alguna dependencia establecida

```javascript
import { useState } from 'react';

useEffect(() => {
  document.body.classList.toggle('bg-red-500', dependency);

  // Cleanup
  return () => {
    document.body.classList.remove('bg-red-500');
  };
}, [dependency]);
```

### useRef

Permite crear una referencia mutable que persiste a través de re-renderizaciones y que puede ser utilizada para acceder a un elemento del DOM o para almacenar cualquier otro valor mutable.

```javascript
import { useRef } from 'react'

function App () {
  const countRef = useRef(0) // Inicializamos la referencia con el valor 0

  function incrementCount () {
    countRef.current += 1 // Modificamos el valor de la referencia
    console.log('countRef:', countRef.current) // Imprimimos el valor actualizado e incrementado

    // -----------------------------

    let autoincrement = 0 // Inicializamos la referencia con el valor 0
    autoincrement++ // Sumamos +1
    console.log('i:', autoincrement) // Siempre imprime el valor 1

    console.log('\n\n')
  }

  return (
    <div>
      <button onClick={incrementCount}>Incrementar contador</button>
    </div>
  )
}
export default App
```

### useMemo y useCallback

`useMemo` permite memorizar valores calculados y `useCallback` permite memorizar funciones creadas, de tal manera que no se recalcule o vuelva a crear en cada renderizado a menos que sus dependencias cambien. Ambos hooks son utilizados para optimizar el rendimiento de las aplicaciones React.

```javascript
// Verificar si se realizó una búqueda de películas
// dependiendo de si 'search' cambia
const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])
```

```javascript
// Verificar si se debe organizar en orden alfabético las películas
// Dependiendo si 'sort' o 'movies' cambian
const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])
```

> La principal diferencia entre useMemo y useCallback es que useMemo se utiliza para memoizar un valor computado a partir de una función, mientras que useCallback se utiliza para memoizar una función en sí misma.

### useId

Permite generar un identificador único y persistente a través de re-renderizaciones, que puede ser utilizado para identificar de forma única un elemento del DOM o cualquier otra entidad mutable en una aplicación.



```javascript

import { useId } from 'react'

function App () {
  const minPriceFilterId = useId() // genera la id

  return (
    <>
      <label htmlFor={minPriceFilterId}>Price</label>
        <input
          id={minPriceFilterId}
          type='range'
          min='0'
          max='1000'
        />
    </>
  )
}

```