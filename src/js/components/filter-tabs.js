const tabs = document.querySelector('.catalog-inner')
if (tabs) {
  const tabsNavBtn = document.querySelectorAll('.aside-filter__tab');
  const tabsPanel = document.querySelectorAll('.aside-filter__content');
  tabsNavBtn.forEach(onTabClick)
  function onTabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab-filter");
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('tab--active')) {
        tabsNavBtn.forEach(function (item) {
          item.classList.remove('tab--active')
        })
        tabsPanel.forEach(function (item) {
          item.classList.remove('aside-filter__content--active')
        })
        currentBtn.classList.add('tab--active');
        currentTab.classList.add('aside-filter__content--active')
      }
    });
  }
  document.querySelector('.aside-filter__tab').click();

}

