import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  
  // Creamos una acción con Redux con la función dispatch
  // el key type es obligatorio
  // el payload es el objeto que se desea enviar en la acción.
  
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title: title
    }
  })

}

const initialState = [
  {
    "title": "Despacito",
  },
  {
    "title": "One more time",
  },
  {
    "title": "Echame la culpa",
  }
]


// Creamos un store de Redux
// Inicializamos el estado inicial

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// Creamos un template html y mostramos el estado en en la pagina
const $container = document.getElementById('playlist');

// Obtenemos el estado y lo asignamos a una constante
const playlist = store.getState();

playlist.forEach((item) => {
  const template = document.createElement('p');
  template.textContent = item.title;
  $container.appendChild(template);
})

// Mostrar el estado en consola
console.log(store.getState())