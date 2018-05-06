function checkGithubURL(url) {
  // basic regex
  if (!/^https:\/\/github\.com\/[a-zA-Z0-9\-]{4,39}\/[a-zA-Z0-9\-]{3,100}\/?$/.test(url)) {
    return false
  }
  // 2) check if repo exist

  return true
}

function convertGithubURLtoTarballURL(url) { 
  return "https://api.github.com/repos/"+url.split("/").slice(-2).join("/")+"/tarball/master"
}

function updateLink(url) {
  newURL = convertGithubURLtoTarballURL(url)

  theLink = document.getElementById('link')
  theLink.href = newURL 
  theLink.innerHTML = newURL 
  document.getElementById('info').innerHTML = ''
}

function updateInfo() {
  document.getElementById('info').innerHTML = 'Invalid link, check again'
  document.getElementById('link').innerHTML = ''
}

function enterURL(url) {
  console.log(url)
  if (!checkGithubURL(url)) {
    updateInfo()
  }else{
    updateLink(url)
  }
}

var elem = document.getElementById('inputField');
elem.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
    enterURL(elem.value)
  }
});
