import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background: rgb(14, 74, 163);
  color: #172b4d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42857142857143;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

hr {
  margin: 25px 0;
  border: none;
  background: #ccc;
  height: 1px;
  width: 100%;
}
`;
