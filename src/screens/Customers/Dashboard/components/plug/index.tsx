import { faPlug, faPlugCircleBolt, faPlugCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import colors from '../../../../../theme/colors';
import fonts from '../../../../../theme/fonts';
interface IProps {
    plug: boolean
}

const Plug = ({ plug }: IProps) => {
    return plug
        ? <FontAwesomeIcon
            style={{ marginVertical: 5 }}
            icon={faPlugCircleBolt}
            color={colors.success}
            size={fonts.size.font18} />
        : <FontAwesomeIcon
            style={{ marginVertical: 5 }}
            icon={faPlugCircleXmark}
            color={colors.danger}
            size={fonts.size.font18} />
}

export default Plug;