const letter = {
  left: `Happy Valentine's Day, Isolde!\n\nI know this is already late, may pasabi-sabi pa ako kahapon na "ise-send ko mamaya 'yung akin" tapos makakatulog lang pala ako.\n\nI want to start this message by telling you that I really admire how vocal you are when it comes to your thoughts and feelings. Kasi hindi naman lahat ng tao may lakas ng loob para i-express 'yung nararamdaman/thoughts nila. Also, speaking of feelings/thoughts, hindi talaga ako sanay makatanggap/makabasa ng ganyan kaya I feel bad na hindi ko man lang kayang makapagsabi din sayo ng gusto kong sabihin.\n\nMost of the time, sasabihin ko lang na "na-speechless ako," which is true. Kasi no matter how hard I try to compose a message, hindi ko talaga kaya. Pero, I hope you know na I really appreciate lahat ng mga letters na sini-send mo sakin.`,
  right: `I honestly never thought I'd meet someone like you in my life. Someone steady, understanding, and so full of love. TBH, I do not regret creating a tiktok account, not even once. It was the very best thing that I've ever done (thank you so much, Saskia).\n\nYou made me feel safe and steady whenever things are loud inside my head. You became my source of happiness and pahinga. There's just something about you that makes things a lot easier and lighter, hindi ko alam kung it is the way you talk or if it's just YOU. Basta, you make things better.\n\nI hope you'll always be surrounded by people who love, cherish, and support you. Nandito lang ako palagi for you, whether you are at your lowest or highest. I'll always be your number one supporter. I hope you also know that I am always proud of you.\n\nAgain, Happy (belated) Valentine's Day to the most amazing person I've ever known.`
};

let typeWriterTimeout = null;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    letterBox.style.display = "block";
    displayLetterPages();
  }, 600);
}

function displayLetterPages() {
  const leftPageContent = document.getElementById("leftPageContent");
  const rightPageContent = document.getElementById("rightPageContent");
  const galleryBtn = document.getElementById("galleryBtn");
  const skipBtn = document.getElementById("skipBtn");
  
  if (typeWriterTimeout) {
    clearTimeout(typeWriterTimeout);
  }
  
  leftPageContent.innerHTML = "<p></p>";
  rightPageContent.innerHTML = "<p></p>";
  
  const leftPara = leftPageContent.querySelector("p");
  const rightPara = rightPageContent.querySelector("p");
  
  let leftIndex = 0;
  const leftMsg = letter.left;

  function typeLeftPage() {
    if (leftIndex < leftMsg.length) {
      leftPara.textContent += leftMsg.charAt(leftIndex);
      leftIndex++;
      typeWriterTimeout = setTimeout(typeLeftPage, 30);
    } else {
      // Left page done, start right page
      typeRightPage();
    }
  }

  function typeRightPage() {
    let rightIndex = 0;
    const rightMsg = letter.right;

    function typeRight() {
      if (rightIndex < rightMsg.length) {
        rightPara.textContent += rightMsg.charAt(rightIndex);
        rightIndex++;
        typeWriterTimeout = setTimeout(typeRight, 30);
      } else {
        typeWriterTimeout = null;
        galleryBtn.style.display = "block";
        skipBtn.style.display = "none";
      }
    }

    typeRight();
  }

  skipBtn.style.display = "block";
  typeLeftPage();
}

function skipTyping() {
  const leftPageContent = document.getElementById("leftPageContent");
  const rightPageContent = document.getElementById("rightPageContent");
  const galleryBtn = document.getElementById("galleryBtn");
  const skipBtn = document.getElementById("skipBtn");
  
  if (typeWriterTimeout) {
    clearTimeout(typeWriterTimeout);
    typeWriterTimeout = null;
  }
  
  leftPageContent.innerHTML = "<p>" + letter.left + "</p>";
  rightPageContent.innerHTML = "<p>" + letter.right + "</p>";
  
  galleryBtn.style.display = "block";
  skipBtn.style.display = "none";
}

function showGallery() {
  const letterBox = document.getElementById("letterBox");
  const galleryBox = document.getElementById("galleryBox");
  
  letterBox.style.opacity = 0;
  letterBox.style.transition = "opacity 0.5s ease";
  
  setTimeout(() => {
    letterBox.style.display = "none";
    galleryBox.style.display = "block";
    galleryBox.style.opacity = 0;
    
    setTimeout(() => {
      galleryBox.style.opacity = 1;
    }, 10);
  }, 500);
}

function backToLetter() {
  const letterBox = document.getElementById("letterBox");
  const galleryBox = document.getElementById("galleryBox");
  
  galleryBox.style.opacity = 0;
  
  setTimeout(() => {
    galleryBox.style.display = "none";
    letterBox.style.display = "block";
    letterBox.style.opacity = 0;
    
    setTimeout(() => {
      letterBox.style.opacity = 1;
    }, 10);
  }, 500);
}

function backToIntro() {
  const galleryBox = document.getElementById("galleryBox");
  const introText = document.getElementById("introText");
  const btn = document.querySelector(".btn");
  const letterBox = document.getElementById("letterBox");
  const bgMusic = document.getElementById("bgMusic");
  
  bgMusic.pause();
  document.querySelector(".music-toggle").classList.remove("playing");
  
  galleryBox.style.opacity = 0;
  
  setTimeout(() => {
    galleryBox.style.display = "none";
    letterBox.style.display = "none";
    introText.style.display = "block";
    btn.style.display = "block";
    introText.style.opacity = 0;
    btn.style.opacity = 0;
    
    document.getElementById("leftPageContent").innerHTML = "<p></p>";
    document.getElementById("rightPageContent").innerHTML = "<p></p>";
    document.getElementById("galleryBtn").style.display = "none";
    letterBox.style.opacity = 1;
    
    setTimeout(() => {
      introText.style.opacity = 1;
      btn.style.opacity = 1;
    }, 10);
  }, 500);
}

function toggleMusic() {
  const bgMusic = document.getElementById("bgMusic");
  const musicBtn = document.querySelector(".music-toggle");
  
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.classList.add("playing");
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
  }
}

function toggleCaption(element) {
  const allPhotos = document.querySelectorAll(".photo-item");
  allPhotos.forEach(photo => {
    if (photo !== element) {
      photo.classList.remove("show-caption");
    }
  });
  element.classList.toggle("show-caption");
}
