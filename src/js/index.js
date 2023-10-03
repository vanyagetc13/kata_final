import '../scss/style.scss'

// Navigation Menu List Clickability
const navMenuItems = Array.from(
  document.getElementsByClassName('nav-menu__list-item')
)

navMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    navMenuItems.forEach((item) => {
      item.classList.remove('active')
    })
    item.classList.add('active')
  })
})

// Language List Clickability

const languageList = document.getElementsByClassName('language-list')[0]
const languages = Array.from(languageList.children)

languages.forEach((language) => {
  language.addEventListener('click', () => {
    languages.forEach((lang) => {
      lang.classList.remove('active')
    })
    language.classList.add('active')
  })
})

//
const contentNavMenu = document.getElementsByClassName('content__nav-menu')[0]
const buttons = Array.from(contentNavMenu.children)

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((button) => {
      button.classList.remove('active')
    })
    btn.classList.add('active')
  })
})

// expanding texts

const expandedParagraph1 = document.getElementById('readnext-p_1')
const expandingButton1 = document.getElementById('readnext-btn_1')

let isParagraph1Expanded = false

expandingButton1.addEventListener('click', () => {
  if (isParagraph1Expanded) {
    expandedParagraph1.classList.remove('expanded')
    expandingButton1.classList.remove('expanded')
  } else {
    expandedParagraph1.classList.add('expanded')
    expandingButton1.classList.add('expanded')
  }
  isParagraph1Expanded = !isParagraph1Expanded
})

const expandBtn1 = document.getElementById('expand-section-btn1')
const expandSection1 = document.getElementById('expanding-section1')

const expandBtn2 = document.getElementById('expand-section-btn2')
const expandSection2 = document.getElementById('expanding-section2')

let isSection1Expanded = false
let isSection2Expanded = false

expandBtn1.addEventListener('click', () => {
  if (isSection1Expanded) {
    expandBtn1.classList.remove('expanded')
    expandSection1.classList.remove('expanded')
  } else {
    expandBtn1.classList.add('expanded')
    expandSection1.classList.add('expanded')
  }
  isSection1Expanded = !isSection1Expanded
})

expandBtn2.addEventListener('click', () => {
  if (isSection2Expanded) {
    expandBtn2.classList.remove('expanded')
    expandSection2.classList.remove('expanded')
  } else {
    expandBtn2.classList.add('expanded')
    expandSection2.classList.add('expanded')
  }
  isSection2Expanded = !isSection2Expanded
})

// Modals
// class= modalopened

const CloseModalBtns = Array.from(
  document.getElementsByClassName('modal__close-btn')
)

const ModalFeedback = document.getElementsByClassName('modal__feedback')[0]
const ModalCall = document.getElementsByClassName('modal__call')[0]

const closeFeedback = () => {
  ModalFeedback.classList.remove('active')
  document.body.classList.remove('modalopened')
}

const closeCall = () => {
  ModalCall.classList.remove('active')
  document.body.classList.remove('modalopened')
}

CloseModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    closeFeedback()
    closeCall()
  })
})

const callBtn = document.getElementById('call-btn')
const feedbackBtn = document.getElementById('feedback-btn')

callBtn.addEventListener('click', () => {
  ModalCall.classList.add('active')
  document.body.classList.add('modalopened')
})

feedbackBtn.addEventListener('click', () => {
  ModalFeedback.classList.add('active')
  document.body.classList.add('modalopened')
})
// Swiper
const createSwiper = () => {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination'
    }
  })
}

const screenWidth = window.innerWidth
if (screenWidth <= 768) createSwiper()
