import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import theme from './theme';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;