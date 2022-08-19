// task 3.0 & 5.0) 
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  
  // Part 1: 
  // task 1.0) 
  const mainEl = document.querySelector('main');
  
  // task 1.1) 
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // task 1.2) 
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  // task 1.3) 
  mainEl.classList.add('flex-ctr');
  
  // task 2.0) 
  const topMenuEl = document.getElementById('top-menu');
  
  // task 2.1) 
  topMenuEl.style.height = '100%';
  
  // task 2.2) 
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // task 2.3) 
  topMenuEl.classList.add('flex-around');
  
  // task 3.0 at top 
  
  // task 3.1) 
  menuLinks.forEach(function(link) {
    let linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });
  
  
  // Part 2: 
  // task 4.0) 
  const subMenuEl = document.getElementById('sub-menu');
  
  // task 4.1) 
  subMenuEl.style.height = '100%';
  
  // task 4.2) 
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  
  // task 4.3) 
  subMenuEl.classList.add('flex-around');
  
  // task 4.4)
  subMenuEl.style.position = 'absolute';
  
  // task 4.5) 
  subMenuEl.style.top = '0';
  
  // task 5.0 at the top 
  
  // task 5.1) 
  const topMenuLinks = document.querySelectorAll('#top-menu a');
  let showingSubMenu = false;
  
  // task 5.2) 
  topMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    let link = event.target;
    if(link.tagName !== 'A') return;
    console.log(link.textContent);
  
    // task 5.3)
    if(link.classList.contains('active')) {
      link.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
    }
  
    // task 5.4)
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  
    // task 5.5)
    link.classList.add('active');
  
    // task 5.6) 
    let linkData = menuLinks.find(function(linkObject) {
      return linkObject.text === link.textContent;
    });
    showingSubMenu = 'subLinks' in linkData;
  
    // task 6.4)
    if(!showingSubMenu) mainEl.innerHTML = `<h1>${link.textContent}</h1>`
  
    // task 5.7)
    if(showingSubMenu) {
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
    }
  });
  
  // task 5.8)
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', link.href);
      linkEl.textContent = link.text;
      subMenuEl.appendChild(linkEl);
    });
  };
  
  // task 6.0) 
  subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    let link = event.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
  
    // task 6.1) 
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    
    // task 6.2) 
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  
    // task 6.3) 
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
  });
  
  