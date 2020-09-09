import GlobalStyle from "./global";
import config from "./config";
import fonts from "./fonts";
import mixins from "./mixins";
import media from "./media";
import breakpoints from "./breakpoints";
import { Container, Inner } from "./layout";

const theme = { GlobalStyle, config, mixins, media, breakpoints, fonts, Container, Inner };

//export seperately for individual use
export { GlobalStyle, config, breakpoints, mixins, media, fonts, Container, Inner };

// full theme export as the default
export default theme;  
