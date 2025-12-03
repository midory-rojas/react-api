export default function Card({ attrice }) {
    const { name, image, birth_year, nationality, biography, most_famous_movies, awards } = attrice; //destrutturazione
    return (
        <div className="card text-center">
            <h4 className="card-title text-light py-2">{name}</h4>
            <img src={image} className="img-fluid" alt={name} />
            <div className="card-body">
                <p className="card-text text-light fst-italic">{birth_year} - {nationality}</p>
                <p className="card-text text-light">{biography}</p>
                <p className="card-text">
                    <strong className="text-danger">Known For:</strong>
                    <br />
                    <span className="text-danger fst-italic">
                        {most_famous_movies}
                    </span>
                </p>
                <p className="card-text">
                    <strong className="text-warning">Awards:</strong>
                    <br />
                    <span className="text-warning fst-italic">
                        {awards}
                    </span>
                </p>
            </div>
        </div >

    )

}