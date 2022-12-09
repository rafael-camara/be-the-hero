import { createStackNavigator } from "@react-navigation/stack";

import { Incidents } from "../screens/Incidents";
import { Detail } from "../screens/Detail";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#f0f0f5",
        },
      }}
    >
      <Stack.Screen name="Incidents" component={Incidents} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}