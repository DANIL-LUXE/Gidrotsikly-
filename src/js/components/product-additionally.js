
const productAdditionally = document.querySelector('.product--additionally');
if (productAdditionally){
  const tabsNavBtnAdditionally = document.querySelectorAll('.tabs__nav-btn--additionally');
  const tabsPanelAdditionally = document.querySelectorAll('.tabs__panel--additionally');
  console.log(tabsPanelAdditionally)
  tabsNavBtnAdditionally.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tabs-additionally")
      let currentTab = document.querySelector(tabId)
      if (!currentBtn.classList.contains('tabs__nav-btn--additionally--active')) {
        tabsNavBtnAdditionally.forEach(function (item) {
          item.classList.remove('tabs__nav-btn--additionally--active')
        })
        tabsPanelAdditionally.forEach(function (item) {
          item.classList.remove('tabs__panel--additionally--active');
        })
        currentBtn.classList.add('tabs__nav-btn--additionally--active');
        currentTab.classList.add('tabs__panel--additionally--active')
      }
    });
  });
  document.querySelector('.tabs__nav-btn--additionally').click();
}

