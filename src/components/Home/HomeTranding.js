import { Main, Title, TrendingList, NavItem } from './Home.styled';
import { BiCaretRight } from "react-icons/bi";

export const HomeTranding = ({ results }) => {
    return (
        <Main>
            <Title>Trending today</Title>
            <TrendingList>
                {results.map(({ id, title }) => (
                    <NavItem key={id} to={`/movies/${id}`}>
                        <BiCaretRight />
                        {title}
                    </NavItem>
                ))}
            </TrendingList>
        </Main>
    )
}