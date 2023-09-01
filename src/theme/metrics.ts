import { Dimensions } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}

export const wp = (percentage: number) => widthPercentageToDP(percentage);
export const hp = (percentage: number) => heightPercentageToDP(percentage);

export default metrics;