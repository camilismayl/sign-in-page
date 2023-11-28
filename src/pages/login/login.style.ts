import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderRadius: '40px',
        width: '539px',
        height: '741px',
    },
    wrapper: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: rem(20),
        fontWeight: 400,
    },
    subtitle: {
        fontSize: rem(55),
        fontWeight: 500
    },
    input: {
        height: '92px'
    },

    panel: { width: rem(480), },
    or: { color: colors.authSubtitleText, },
    invalidField: { border: '1px solid ' + colors.validationErrorColor, },
};

export const useLoginStyles = createUseStyles(styles);
