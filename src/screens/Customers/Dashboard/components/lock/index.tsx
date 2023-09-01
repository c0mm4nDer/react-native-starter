import { faUnlockAlt, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import colors from '../../../../../theme/colors';
import fonts from '../../../../../theme/fonts';
import SvgSemiUnlock from '../../../../../assets/images/unlock_alt.svg';
import { LockState } from '../../../../../utils/CommandCenter/Converter/cnt';
interface IProps {
    lock: LockState
}

const Lock = ({ lock }: IProps) => {
    switch (lock) {
        case LockState.unlock:
            return <FontAwesomeIcon
                style={{ marginVertical: 5, marginTop: 10 }}
                icon={faLockOpen}
                color={colors.danger}
                size={fonts.size.font18} />
        case LockState.semi_open:
            return <FontAwesomeIcon
                style={{ marginVertical: 5, marginTop: 10 }}
                icon={faUnlockAlt}
                color={colors.primary}
                size={fonts.size.font18} />
        case LockState.lock:
        default:
            return <FontAwesomeIcon
                style={{ marginVertical: 5, marginTop: 10 }}
                icon={faLock}
                color={colors.success}
                size={fonts.size.font18} />
    }
}
export default Lock;