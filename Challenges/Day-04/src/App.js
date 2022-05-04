import React from 'react';
import './App.css';

/* Components */
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <div className="accordion-container">
        <Accordion
          title="¿Que es react?"
          content="React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."
        />

        <Accordion
          title="¿Qué lenguaje utiliza React?"
          content="Para evitar esto, React propone una arquitectura basada en componentes, que son piezas de código en las que se utiliza HTML, CSS y Javascript, de modo que contienen tanto la lógica como la presentación."
        />

        <Accordion
          title="¿Por que trabajar con React?"
          content="La principal ventaja de React es poder generar el DOM (“Modelo de Objetos del Documento”, estructura de los elementos que se generan en el navegador web al cargar una página) de forma dinámica."
        />

        <Accordion
          title="¿¿Qué arquitectura usa React?"
          content="React maneja una arquitectura Llamada Flux, que es similar en a MVC ya que también contiene , su modelo, vista y controladores pero esta pensada en un flujo de datos unidireccional."
        />

        <Accordion
          title="¿Qué patrón de diseño usa React?"
          content="Render props es un patrón de diseño para componentes de react, esto quiere decir que es una guía de como hacer un componente que cumple ciertas características de implementación."
        />

        <Accordion
          title="¿Por qué React es una librería y no un framework?"
          content="React permite organizar el código en base a componentes reutilizables. Esos componentes tienen una vista, expresada en código JSX, que es capaz de reaccionar a cambios en los datos que manejan esos componentes. Nada más que eso, por tanto hasta aquí está claro que React no es un framework."
        />

        <Accordion
          title="¿Por qué React es tan popular?"
          content="ReactJS es popular por que viene a mostrar un manejo práctico y mejorado del desarrollo web. Aunque es verdad que otras librerías hacen cosas similares por ejemplo VueJs y Angular, entre otros, por detrás de ReactJS esta Facebook."
        />

      </div>
    </div>
  );
}

export default App;
