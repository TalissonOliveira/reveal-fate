const answers = [
  "Certainty!",
  "I'm not so sure.",
  "It is decidedly so.",
  "Do not count on it.",
  "No doubt!",
  "Ask again later.",
  "Yes, definitely!",
  "My answer is no.",
  "You can count on it.",
  "Better not tell you now.",
  "As I see it, yes.",
  "My sources say no.",
  "Probably.",
  "Can't predict right now.",
  "Good outlook.",
  "Prospects are not so good.",
  "Yea.",
  "Concentrate and ask again.",
  "Signs point to yes."
]

const crystalBallImg = document.querySelector('.crystal-ball')
const answer = document.querySelector('#answer')
const questionInput = document.querySelector('#questionInput')
const askButton = document.querySelector('#askButton')
const totalAnswers = answers.length


function askQuestion() {
  if (questionInput.value == '') {
    alert('Ask a question!')
    return
  }

  crystalBallImg.classList.add('shake')
  askButton.setAttribute('disabled', true)
  answer.innerHTML = ''

  const randomNumber = Math.floor(Math.random() *  totalAnswers)

  const question = document.createElement('div')
  question.innerHTML = questionInput.value

  answer.appendChild(question)
  answer.innerHTML += answers[randomNumber]

  answer.style.opacity = 1
  questionInput.value = ''

  setTimeout(() => {
    answer.style.opacity = 0
    askButton.removeAttribute('disabled')

    crystalBallImg.classList.remove('shake')
    crystalBallImg.classList.remove('bounce-in')
    crystalBallImg.style.opacity = 1
  }, 3000)
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#9380be"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      out_mode: "out",
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 250,
        size: 0,
        duration: 3,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 250,
        duration: 3
      }
    }
  }
})