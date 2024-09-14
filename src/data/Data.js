import BusStationScreen from "../Screen/BusStationScreen";
import HomeScreen from "../Screen/HomeScreen";
import MarketPlaceScreen from "../Screen/MarketPlaceScreen";
import NotificationScreen from "../Screen/NotificationScreen";
import PoliceScreen from "../Screen/PoliceScreen";
import ProfilScreen from "../Screen/ProfilScreen";

export const Data = [
    {
      id: 1,
      route: HomeScreen,
      name: 'Home',
      activeIconName: 'home',
      activeiconType: 'Entypo',
      inactiveIconName: 'home-outline',
      inactiveIconType: 'MaterialCommunityIcons',
      size: 25,
      unFocusSize: 28,
    },
    {
      id: 2,
      route: BusStationScreen,
      name: 'Gare',
      activeIconName: 'bus',
      activeiconType: 'Ionicons',
      inactiveIconName: 'bus',
      inactiveIconType: 'Ionicons',
      size: 25,
      unFocusSize: 25,
    },
    {
      id: 4,
      route: MarketPlaceScreen,
      name: 'boutique',
      activeIconName: 'shop',
      activeiconType: 'Entypo',
      inactiveIconName: 'storefront-outline',
      inactiveIconType: 'MaterialCommunityIcons',
      size: 25,
      unFocusSize: 25,
    },
    {
      id: 5,
      route: NotificationScreen,
      name: 'Notification',
      activeIconName: 'notifications',
      activeiconType: 'Ionicons',
      inactiveIconName: 'notifications-outline',
      inactiveIconType: 'Ionicons',
      size: 25,
      unFocusSize: 25,
    },
    {
        id: 5,
        route: PoliceScreen,
        name: 'Police',
        activeIconName: 'local-police',
        activeiconType: 'MaterialIcons',
        inactiveIconName: 'police-badge-outline',  
        inactiveIconType: 'MaterialCommunityIcons', 
        size: 25,
        unFocusSize: 25,
     },
    {
      id: 6,
      route: ProfilScreen,
      name: 'Profile',
      activeIconName: 'person',
      activeiconType: 'Ionicons',
      inactiveIconName: 'person-outline',
      inactiveIconType: 'Ionicons',
      size: 24,
      unFocusSize: 24,
    },
  ];