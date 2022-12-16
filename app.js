


const resumeCards = [
    {
        title: "Desarrollador JR.",
        company: "Freelance.com",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae quidem assumenda maiores debitis."
    },

    {
        title: "Mensajero",
        company: "Freelance.com",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae quidem assumenda maiores debitis."
    },

    {
        title: "Fotógrafo",
        company: "Freelance.com",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae quidem assumenda maiores debitis."
    },

    {
        title: "Desarrollador JR.",
        company: "Google",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae quidem assumenda maiores debitis."
    },

    {
        title: "Desarrollador SR.",
        company: "Amazon.com",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae quidem assumenda maiores debitis."
    },

    {
        title: "Desarrollador SR.",
        company: "Facebook.com",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae quidem assumenda maiores debitis."
    }
];


/* Hacemos un bucle para recorrer el arreglo. Creamos la const resumeCard y la hacemos
igual a un div, con classlist.add le damos la clase resume_card y por ultimo decimos
que el HTML dentro del div será igual a content (que trae ademas la info del array)
ver la pagina html que se comentó el codigo ya que esta es la forma de hacerlo sin tener que hacerlo
desde html */
resumeCards.forEach(card => {
    const resumeCard = document.createElement('div');
    resumeCard.classList.add('resume_card');
    const content = `
                        <h3 class="card_title">${card.title}</h3>
                        <h4 class="department">${card.company}</h4>
                        <p class="card_info">${card.info}</p>
        
                    `;
    resumeCard.innerHTML = content;
    document.querySelector('.resume_cargo_container').appendChild(resumeCard);
})