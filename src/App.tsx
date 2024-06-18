import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Cards } from "./components/Card";
import { Collapse } from "./components/Collapse";
import { Decomposition } from "./components/Decomposition";

const cards = [
  {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: {
      text: "Go somewhere",
      href: "#"
    },
    image: {
      src: "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
      alt: "Картинка"
    }
  },
  {
    title: "Card title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: {
      text: "About",
      href: "#"
    }
  },
  {
    title: "Card title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate, inventore molestias commodi qui exercitationem.",
    link: {
      text: "Go",
      href: "#"
    },
    image: {
      src: "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER+2&font=kelson",
      alt: "Картинка 2"
    }
  },
]

function App() {

  return (
    <>      
      <Router>
        <nav>
          <ul className="nav-ul">
            <li className="nav-ul-li"><Link to="/">Главная</Link></li>
            <li className="nav-ul-li"><Link to="/cards">Карточки</Link></li>
            <li className="nav-ul-li"><Link to="/decomposition">Декомпозиция</Link></li>
            <li className="nav-ul-li"><Link to="/collapse">Collapse</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="wrap">
              <h1>Задачи по теме "Композиция компонентов"</h1>
            </div>
          } />
          <Route path="/cards" element={<Cards list={cards} />} />
          <Route path="/decomposition" element={<Decomposition />} />
          <Route path="/collapse" element={<Collapse />} />
          {/* <Route path="/collapse" element={<Collapse collapsedLabel = "Развернуть" expandedLabel = "Свернуть" />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
