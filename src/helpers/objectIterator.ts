function* objectIterator(this: object): Generator {
  const thisEntry = Object.entries(this)

  for (const entry of thisEntry) {
    yield entry
  }
}

export default objectIterator
