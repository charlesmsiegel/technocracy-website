/* The surveillance/audit log feed. Lines containing {operative} are
   interpolated with the logged-in session's name at render time — the
   rest is generic Union-wide monitoring noise, present whether or not
   anyone is reading it. */

export interface AuditLogEntry {
  id: string
  time: string
  line: string
  flagged?: boolean
}

export const AUDIT_LOG: AuditLogEntry[] = [
  { id: 'al-01', time: 'T-00:00:02', line: 'SESSION FOR {operative} — MONITORING ACTIVE' },
  { id: 'al-02', time: 'T-00:00:14', line: 'KEYSTROKE CADENCE — {operative} — WITHIN BASELINE' },
  { id: 'al-03', time: 'T-00:01:03', line: 'DASHBOARD ACCESS — CONSENSUS TELEMETRY VIEWED' },
  { id: 'al-04', time: 'T-00:02:47', line: 'OPERATIVE 4402-B — BADGE SCAN — LOUISVILLE MFG CAMPUS, EAST' },
  { id: 'al-05', time: 'T-00:03:19', line: 'FORM MX-2 SUBMITTED — ROUTED TO REVIEWING DESK' },
  { id: 'al-06', time: 'T-00:04:02', line: 'SESSION AUDIO SNAPSHOT ARCHIVED — ROUTINE INTERVAL' },
  { id: 'al-07', time: 'T-00:05:31', line: 'OPERATIVE 9910-A — TERMINAL IDLE 4m12s — NO ACTION REQUIRED' },
  { id: 'al-08', time: 'T-00:06:48', line: '{operative} — OPERATIONS BOARD VIEWED — NO CARDS MODIFIED' },
  { id: 'al-09', time: 'T-00:07:55', line: 'FACILITY HVAC — CANAVERAL — NOMINAL' },
  { id: 'al-10', time: 'T-00:09:12', line: 'ANOMALY — OPERATIVE 2217-C — PUPIL DILATION VARIANCE DURING BRIEFING PLAYBACK', flagged: true },
  { id: 'al-11', time: 'T-00:10:04', line: 'FORM RSP-3 REQUISITION — APPROVED, DAMIAN SCALE 2' },
  { id: 'al-12', time: 'T-00:11:36', line: 'CAFETERIA BADGE-IN VOLUME — WITHIN PROJECTION' },
  { id: 'al-13', time: 'T-00:12:50', line: '{operative} — HR PORTAL ACCESS — FORMS LIBRARY' },
  { id: 'al-14', time: 'T-00:14:07', line: 'OPERATIVE 5581-D — LOYALTY INDEX RECALCULATED — NO CHANGE' },
  { id: 'al-15', time: 'T-00:15:22', line: 'PERIMETER SENSOR SWEEP — NAIROBI HUB — CLEAR' },
  { id: 'al-16', time: 'T-00:16:40', line: 'ANOMALY — TERMINAL 118-B — LOGGED IN FROM TWO SITES SIMULTANEOUSLY, 6,417 KM APART — UNDER REVIEW', flagged: true },
  { id: 'al-17', time: 'T-00:18:03', line: 'FORM PX-1 FILED — PROCEDURAL RECOIL, MINOR — ROUTED' },
  { id: 'al-18', time: 'T-00:19:14', line: '{operative} — SEARCH QUERY LOGGED — RETAINED PER STANDARD POLICY' },
  { id: 'al-19', time: 'T-00:20:29', line: 'OPERATIVE 7741-C — DEFAULT DESIGNATION IN USE — IDENTITY VERIFICATION FLAGGED FOR FOLLOW-UP' },
  { id: 'al-20', time: 'T-00:22:01', line: 'MERCURY LOGISTICS — SAME-HOUR DISPATCH VOLUME — ABOVE PROJECTION, NO CAUSE FLAGGED' },
  { id: 'al-21', time: 'T-00:23:18', line: 'CONDITIONING REFRESH SCHEDULE — 41 PERSONNEL DUE THIS CYCLE' },
  { id: 'al-22', time: 'T-00:24:45', line: 'ANOMALY — CARD ve-13 — LOYALTY INDEX READS ABOVE CLEARANCE TIER BASELINE — FLAGGED FOR ROUTINE REVIEW', flagged: true },
  { id: 'al-23', time: 'T-00:26:02', line: '{operative} — TERMINATE SESSION BUTTON HOVERED — NO ACTION TAKEN' },
  { id: 'al-24', time: 'T-00:27:39', line: 'SENTINEL CONSTELLATION — 312/312 NOMINAL' },
  { id: 'al-25', time: 'T-00:29:11', line: 'FORM CD-4 REQUESTED — PUBLIC EXPLANATION, STANDARD TURNAROUND' },
  { id: 'al-26', time: 'T-00:30:50', line: 'OPERATIVE 3390-F — BIOMETRIC RE-VERIFICATION — PASSED' },
  { id: 'al-27', time: 'T-00:32:07', line: '{operative} — THIS ENTRY WAS LOGGED WHILE YOU WERE READING THE LOG' },
]

export function withOperative(line: string, operative: string): string {
  return line.replace(/\{operative\}/g, operative)
}
