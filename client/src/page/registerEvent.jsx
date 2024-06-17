import React, { useState } from 'react';
import EventService from '../API/EventService';

const RegisterEvent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обробка даних форми
    console.log('Email:', email);
    console.log('Name:', name);
  };




  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>Реєстрація</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Ім'я</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  container: {
    width: '100%',
    maxWidth: '500px', // Збільште максимальну ширину
    margin: '0 20px',  // Додайте трохи відступу з боків для мобільних пристроїв
    padding: '2rem',   // Збільште відступи для більшого інтервалу всередині контейнера
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '.5rem',
  },
  input: {
    width: '100%',
    padding: '.75rem', // Збільшіть внутрішні відступи для зручності введення
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem', // Збільшіть розмір шрифту
  },
  button: {
    padding: '.75rem 1.5rem', // Збільшіть внутрішні відступи кнопки
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem', // Збільшіть розмір шрифту кнопки
  },
};


export default RegisterEvent;