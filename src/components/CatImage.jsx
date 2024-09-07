import React from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

function CatImage() {
  const [cat, setCat] = useState(null);

  async function getData() {
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data;
      setCat(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleClick() {
    setCat(null);
    getData();
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Random Cat Image</h1>
      <div className={styles.inner}>
        {!cat && <p className={styles.load_msg}>Loading...</p>}
        {cat && (
          <img className={styles.image} src={cat.url} alt={`cat-${cat.id}`} />
        )}
      </div>
      <button className={styles.btn_load} onClick={handleClick}>
        Load New Image
      </button>
    </div>
  );
}

export default CatImage;
