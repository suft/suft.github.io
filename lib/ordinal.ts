const EMPTY = ''
const ST = 'st'
const ND = 'nd'
const RD = 'rd'
const TH = 'th'

const ordinal = (n: number): string => {
  // For non-numbers and weird numbers
  if (typeof n !== 'number' || isNaN(n) || n === Infinity || n === -Infinity) {
    return EMPTY
  }

  // For negative numbers, return blank (e.g. -1)
  if (n < 0) return EMPTY

  // For real numbers, return blank (e.g. 1.23)
  if (n % 1 !== 0) return EMPTY

  // For positive integers
  const [tens, hundreds] = [n % 10, n % 100]
  const pad = (x: number, suffix: string): string => `${x}${suffix}`

  if (hundreds === 11 || hundreds === 12 || hundreds === 13 ) return pad(n, TH)
  if (tens === 1 ) return pad(n, ST)
  if (tens === 2 ) return pad(n, ND)
  if (tens === 3 ) return pad(n, RD)

  return pad(n, TH)
}

export default ordinal