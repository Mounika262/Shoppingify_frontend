import {extendTheme} from '@chakra-ui/react'
import { Colors as colors } from './foundations/colors'
import { Screens as screens } from './foundations/screen'
import { Style as global } from './styles'
import { Sizes as sizes } from './foundations/Sizes'
import { Font as fonts } from './foundations/Font'

export const theme = extendTheme({
    styles: {
        global
    },
    colors,
    screens,
    sizes,
    fonts
})

