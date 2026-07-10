import type { ConventionSlug } from '../../../data/types'
import { CONVENTIONS } from '../../../data/conventions'
import styles from './Chrome.module.css'

export default function NotSharedRibbon({
  notSharedWith,
}: {
  notSharedWith: 'symposium' | ConventionSlug[]
}) {
  const target =
    notSharedWith === 'symposium'
      ? 'Symposium'
      : notSharedWith.map((slug) => CONVENTIONS[slug].abbr).join(' / ')
  return <span className={styles.ribbon}>Not shared with {target}</span>
}
