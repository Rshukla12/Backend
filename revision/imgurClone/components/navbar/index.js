const tags = [
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Mother's day",
        posts: "700"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Archary",
        posts: "400"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Funny",
        posts: "1,823,298"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Gaming",
        posts: "298,095"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Memes",
        posts: "240,000"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Awesome",
        posts: "724,000"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Oc",
        posts: "24000"
    },
    {
        img: "https://i.imgur.com/5uFU9FR.jpg",
        title: "Aww",
        posts: "754,001"
    },
];

const createTagDiv = ({img, title, posts}) => {
    const container = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('h5');
    const postsElem = document.createElement('p');
    
    container.classList.add('tag');
    
    imgElem.src = img;
    titleElem.textContent = title;
    postsElem.textContent = posts + " Posts";

    container.append(imgElem, titleElem, postsElem);
    return container;
}

const navManu = () => {
    const container = document.createElement('div');
    const header = document.createElement('h3');
    const tagHeader = document.createElement('div');
    const explore = document.createElement('h2');
    const moreTags = document.createElement('h2');

    container.id = "nav-menu";
    
    
    
    const frag = new DocumentFragment();
    for ( const tag of tags ){
        frag.append( createTagDiv(tag) );
    }
    
    tagHeader.append( explore, moreTags );
    container.append(header, tagHeader, frag);

}

const navbar = () => {
    const nav = document.createElement('nav');
    nav.id = "navbar";

    
}