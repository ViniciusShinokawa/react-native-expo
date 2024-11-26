import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import{Feather} from '@expo/vector-icons';
import Home from '../src/Home';
import Produto from '../src/Produto';
import Usuario from '../src/Usuario'


const Tab = createBottomTabNavigator();
//Tela de navegação de baixo

export default function TabRoutes() {
    return(
        <Tab.Navigator>
        
            <Tab.Screen
            
            name="Home"
            component={Home}
            options={{
                
                tabBarIcon:({color,size})=><Feather name ="home" color={color}
                size={size} />,tabBarLabel:'Home'
            }}
            />
             <Tab.Screen
            name="Usuario"
            component={Usuario}
            options={{
                tabBarIcon:({color,size})=><Feather name ="user" color={color}
                size={size} />,tabBarLabel:'Usuario'
            }}
            />
             <Tab.Screen
            name="Produto"
            component={Produto}
            options={{
                tabBarIcon:({color,size})=><Feather name ="plus" color={color}
                size={size} />,tabBarLabel:'Produto'
            }}
            />


        </Tab.Navigator>
    )
}