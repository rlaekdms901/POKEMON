import style from './style.module.css';
import header from './assets/header.png';
import dummy from './dummy.js';
import './grid.css';

function App() {
  return (
    <>
      <img className={style.styleImg} src={header} alt="header" />
      <div className="grid-container">
        {dummy.map((item) => (
          <div className="grid-item" key={item.title}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <span>{item.type}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
