import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.5px;
  }

  :root {
      font-size: ${px2vw(20, 575)};

      @media (min-width: 576px) {
        font-size: ${px2vw(18, 767)};
      }

      @media (min-width: 768px) {
        font-size: ${px2vw(16, 991)};
      }

      @media (min-width: 992px) {
        font-size: ${px2vw(15, 1199)};
      }

      @media (min-width: 1200px) {
        font-size: ${px2vw(16)};
      }
    }
    .react-icons {
      vertical-align: baseline;
    }
    ${'' /* .hidden-xs {
      display: none
    } */}
`;
//  :root {
//     font-size: ${px2vw(24)};

//     @media (min-width: 768px) {
//       font-size: ${px2vw(18)};
//     }

//     @media (min-width: 1024px) {
//       font-size: ${px2vw(16)};
//     }
//   }
export default Global;
