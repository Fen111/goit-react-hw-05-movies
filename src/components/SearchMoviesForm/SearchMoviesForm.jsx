import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './SearchMoviesForm.module.css';

export default function SearchMoviesFrom({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    if (!query) {
      toast.error('Enter your search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleFormInput = event => setQuery(event.target.value);

  return (
    <>
      <form onSubmit={onFormSubmit} className={s.form}>
        <input
          name="form-input"
          value={query}
          onChange={handleFormInput}
          type="text"
          className={s.formInput}
          placeholder="Search for movies"
          autoComplete="on"
          autoFocus
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        draggablePercent={60}
      />
    </>
  );
}
