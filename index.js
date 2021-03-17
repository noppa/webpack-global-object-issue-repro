async function main() {
  await import('./a').a()
  await import('./b').b()
}
main()