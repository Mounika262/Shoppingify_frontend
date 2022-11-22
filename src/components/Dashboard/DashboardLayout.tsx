import { Box, chakra } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { ShoppingList } from "./ShoppingList"

export const DashboardLayout = ()=> {
    return <chakra.main display='grid' pos='relative'
                gridTemplateColumns={
                    [
                        'auto 1fr',
                        'auto 1fr',
                        'auto 1fr auto',
                        'auto 1fr auto'
                    ]
                }
            >
                {/*Component for navigating between pages*/}
                <Navigation/>

                {/*main page container- depends on where the user navigate*/}
                <Box bg='inherit' overflowY='auto'>
                    <Outlet/>
                </Box>
                
                {/* container for displaying shopping list, 
                creating new item, and previewing new  item before adding  */ }
                <Box display={['None', 'None', 'None','Grid']}>
                    <ShoppingList/>
                </Box>
            </chakra.main>
}