import styles from './ToggleView.module.less';

type ToggleViewProps = {
  view: 'characters' | 'episodes';
  onChange: (view: 'characters' | 'episodes') => void;
};

const ToggleView: React.FC<ToggleViewProps> = ({ view, onChange }) => {
  return (
    <div className={styles.toggleButtons}>
      <button
        className={view === 'characters' ? styles.active : ''}
        onClick={() => onChange('characters')}
      >
        Characters
      </button>
      <button
        className={view === 'episodes' ? styles.active : ''}
        onClick={() => onChange('episodes')}
      >
        Episodes
      </button>
    </div>
  );
};

export default ToggleView;
