import {NavigationContainer} from '@react-navigation/native';
import DrawerRoutes from '../routes/drawer.routes';

export default function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}