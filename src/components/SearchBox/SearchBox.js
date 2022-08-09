import { Form, Input, Button } from './SearchBox.styled'

export const SearchBox = ({ name, onChange, onClick, onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="search" name={name} onChange={onChange} />
            <Button type="submit" onClick={onClick}>Search</Button>
        </Form>
    )
};