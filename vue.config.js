module.exports = {
  pages: {
    index: {
      entry: 'src/entry-point/index/main.js', //entry for the public page
      template: 'public/index.html', // source template
      filename: 'index.html' // output as dist/*
    },
    signin: {
      entry: 'src/entry-point/signin/main.js',
      template: 'public/signin.html',
      filename: 'signin.html'
    }
  }
}
