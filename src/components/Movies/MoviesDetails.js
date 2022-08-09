import { Outlet, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { getMoviesAPI } from "services/fakeApi";
import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill, BsFillBookmarkFill } from "react-icons/bs";

import {
    Wrapper, Container,
    BoxContent, Image,
    Content, Title,
    SubTitle, Text,
    BoxGaner, CastReviews,
    Links, ButtonBack,
    Block, Icon, Div
} from "./MoviesDetails.styled";

const styleForIcons = {
    width: '30px',
    height: '30px',
    color: 'orangered',
};

export const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    const location = useLocation();
    const backPage = location.state?.from ?? '/';

    useEffect(() => {
        getMoviesAPI(movieId)
            .then(setMovies)
    }, [movieId])

    const { poster_path, original_title, vote_average, overview, genres } = movies;

    if (movies.length === 0) {
        return;
    }
    return (
        <Wrapper>
            <Container>
                <ButtonBack to={backPage}>
                    <BsFillArrowLeftSquareFill style={styleForIcons} />
                </ButtonBack>
                <BoxContent>
                    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                    <Content>
                        <Title>{original_title}</Title>
                        <Text>User Score: {Math.round(vote_average * 10)}%</Text>
                        <SubTitle>Overview</SubTitle>
                        <Text>{overview}</Text>
                        <SubTitle>Genres</SubTitle>
                        <BoxGaner>
                            {genres && genres.map(({ id, name }) => (
                                <Text key={id}>{name}</Text>
                            ))}
                        </BoxGaner>
                    </Content>
                </BoxContent>
            </Container>
            <hr />
            <Container>
                <CastReviews>
                    <Block>
                        <Icon><BsFillBookmarkFill /></Icon>
                        <Div>
                            <Links to="cast">Cast</Links>
                            <Links to="reviews">Reviews</Links>
                        </Div>
                    </Block>
                </CastReviews>
            </Container>
            <Outlet />
            <hr />

        </Wrapper>
    )
}

