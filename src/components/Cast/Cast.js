import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastAPI } from '../../services/fakeApi';
import { Links, Items, Content, Name, Image, Container } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    const [errors, setError] = useState(false);
    useEffect(() => {
        getCastAPI(movieId)
            .then(data => {
                if (!data.cast) {
                    return;
                }
                setCast(data.cast)
            })
            .catch(() => setError(true));
    }, [movieId]);

    return (
        <>
            <hr />
            <Container>
                {cast && (
                    <Links>
                        {errors && <div>Not Found</div>}
                        {cast.map(({ id, profile_path, original_name, name, character }) =>
                        (
                            profile_path !== null ? (
                                <Items key={id}>
                                    <Image src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={original_name} />
                                    <Content>
                                        <Name>{name}</Name>
                                        <p>{character}</p>
                                    </Content>
                                </Items>
                            ) :
                                <Items key={id}>
                                    <Image src="https://www.truesupreme.com/wp-content/uploads/2017/04/default-image-620x600.jpg" alt="Photo" width="200px" hright="300px" />
                                    <Content>
                                        <Name>{name}</Name>
                                        <p>{character}</p>
                                    </Content>
                                </Items>
                        )
                        )}
                    </Links>
                )}
            </Container>
        </>
    )
};

export default Cast;