
const searth = document.querySelector('.searth')
if (searth){
  const tabsBtn = document.querySelectorAll('.searth-tabs__item');
  const tabsItems = document.querySelectorAll('.searth-content__item');
  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('searth-tabs__item--active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('searth-tabs__item--active');
        });
        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });
        currentBtn.classList.add('searth-tabs__item--active');
        currentTab.classList.add('active');
      }
    });
  }
  document.querySelector('.searth-tabs__item:nth-child(2)').click()
}


