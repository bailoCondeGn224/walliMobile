import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Vector from "../Utits/Vectors/Vector";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import { Data as TabData } from "../data/Data";

const TopTabbar = () => {
  console.log(TabData);
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: ColorsLogin.primaryColor,
          tabBarInactiveTintColor: ColorsLogin.grey,
          tabBarIcon: ({ color, focused }) => {
            const tab = TabData.find((t) => t.name === route.name);
            return (
              <Vector
                type={focused ? tab?.activeiconType : tab?.inactiveIconType}
                name={focused ? tab?.activeIconName : tab?.inactiveIconName}
                size={focused ? tab?.size : tab?.unFocusSize}
                color={color}
              />
            );
          },
        })}
      >
        {TabData.map((tab) => (
          <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default TopTabbar;
