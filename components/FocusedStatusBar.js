import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused(); //are we focusing the status bar

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar