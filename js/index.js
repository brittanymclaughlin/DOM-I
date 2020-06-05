const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = "img/logo.png";

let codesnippet = document.getElementById("cta-img");
codesnippet.src = siteContent["cta"]["img-src"];

let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];
middleImage.style.borderRadius = '12px 50px 12px 50px';

const links = document.getElementsByTagName("a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

let createlink = document.createElement('a');
const linktext = document.createTextNode("Google");
createlink.appendChild(linktext);
createlink.title = "Google";
createlink.href = "https://www.google.com";
let createlink2 = document.createElement('a');
const linktext2 = document.createTextNode("Github");
createlink2.appendChild(linktext2);
createlink2.title = "Github";
createlink2.href = "https://www.github.com";
document.querySelector('nav').appendChild(createlink);
document.querySelector('nav').prepend(createlink2);

for (x=0;x < links.length;x++){
  links[x].style.color = 'green';
}


let logotext = document.querySelector('h1');
logotext.innerHTML='DOM <br> Is <br> Awesome';
logotext.style.textShadow = '2px 2px 4px #000000';
logotext.style.webkitTextStrokeColor = 'lightblue';
logotext.style.webkitTextStrokeWidth = '1px';

const buttoninfo = document.querySelector('button');
buttoninfo.textContent = siteContent["cta"]["button"];
buttoninfo.style.borderRadius = '10px';
buttoninfo.style.backgroundColor = 'lightblue';

let headers = document.getElementsByTagName('h4');
headers[0].textContent = siteContent["main-content"]['features-h4'];
headers[1].textContent = siteContent["main-content"]['about-h4'];
headers[2].textContent = siteContent['main-content']['services-h4'];
headers[3].textContent = siteContent['main-content']['product-h4'];
headers[4].textContent = siteContent['main-content']['vision-h4'];
headers[5].textContent = siteContent['contact']['contact-h4'];

headers = Array.from(headers);

headers.forEach((element) => {
  console.log(element);
  element.style.color = 'blue';});




const paragraphs = document.getElementsByTagName('p');
paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
paragraphs[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];
paragraphs[8].textContent = siteContent['footer']['copyright'];

