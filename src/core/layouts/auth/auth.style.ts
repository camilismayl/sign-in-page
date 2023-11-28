import { createUseStyles } from 'react-jss';

const styles = {
    auth: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100vh',
        height: '100vh',

        background: 'linear-gradient(to right, #ECBC76 0%,#ECBC76 50%, #FFFEF9 0%,  #FFFEF9 50%)'

    },

    // section: {
    //     minHeight: '100vh',
    // },
    // wrapper: {
    //     minHeight: '100vh',
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    // },
    // pageSection: {
    // },
    // panel: {width: rem(480),},
    // or: {color: colors.authSubtitleText,},
    // invalidField: {border: '1px solid ' + colors.validationErrorColor,},
};


export const useAuthStyles = createUseStyles(styles);
