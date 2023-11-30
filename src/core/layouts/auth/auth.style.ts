import { createUseStyles } from 'react-jss';
import fonts from 'assets/styles/abstracts/fonts';
import colors from 'assets/styles/abstracts/color';
const styles = {
    auth: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        // width: '100vh',
        height: '100vh',

        background:
            'linear-gradient(to right, #ECBC76 0%,#ECBC76 50%, #FFFEF9 0%,  #FFFEF9 50%)',
        position: 'relative',
    },
    svg3Style: { top: '377px', left: '264px', position: 'absolute' },
    svg2Style: { top: '100px', right: '20px', position: 'absolute' },
    border: {
        marginTop: '-4px',
        width: '600px',
        height: '1px',
        background: 'black',
    },
    heading: {
        position: 'absolute',
        top: '31px',
        left: '42px',
        color: colors.header,
        font: fonts.fontBold,
        fontSize: '20px',
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
