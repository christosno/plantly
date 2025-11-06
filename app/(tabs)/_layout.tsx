import { Redirect, Tabs } from "expo-router";
import { Feather, Entypo } from "@expo/vector-icons";
import { theme } from "@/theme";

const hasFinishedOnboarding = true;

export default function Layout() {
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onBoarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
