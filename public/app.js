$.ajax({
  url: '/github/user/repos?type=owner',
  method: 'GET'
})
.then(
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  },
  err => {
    console.error(err)
  })
