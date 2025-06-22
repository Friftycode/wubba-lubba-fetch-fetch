import { useEffect, useState } from 'react';
import {
  fetchRickAndMortyCharacters,
  fetchRickAndMortyEpisodes,
  fetchRickAndMortyLocations,
  type RMCharacter,
  type RMEpisode,
  type RMLocation,
} from '../utils/api';
import styles from './List.module.less';
import placeholder from '../../assets/no-image-300x300.jpeg';

type ListProps = {
  view: 'characters' | 'episodes' | 'locations';
};

const PAGE_SIZE = 50;

const List = ({ view }: ListProps) => {
  const [chars, setChars] = useState<RMCharacter[]>([]);
  const [episodes, setEpisodes] = useState<RMEpisode[]>([]);
  const [locations, setLocations] = useState<RMLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPage(0);

    const fetchData = async () => {
      try {
        if (view === 'characters') {
          const data = await fetchRickAndMortyCharacters();
          setChars(data);
        } else if (view === 'episodes') {
          const data = await fetchRickAndMortyEpisodes();
          setEpisodes(data);
        } else if (view === 'locations') {
          const data = await fetchRickAndMortyLocations();
          setLocations(data);
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

  let data: RMCharacter[] | RMEpisode[] | RMLocation[] = [];
  if (view === 'characters') data = chars;
  if (view === 'episodes') data = episodes;
  if (view === 'locations') data = locations;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const visiblePages = Math.min(3, totalPages);
    const pageButtons = [];

    for (let i = 0; i < visiblePages; i++) {
      pageButtons.push(
        <button key={i} onClick={() => setPage(i)}>
          {i + 1}
        </button>
      );
    }

    if (totalPages > 3) {
      pageButtons.push(
        <span key="ellipsis"> ... </span>,
        <button key="last" onClick={() => setPage(totalPages - 1)}>
          {totalPages}
        </button>
      );
    }

    return <div className={styles.nextPage}>{pageButtons}</div>;
  };

  return (
    <main>
      {loading && <p>Loading {view}…</p>}
      {error && <p style={{ color: 'var(--color-red)' }}>{error}</p>}

      {view === 'characters' && (
        <>
          <table className={styles.listTable}>
            <thead>
              <tr>
                <th>Interdimensional Mugshot</th>
                <th>Probably Their Name</th>
                <th>Planetary Genotype</th>
                <th>Gender Stereotype</th>
                <th>Currently Screwing Around In</th>
                <th>Breathing or Buried</th>
              </tr>
            </thead>
            <tbody>
              {chars
                .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
                .map((c) => (
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
          {renderPagination()}
        </>
      )}

      {view === 'episodes' && (
        <>
          <table className={styles.listTable}>
            <thead>
              <tr>
                <th>Chronological Blip</th>
                <th>Title You’ll Forget Anyway</th>
                <th>Air Date, Woohoo</th>
                <th>Population of This Mess</th>
              </tr>
            </thead>
            <tbody>
              {episodes
                .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
                .map((ep) => (
                  <tr key={ep.id}>
                    <td>{ep.episode}</td>
                    <td>{ep.name}</td>
                    <td>{ep.air_date}</td>
                    <td>{ep.characters.length}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {renderPagination()}
        </>
      )}

      {view === 'locations' && (
        <>
          <table className={styles.listTable}>
            <thead>
              <tr>
                <th>Ugh, The Place</th>
                <th>What It Technically Is</th>
                <th>Dimensional Whatever</th>
              </tr>
            </thead>
            <tbody>
              {locations
                .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
                .map((loc) => (
                  <tr key={loc.id}>
                    <td>{loc.name}</td>
                    <td>{loc.type}</td>
                    <td>{loc.dimension}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {renderPagination()}
        </>
      )}
    </main>
  );
};

export default List;
