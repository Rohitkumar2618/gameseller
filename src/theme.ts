import { extendTheme, ThemeConfig } from '@chakra-ui/react'


const config: ThemeConfig = {
    initialColorModel: 'dark'
};


const theme = extendTheme({ config })

export default theme