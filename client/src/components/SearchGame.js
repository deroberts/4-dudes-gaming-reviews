import React, { useState } from 'react';
import { TextInput, Button } from 'grommet';
import { searchGameByName } from '../utils/Rawgapi';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleSearch = async () => {
    const data = await searchGameByName(query);
    setResults(data);
    setShowAll(false); // reset showAll to false when new search is performed
  };

  return (
    <div>
      <TextInput
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button label="Search/Hide" onClick={handleSearch} />
      <ul>
        {results.slice(0, 3).map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
        {!showAll && results.length > 3 && (
          <Button label="Show more" onClick={() => setShowAll(true)} />
        )}
        {showAll && results.slice(3).map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
