import Home from "../src/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Usuario from "../src/Usuario"
import Produto from "../src/Produto";


const Stack = createNativeStackNavigator(); 

export default function StackRoutes() {
    return(
   
        <Stack.Navigator screenOptions={{title:''}}> 
           

           <Stack.Screen
            name="produto"
            component={Produto}
            />
            <Stack.Screen
                name="home"
                component={Home}
            />

            <Stack.Screen
                name="Usuario"
                component={Usuario}
            />
        </Stack.Navigator>
  
    )
}