async function load() {
  (await import('./chunk')).a()
}

load()