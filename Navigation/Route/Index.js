
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from '../BottomTab/Index';
import CustomDrawer from '../CustomDrawer';

const Drawer =createDrawerNavigator();
const DummyScreen =(props) =>(
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>{props.name}
        </Text>
        
    </View>
)
const Stack = createStackNavigator();
const RootNavigator = (props) => {
    return(
        
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props)=>(<CustomDrawer {...props} />)}>
                    <Drawer.Screen name="Start Page" component={BottomTab} />
                    <Drawer.Screen name="Most Visited" >
                   {() =><DummyScreen name="Most Visited" />}
                    </Drawer.Screen>
                    <Drawer.Screen name="Scheduled Trips" >
                    {()=><DummyScreen name="Scheduled Trips" />}
                    </Drawer.Screen>
                    <Drawer.Screen name="Settings" >
                    {()=><DummyScreen name="Settings" />}
                    </Drawer.Screen>
                    <Drawer.Screen name="Ratings" >
                    {()=><DummyScreen name="Ratings" />}
                    </Drawer.Screen>
                    <Drawer.Screen name="About" >
                    {()=><DummyScreen name="About" />}
                    </Drawer.Screen>
                </Drawer.Navigator>
                

            </NavigationContainer>
         
    );
};

export default RootNavigator;