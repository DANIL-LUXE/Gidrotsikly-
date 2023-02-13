
const tabs = document.querySelector('.tabs')
if(tabs){
  const tabsNavBtn = document.querySelectorAll('.tabs__nav-btn');
  const tabsPanel = document.querySelectorAll('.tabs__panel');
  tabsNavBtn.forEach(onTabClick)
  function onTabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tabs");
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('tabs__nav-btn--active')) {
        tabsNavBtn.forEach(function (item) {
          item.classList.remove('tabs__nav-btn--active')
        })
        tabsPanel.forEach(function (item) {
          item.classList.remove('tabs__panel--active')
        })
        currentBtn.classList.add('tabs__nav-btn--active');
        currentTab.classList.add('tabs__panel--active')
      }
    });
  }
  document.querySelector('.tabs__nav-btn').click();

}
