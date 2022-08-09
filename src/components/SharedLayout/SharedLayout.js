import { Header, Container, Link, Nav } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
    return (
        <div>
            <Header>
                <Container>
                    <Nav>
                        <Link to='/'>Home</Link>
                        <Link to='/movies'>Movies</Link>
                    </Nav>
                </Container>
            </Header>
            <Outlet />
        </div>
    )
}