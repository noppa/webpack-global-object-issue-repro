async function load() {
  (await import('./chunk')).a()
}
document.getElementById('load').onclick = load