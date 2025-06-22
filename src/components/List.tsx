import { useEffect, useState } from 'react';
import {
  fetchRickAndMortyCharacters,
  fetchRickAndMortyEpisodes,
  type RMCharacter,
  type RMEpisode,
} from '../utils/api';
import styles from './List.module.less';
import placeholder from '../../assets/no-image-300x300.jpeg';

type ListProps = {
  view: 'characters' | 'episodes';
};

const List = ({ view }: ListProps) => {
  const [chars, setChars] = useState<RMCharacter[]>([]);
  const [episodes, setEpisodes] = useState<RMEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        if (view === 'characters') {
          const data = await fetchRickAndMortyCharacters();
          setChars(data);
        } else {
          const data = await fetchRickAndMortyEpisodes();
          setEpisodes(data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [view]);

  return (
    <main>
      {loading && <p>Loading {view}…</p>}
      {error && <p style={{ color: 'var(--color-red)' }}>{error}</p>}

      {view === 'characters' && (
        <table className={styles.listTable}>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Species</th>
              <th>Gender</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {chars.map((c) => (
              <tr key={c.id}>
                <td>
                  <img
                    src={c.image || placeholder}
                    alt={c.name}
                    width={50}
                    height={50}
                  />
                </td>
                <td>{c.name}</td>
                <td>{c.species}</td>
                <td>{c.gender}</td>
                <td>
                  <div className={styles.labelRow}>
                    <span>Last known:</span>
                    <span>{c.location.name}</span>
                  </div>
                  <div className={styles.labelRow}>
                    <span>Origin:</span>
                    <span>{c.origin.name}</span>
                  </div>
                </td>
                <td>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {view === 'episodes' && (
        <table className={styles.listTable}>
          <thead>
            <tr>
              <th>Episode</th>
              <th>Name</th>
              <th>Air Date</th>
              <th>Character Count</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((ep) => (
              <tr key={ep.id}>
                <td>{ep.episode}</td>
                <td>{ep.name}</td>
                <td>{ep.air_date}</td>
                <td>{ep.characters.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default List;
