export const classNames = (...classes) => classes.filter(Boolean).join(' ')

export const formatDate = (date) => {
  const d = date instanceof Date ? date : new Date(date)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const truncate = (text, length = 120) =>
  text && text.length > length ? `${text.slice(0, length).trim()}…` : text

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
