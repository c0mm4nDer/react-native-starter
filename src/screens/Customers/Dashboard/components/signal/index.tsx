import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import fonts from '../../../../../theme/fonts';
import SvgSignalZero from '../../../../../assets/images/signal_zero.svg';
import SvgSignalOne from '../../../../../assets/images/signal_one.svg';
import SvgSignalTwo from '../../../../../assets/images/siganl_two.svg';
import SvgSignalThree from '../../../../../assets/images/signal_three.svg';
import SvgSignalFour from '../../../../../assets/images/signal_four.svg';
interface IProps {
    level: number;
}

const Signal = ({ level }: IProps) => {
    switch (level) {
        case 1:
            return <SvgSignalOne style={{}} width={fonts.size.font18} height={fonts.size.font18} />;
        case 2:

            return <SvgSignalTwo style={{}} width={fonts.size.font18} height={fonts.size.font18} />;
        case 3:

            return <SvgSignalThree style={{}} width={fonts.size.font18} height={fonts.size.font18} />;
        case 4:

            return <SvgSignalFour style={{}} width={fonts.size.font18} height={fonts.size.font18} />;
        default:
            return <SvgSignalZero style={{}} width={fonts.size.font18} height={fonts.size.font18} />;
    }
}

export default Signal;