/* Flagship campuses — the handful of sites Consensus Holdings profiles by
   name. The full directory on the Locations page also lists every city
   with an open requisition, derived live from src/data/careers.ts. */

import type { FlagshipLocation } from './types'

export const FLAGSHIP_LOCATIONS: FlagshipLocation[] = [
  {
    id: 'louisville-hq',
    name: 'Global Headquarters',
    division: 'corporate',
    city: 'Louisville, KY',
    country: 'United States',
    region: 'North America',
    established: 'Established 1962',
    blurb:
      'The Office of the CEO, the Board, and the corporate functions that keep five divisions reporting on the same schedule all sit here, alongside Iterion\'s flagship manufacturing campus. Most visitors describe it as smaller than they expected. It is not.',
  },
  {
    id: 'louisville-manufacturing',
    name: 'Louisville Manufacturing Campus',
    division: 'iteration-x',
    city: 'Louisville, KY',
    country: 'United States',
    region: 'North America',
    established: 'Established 1962',
    blurb:
      'Iterion\'s original production floor and the origin of the unified production standard now deployed at 6,417 facilities worldwide. Ninety-seven consecutive on-schedule quarters and counting, tracked to the hour on a board visitors are asked not to photograph.',
  },
  {
    id: 'zurich-campus',
    name: 'Zurich Campus',
    division: 'syndicate',
    city: 'Zurich',
    country: 'Switzerland',
    region: 'Europe',
    established: 'Established 1978',
    blurb:
      'Exchequer Capital Group\'s private wealth and family office practice, and Progenera\'s European tissue-engineering research site, share this campus under a lease arrangement neither division has ever fully explained to the other.',
  },
  {
    id: 'geneva-governance',
    name: 'Geneva Governance Center',
    division: 'corporate',
    city: 'Geneva',
    country: 'Switzerland',
    region: 'Europe',
    established: 'Established 1966',
    blurb:
      'Host site of the Annual General Meeting, held every April without interruption. The building also houses the corporate archive, which is extensive, climate-controlled, and — per the last three audits — complete.',
  },
  {
    id: 'canaveral-campus',
    name: 'Canaveral Operations Campus',
    division: 'void-engineers',
    city: 'Canaveral, FL',
    country: 'United States',
    region: 'North America',
    established: 'Established 1969',
    blurb:
      'Celestine Aerospace\'s launch operations, satellite integration, and perimeter monitoring functions run from this campus, alongside the Extended Rotation deployment program. Launch cadence has never missed a posted window.',
  },
  {
    id: 'boston-research',
    name: 'Boston Research Campus',
    division: 'progenitors',
    city: 'Boston, MA',
    country: 'United States',
    region: 'North America',
    established: 'Established 1985',
    blurb:
      'Progenera\'s flagship regenerative therapies research site and the clinical home of the FACADE tissue-engineering platform. The building\'s badge logs show more after-hours access than any other Progenera facility, a pattern attributed to "enthusiasm."',
  },
  {
    id: 'nairobi-hub',
    name: 'Nairobi Regional Hub',
    division: 'new-world-order',
    city: 'Nairobi',
    country: 'Kenya',
    region: 'Middle East & Africa',
    established: 'Established 1994',
    blurb:
      'Nexus Worldwide Operations\' East Africa field-operations hub and the Global Health Facility\'s regional coordination center, run out of the same building on a shared elevator schedule that both teams insist works fine.',
  },
  {
    id: 'singapore-campus',
    name: 'Singapore Campus',
    division: 'new-world-order',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    established: 'Established 2001',
    blurb:
      'Nexus Worldwide Operations\' Southeast Asia field-compliance practice and Exchequer Capital\'s Asia-Pacific portfolio operations desk, one floor apart, with a shared cafeteria and, reportedly, very little shared conversation.',
  },
  {
    id: 'munich-lab',
    name: 'Munich Fabrication Lab',
    division: 'iteration-x',
    city: 'Munich',
    country: 'Germany',
    region: 'Europe',
    established: 'Established 1991',
    blurb:
      'Industrial nanotechnology research and clean-room fabrication for aerospace and medical partners across the Consensus Holdings portfolio, including materials work that Iterion has not yet named publicly.',
  },
  {
    id: 'sao-paulo-hub',
    name: 'São Paulo Distribution Hub',
    division: 'syndicate',
    city: 'São Paulo',
    country: 'Brazil',
    region: 'Latin America',
    established: 'Established 1999',
    blurb:
      'Mercury Logistics\' largest Latin American distribution center, running same-day delivery across the region alongside Exchequer Capital\'s infrastructure finance origination desk.',
  },
  {
    id: 'shanghai-lab',
    name: 'Shanghai Research Campus',
    division: 'progenitors',
    city: 'Shanghai',
    country: 'China',
    region: 'Asia-Pacific',
    established: 'Established 2005',
    blurb:
      'One of four global sites developing DermaTrue synthetic dermal substrates, and Iterion\'s advanced materials research lab, sharing a supply chain that both divisions describe, separately, as "efficient."',
  },
  {
    id: 'dubai-hub',
    name: 'Dubai Regional Hub',
    division: 'new-world-order',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East & Africa',
    established: 'Established 2008',
    blurb:
      'Nexus Worldwide Operations\' Gulf-region client services base and Exchequer Capital\'s market intelligence desk, coordinating institutional and crisis-response work across a genuinely wide territory.',
  },
]
