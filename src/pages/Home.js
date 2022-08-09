import { getTrandingAPI } from '../services/fakeApi';
import { useEffect, useState } from "react"
import { HomeTranding } from 'components/Home/HomeTranding';

const Home = () => {
    const [trending, setTrending] = useState();

    useEffect(() => {
        getTrandingAPI()
            .then(setTrending)
    }, []);

    if (!trending) {
        return;
    }
    const { results } = trending;

    return (
        <>
            <HomeTranding results={results} />
        </>
    )
}
export default Home;