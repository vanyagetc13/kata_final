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
const cpsParagraph = document.getElementsByClassName('cps-paragraph')[0]

let isParagraph1Expanded = false

expandingButton1.addEventListener('click', () => {
  if (isParagraph1Expanded) {
    expandedParagraph1.classList.remove('expanded')
    expandingButton1.classList.remove('expanded')
    cpsParagraph.classList.remove('active')
  } else {
    expandedParagraph1.classList.add('expanded')
    expandingButton1.classList.add('expanded')
    cpsParagraph.classList.add('active')
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

const closeAllFSModals = () => {
  closeFeedback()
  closeCall()
}

CloseModalBtns.forEach((btn) => {
  btn.addEventListener('click', closeAllFSModals)
})

// Закрытие модалок при клике на блюр
document.addEventListener('click', (e) => {
  const lastPathEl = e.composedPath()[0]
  if (lastPathEl.classList.contains('modal')) closeAllFSModals()
})

// Open-modals btns

const callBtns = Array.from(document.getElementsByClassName('call-btn'))
const feedbackBtns = Array.from(document.getElementsByClassName('feedback-btn'))

callBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    ModalCall.classList.add('active')
    document.body.classList.add('modalopened')
  })
})

feedbackBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    ModalFeedback.classList.add('active')
    document.body.classList.add('modalopened')
  })
})

// Swiper
const createSwiper = () => {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16
  })
}
const removeWidthProperty = (item) => {
  item.style.removeProperty('width')
}
const screenWidth = window.innerWidth
const swiperItems = Array.from(document.getElementsByClassName('swiper-slide'))
if (screenWidth <= 768) {
  createSwiper()

  // swiperItems.forEach((btn) => removeWidthProperty(btn))
}
// burger

const burgerBtn = document.getElementById('burger-btn')
const navMenu = document.getElementById('nav-menu')
const emptyModal = document.getElementsByClassName('empty__modal')[0]

let burgerMenuOpened = false

burgerBtn.addEventListener('click', () => {
  if (!burgerMenuOpened) {
    navMenu.classList.add('active')
    document.body.classList.add('modalopened')
    emptyModal.classList.add('active')
  } else {
    navMenu.classList.remove('active')
    document.body.classList.remove('modalopened')
  }
  burgerMenuOpened = !burgerMenuOpened
})
