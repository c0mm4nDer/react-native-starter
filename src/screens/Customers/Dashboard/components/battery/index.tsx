import { faBattery0, faBattery2, faBattery3, faBattery4, faBattery5 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import colors from '../../../../../theme/colors';
import fonts from '../../../../../theme/fonts';
interface IProps {
    level: number
}

const Battery = ({ level }: IProps) => {

    const getIcon = () => {
        const l = Math.ceil(level / 25)
        switch (l) {
            case 0:
                return faBattery0
            case 1:
                return faBattery2
            case 2:
                return faBattery3
            case 3:
                return faBattery4
            default:
                return faBattery5
        }
    }
    const getColor = () => {
        const l = Math.ceil(level / 25)
        switch (l) {
            case 0:
                return colors.danger
            case 1:
                return colors.primary
            default:
                return colors.success;
        }
    }
    return (
        <FontAwesomeIcon
            style={{ marginVertical: 5, marginBottom: 10 }}
            icon={getIcon()}
            color={getColor()}
            size={fonts.size.font18}
        />
    )

}

export default Battery;