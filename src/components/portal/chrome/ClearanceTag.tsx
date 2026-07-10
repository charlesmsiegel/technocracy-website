import type { Clearance } from '../../../data/types'
import styles from './Chrome.module.css'

const LABEL: Record<Clearance, string> = {
  internal: 'Internal',
  restricted: 'Restricted',
  'eyes-only': 'Eyes Only',
}

const CLASS: Record<Clearance, string> = {
  internal: styles.clearanceInternal,
  restricted: styles.clearanceRestricted,
  'eyes-only': styles.clearanceEyesOnly,
}

export default function ClearanceTag({ clearance }: { clearance: Clearance }) {
  return <span className={CLASS[clearance]}>{LABEL[clearance]}</span>
}
