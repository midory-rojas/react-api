export default function Card({ attrice }) {
    const { name, image, birth_year, nationality, biography, most_famous_movies, awards } = attrice; //destrutturazione
    return (
        <div className="card">
            <div className="card mb-3">
                <h5 className="card-title">{name}</h5>
                <img src={attrice.image} className="img-fluid rounded-start" alt={name} />
                <div className="card-body">
                    <p className="card-text">{birth_year} - {nationality}</p>
                    <p className="card-text">{biography}</p>
                    <p className="card-text">Know For:{most_famous_movies}</p>
                    <p className="card-text">Awards:{awards}</p>
                </div>
            </div>
        </div >

    )

}