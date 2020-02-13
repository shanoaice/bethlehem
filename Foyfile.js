const { task, desc } = require('foy')

desc('Build bethlehem with tsdx')
task('build', async ctx => {
  await ctx.exec('tsdx build --format cjs,esm,umd --name B')
})

desc('Build the docs with TypeDocs')
task('build:docs', async ctx => {
  await ctx.exec('typedoc src')
  await ctx.fs.writeFile('./docs/.nojekyll', '', {
    flag: 'w+'
  })
})

desc('Run tests with ava and generate coverage reports')
task('test:coverage', async ctx => {
  await ctx.exec(
    'c8 --exclude "{{docs,dist,benchmark,coverage}/**/*,Foyfile.js}" --all ava --timeout 2m'
  )

  await ctx.exec('c8 report -r lcov')
})

desc('Lint all sourcecodes with XO')
task('lint', async ctx => {
  await ctx.exec('xo')
})

desc('Run benchmarks')
task('benchmark', ['build'], async ctx => {
  await ctx.exec(
    'node benchmark/index.js -r benchmark/enable-power-assert.js > benchmark.md'
  )
})

desc('Run ava in verbose mode')
task('test', async ctx => {
  await ctx.exec('ava --verbose')
})
