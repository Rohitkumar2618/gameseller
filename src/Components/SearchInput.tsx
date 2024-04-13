import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef.current) {
            onSearch(inputRef.current.value);
        }
    };

    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<BsSearch />} />
                <Input
                    borderRadius={20}
                    placeholder='Search games...'
                    variant='filled'
                    ref={inputRef} // Attach the ref here
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
