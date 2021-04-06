import Form from './components/Form';

import styles from './App.module.css';


function App() {
  return (
    <div className={styles.app}>
      <aside className={styles.aside}>
        <Form />
      </aside>
      <main className={styles.main}>
        Tuk si predstavi che e gotovo :)
        <br />
        I Selektite sushto pls
      </main>
    </div>
  );
}

export default App;
