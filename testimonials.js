const testimonials = [
    {
        logo: "<i class='fa-sharp fa-solid fa-quote-right'></i>",
        quote: "Continuos improvement is the only way you can really grow",
        autor: "--Marco Cordero"
    },

    {
        logo: "<i class='fa-sharp fa-solid fa-quote-right'></i>",
        quote: "Your imagination is mistaken!!",
        autor: "--Gabriel Coronado"
    },

    {
        logo: "<i class='fa-sharp fa-solid fa-quote-right'></i>",
        quote: "Being a programmer would be fantastic",
        autor: "--John Ramos"
    },

    {
        logo: "<i class='fa-sharp fa-solid fa-quote-right'></i>",
        quote: "Im the Rickest Rick there is",
        autor: "--Rick Sanchez"
    },

    {
        logo: "<i class='fa-sharp fa-solid fa-quote-right'></i>",
        quote: "White men cant jump",
        autor: "--Wesley Snipes"
    },

    {
        logo: "<i class='fa-sharp fa-solid fa-quote-right'></i>",
        quote: "Do you trust me?",
        autor: "--Jack Dawson"
    },
];

testimonials.forEach( info => {
    const testimony = document.createElement('div');
    testimony.classList.add('swiper-slide');
    
    const content = `
                        <h3>${info.logo}</h3>
                        <p>${info.quote}</p>
                        <h4>${info.autor}</h4>
                    `;
    testimony.innerHTML = content;
    document.querySelector('.swiper-wrapper').appendChild(testimony);
});