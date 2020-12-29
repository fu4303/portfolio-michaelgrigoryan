const GITHUB_USERNAME = "MichaelGrigoryan25";
const GITHUB_BASE_URL = "https://github.com/";
const GITHUB_CARD_API_BASE_URL = "https://gh-card.dev/repos/";
const GITHUB_REPO_API_BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const GITHUB_USER_API_BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

window.onload = async () => {
  const githubReposRequest = await fetch(GITHUB_REPO_API_BASE_URL),
    githubImageRequest = await fetch(GITHUB_USER_API_BASE_URL),
    githubImageResponse = await githubImageRequest.json(),
    repoList = document.querySelector(".list-group"),
    githubImage = document.querySelector(".github-profile-picture"),
    favicon = document.createElement("link");

  var githubRepos = Array.from(await githubReposRequest.json());
  githubRepos = getRandom(githubRepos, 5);

  // Profile photo as favicon
  favicon.rel = "shortcut icon";
  favicon.type = "image/x-icon";
  favicon.href = githubImageResponse.avatar_url;
  document.head.appendChild(favicon);
  // Profile photo
  githubImage.src = githubImageResponse.avatar_url;

  githubRepos.forEach((repo) => {
    const li = document.createElement("li"),
      a = document.createElement("a"),
      img = document.createElement("img");

    const CardLink =
        GITHUB_CARD_API_BASE_URL + GITHUB_USERNAME + "/" + repo.name + ".svg",
      RepoLink = GITHUB_BASE_URL + GITHUB_USERNAME + "/" + repo.name;

    img.src = CardLink;

    li.classList.add("list-group-item");
    li.appendChild(img);

    a.appendChild(li);
    a.href = RepoLink;
    a.target = "_blank";

    repoList.prepend(a);
  });
};

// Script for contact form

const contactMeButton = document.querySelector(".contact-button");
const contactMeDiv = document.querySelector(".contactMe");
const contactMeCloseButton = document.querySelector(".form-close");
const main = document.querySelector(".main");

const openContactWindow = () => {
  const closeForm = () => {
    main.classList.remove("hidden");
    main.classList.add("fade-in");
    contactMeDiv.classList.add("hidden");
  };

  contactMeDiv.classList.remove("hidden");
  main.classList.add("hidden");
  main.classList.add("fade-in");
  contactMeCloseButton.addEventListener("click", closeForm);
};

contactMeButton.addEventListener("click", openContactWindow);
