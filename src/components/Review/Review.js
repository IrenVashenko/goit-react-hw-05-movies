import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReveiwsAPI } from '../../services/fakeApi';
import { Container } from '../Cast/Cast.styled';
import { Content, ContentAuthor, Author, Text } from './Review.styled';
import { BsFillPeopleFill } from "react-icons/bs";

const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);
    useEffect(() => {
        getReveiwsAPI(movieId)
            .then(data => {
                if (!data.results) {
                    return;
                }
                setReview(data.results)
            })
    }, [movieId])

    return (
        <>
            <hr />
            <Container>
                {review.length !== 0
                    ? review.map(({ id, author, content }) => (
                        <Content key={id}>
                            <ContentAuthor>
                                <span><BsFillPeopleFill /></span>
                                <Author>{author}</Author>
                            </ContentAuthor>
                            <Text>{content}</Text>
                        </Content>
                    ))
                    : <p>We don't have any reviews for this movie.</p>
                }
            </Container>
        </>
    )
}

export default Review;