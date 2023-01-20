const allStories = [
  {
    thumbUrl: "https://media.gettyimages.com/id/1277094370/photo/low-angle-view-of-statue-against-sky.jpg?s=1024x1024&w=gi&k=20&c=sWhG9Nkx61lWSY2zwmsE1wg0Y_3OfQ7JBRoa-d1bS-Y=",
    imageUrl: "https://media.gettyimages.com/id/1277094370/photo/low-angle-view-of-statue-against-sky.jpg?s=1024x1024&w=gi&k=20&c=sWhG9Nkx61lWSY2zwmsE1wg0Y_3OfQ7JBRoa-d1bS-Y=",
    title: "Maddy",
  },

  {
    thumbUrl: "https://i.pinimg.com/236x/41/1e/6e/411e6e7300df7701290439ebe0bf8206.jpg",
    imageUrl: "https://i.pinimg.com/236x/41/1e/6e/411e6e7300df7701290439ebe0bf8206.jpg",
    title: "MadAjju",
  },

  {
    thumbUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    title: "itzme_Mad",
    
  },

  {
    thumbUrl: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg",
    imageUrl: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg",
    title: "Chinnu",
  },

  {
    thumbUrl: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg",
    imageUrl: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg",
    title: "Prince_Aj",
  },

  {
    thumbUrl: "https://images.pexels.com/photos/671549/pexels-photo-671549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl: "https://images.pexels.com/photos/671549/pexels-photo-671549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Madhavi",
  },

  {
    thumbUrl: "https://images.pexels.com/photos/1535288/pexels-photo-1535288.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageUrl: "https://images.pexels.com/photos/1535288/pexels-photo-1535288.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Appaji",
  },

  {
    thumbUrl: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageUrl: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "PuttU❤",
  },
];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".status-full");
const storyFullImage = document.querySelector(".status-full img");
const storyFullTitle = document.querySelector(".status-full .title");
const closeBtn = document.querySelector(".status-full .close-btn");
const leftArrow = document.querySelector(".status-full .left-arrow");
const rightArrow = document.querySelector(".status-full .right-arrow");

let currentIndex = 0;
let timer;

allStories.forEach((el, i) => {
  const content = document.createElement("div");
  content.classList.add("content");

  const img = document.createElement("img");
  img.setAttribute("src", el.thumbUrl);

  const name = document.createElement("p");
  name.classList.add("story_name");
  name.innerHTML = el.title;

  content.append(img, name);

  storiesContainer.appendChild(content);

  content.addEventListener("click", () => {
    currentIndex = i;
    storyFull.classList.add("active");
    storyFullImage.setAttribute("src", el.imageUrl);

    if (!el.title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = el.title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  });
});

closeBtn.addEventListener("click", () => {
  storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  }
});

const nextStory = () => {
  if (currentIndex < allStories.length - 1) {
    currentIndex += 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }
  }
};

rightArrow.addEventListener("click", () => {
  nextStory();
  clearInterval(timer);
  timer = setInterval(nextStory, 5000);
});
