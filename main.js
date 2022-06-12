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

const answer = document.querySelector('#answer')
const questionInput = document.querySelector('#questionInput')
const askButton = document.querySelector('#askButton')
const totalAnswers = answers.length

function askQuestion() {
  if (questionInput.value == '') {
    alert('Ask a question!')
    return
  }

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
  }, 3000)
}