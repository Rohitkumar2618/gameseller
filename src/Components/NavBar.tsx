import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar: React.FC<Props> = ({ onSearch }) => { // Explicitly declare Props type for better clarity
    return (
        <HStack padding="1 0px">
            <Image src={logo} boxSize='60px' />
            {/* Pass onSearch directly */}
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;
