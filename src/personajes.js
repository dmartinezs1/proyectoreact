import Listarpersonajes from "./listapersonajes";


const students = [
    {
        "id": 1,
        "name": " Nombre: Aang",

        "genero": " Genero: M",
        "Tipo": " Tipo: Avatar",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "https://www.geekmi.news/__export/1610243632148/sites/debate/img/2021/01/09/xhubo-posibilidad-de-una-cuarta-temporada-de-avatar_-la-leyenda-de-aang__1_crop1610243597395.jpg_1564579160.jpg"
    },
    {
        "name": " Nombre: Katara",
        "img": "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/Avatar_-Cosplayer-le-da-vida-a-Katara-con-su-iconico-traje-de-la-Nacion-del-Fuego-2.jpg?fit=1280%2C720&quality=80&ssl=1",

        "genero": " Genero: F",
        "Tipo": " Tipo: Agua",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


    },
    {
        "name": " Nombre: Zoka",
        "img": "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/s/sokka_adulto_avatar.jpg",

        "genero": " Genero: M",
        "Tipo": " Tipo: Luchador",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        "name": " Nombre: Zuko",
        "img": "https://cdn.alfabetajuega.com/wp-content/uploads/2020/12/zuko-2-780x405.jpg",

        "genero": " Genero: M",
        "Tipo": " Tipo: Fuego",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        "name": " Nombre: Iroh",
        "img": "https://i0.wp.com/geeklaak.com/wp-content/uploads/2020/07/wp2837694.jpg?fit=660%2C365&ssl=1",

        "genero": "M",
        "Tipo": " Tipo: Fuego",
        "Describe": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    }
]

const Personajes = () => (
    <>
        <nav>
                    <ul class="menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Personajes">Contenido</a></li>
                        <li><a href="/Formulario">Contacto</a></li>
                    </ul>
                </nav>
        {
            students.map(c => <Listarpersonajes name={c.name} tipo={c.Tipo} describe={c.Describe} img={c.img} />)
        }
        <footer>
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>Ejemplo Footer Daniel Martínez</p>
                    <a href="https://www.facebook.com/daniel.toflexy/">Facebook<i class="fab fa-facebook"></i> </a><br></br>
                    <a href="https://github.com/dmartinezs1">Github<i class="fab fa-github"></i> </a><br></br>
                    <a href="https://www.linkedin.com/in/dsmartinez02/">Linkedin<i class="fab fa-linkedin"></i></a>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">Adsi:2184573</cite>
                </figcaption>
            </figure>
        </footer>
    </>
)

export default Personajes;