import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const url = 'https://thronesapi.com/api/v2/Characters';

const Search = () => {
  const [characters, setCharacters] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [showResultToggle, setShowResultToggle] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    fetchApiData();
  }, []);

  const handleSearch = () => {
    const results = characters.filter((character) =>
      character.fullName
        .trim()
        .toLowerCase()
        .includes(searchString.toLowerCase())
    );
    if (results.length === 0) {
      setSearchResult([]);
      setShowResultToggle(true);
    } else {
      setSearchResult(results);
      setShowResultToggle(true);
    }
  };

  return (
    <section className={'search'}>
      <h1>Search for Characters</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <label htmlFor='search'>Enter character's name: </label>
          <input
            type='text'
            id='search'
            placeholder='Search'
            value={searchString}
            onChange={(e) => {
              setShowResultToggle(false);
              setSearchResult([]);
              setSearchString(e.target.value);
            }}
          />
          <button type={'submit'}>Search</button>
        </form>
      </div>
      {showResultToggle && searchResult.length ? (
        <div className={'characterCard'}>
          <img
            src={searchResult[0].imageUrl}
            alt={searchResult[0].fullName}
            height={220}
            width={200}
          />
          <h2>{searchResult[0].fullName}</h2>
        </div>
      ) : (
        showResultToggle && (
          <div>
            <p>No Character found</p>
          </div>
        )
      )}
    </section>
  );
};

export default Search;
