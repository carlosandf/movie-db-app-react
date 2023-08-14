import { SearchIcon } from '../icons/icons.tsx'
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles['main-title']}>
        <a href="/">MovieApp</a>
      </h1>
      <form className={styles.search}>
        <input placeholder="Buscar..." type="text" />
        <button>
          <SearchIcon color='#1762ee' width='1.7rem'/>
        </button>
      </form>
    </header>
  )
}
