import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Blank from "./index.js"
const Stack = createStackNavigator()
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Blank"} component={Blank} />
    </Stack.Navigator>
  )
}
