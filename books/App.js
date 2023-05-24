import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BookDetailScreen from "./src/screens/BookDetailScreen";
import BookScreen from "./src/screens/BookScreen";
const navigation = createStackNavigator(
  {
    Books: BookScreen,
    BookDetail: BookDetailScreen
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: {
      title: 'Books'
    }
  }
);

export default createAppContainer(navigation)