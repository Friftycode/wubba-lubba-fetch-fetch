import { useEffect, useState } from 'react';
import { fetchRickAndMortyCharacters, type RMCharacter } from '../utils/api';
import styles from './List.module.less';
import placeholder from '../assets/sample.avif';

const List = () => {
  const [chars, setChars] = useState<RMCharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRickAndMortyCharacters()
      .then((data) => {
        setChars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to load characters.');
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {loading && <p>Loading characters…</p>}
      {error && <p style={{ color: 'var(--color-red)' }}>{error}</p>}
      <table className={styles.listTable}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chars.map((c) => (
            <tr key={c.id}>
              <td>
                <img
                  src={c.image ?? placeholder}
                  alt={c.name}
                  width={50}
                  height={50}
                />
              </td>
              <td>{c.name}</td>
              <td>{c.species}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default List;
