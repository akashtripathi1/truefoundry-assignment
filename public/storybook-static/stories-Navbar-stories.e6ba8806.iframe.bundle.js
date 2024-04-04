"use strict";(self.webpackChunktruefoundry_assignment=self.webpackChunktruefoundry_assignment||[]).push([[773],{"./src/stories/Navbar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),Select=__webpack_require__("./node_modules/@mui/material/Select/Select.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js");const TFlogo=__webpack_require__.p+"static/media/TFlogo.dd0817ce459336cffad91c5a2f5b294f.svg",metrics_gray_namespaceObject="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAxCAYAAABgSwHoAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANdSURBVHgB7ZrRcdpAEIZ3z5BnSpA7ABowHUAHQAXgx0wmMcbOs0MFiA6gA1KADR1EHYTnZHKbXYFmFAZJJ+kkZMI/A4gZCfTd7e6tdg/gqssQwhn0NN90CKGLQE35ToBbJFh9HrbWUIBKgwzAGGnAXxsRp3l8S8s6wezjsOWBJRUKOZlvGjcKRkDUI4Bmmmv5xrZENKuDWucFtg4pYAr0ABG7DNYBC+KbXDPwQoNaToatHaSUFUh/xmSmkB4OM9aAgqSAXCIl/rs0vSYXpKGfFSWPgXmG1SIpYKWGFDAezjs2nzHkANubIC78Y6R+TtP22D3cmobFKf81hvTh9ubYgYw6+NaKfcs99i02eUfxbzPwKG2QOv6PGuEwDGsE+bzY9DWRC9nkSdD4wGCmUVKAEfRYghd/dSC9dsiggd8mQvojjLSBdKa5EzDF0TDvAi8WpNnnEeEO0gHv6oQtGdha0pkK4QHMAHccCJYmgSCNDr8lLwHuMXCPgfsGlzZ+sTXw5zhxJqfu2w+IGcEggGiATGtYFu3XYugZBCzvy6B9qyBZTvIpGsqXNrEuR94SzTVJ/kgidthUX57dV+vmGujfhEMSe2yQ4bW5IUNqaMAB38SATdx4oU5SOOGgjOuyTciwnDBw3EJ9Sl/nm6ZW0JWEg2ctdyZlEnhMrcLkzyKfLIpI7EUceLComTwpP5NBnP/moyf3zX+ykJR7HyWpI8OQcUQlqkfOeKmQYQUBS46ymkp4+eKE5WfUeWeDzKqo/JfdKvKadwEpvsy584pAfcuScFQZ0lr+WzVIa2BhVQpSE95Ohm3r+a9J7lqaikrwKwVZlK6Ql6Ir5KXoCnkpukJeiv4LyHf3PHmsoGwSd44BJHr89O5AhXSqPBlxqidviZBEesXFpRFUQGnLk1IWlc9EyBqXGf4AnQ0y3A9NW568IfUon4mQn4at7XT+es9FpxcoSaENFR2/ipel0kXEPcq2J4fGTdjpfCPFYulwOVCUiO7z1l2l0AWEj+HKQqZ2+qFfKA3SsvcJRCm2bJJrY4TMLqLmkccelK+dVPGOZ+2UbG1xCfr9fZsl/lOK23cQc41dHfr90tOQbrADFiRgXHf9nrXuWui2sxz9fpH42Yz9bJ23PFnmBkKTfn8hdde/IDnJfjs3yxAAAAAASUVORK5CYII=";var TimeRangeContext=__webpack_require__("./src/context/TimeRangeContext.js"),LiveFeedStatusContext=__webpack_require__("./src/context/LiveFeedStatusContext.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dropdown=_ref=>{let{setTimeRange}=_ref;const[selectedOption,setSelectedOption]=(0,react.useState)("5m"),{isLive,setIsLive}=(0,LiveFeedStatusContext.o)(),navigate=(0,react_router_dist.Zp)();return(0,jsx_runtime.jsx)(FormControl.A,{variant:"outlined",size:"small",style:{marginRight:"10px"},children:(0,jsx_runtime.jsxs)(Select.A,{value:selectedOption,onChange:e=>{const newTimeRange=e.target.value;setSelectedOption(newTimeRange),setTimeRange(newTimeRange),setIsLive(!0),navigate("?live=true")},displayEmpty:!0,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:null},children:[(0,jsx_runtime.jsx)(MenuItem.A,{value:"5m",children:"Last 5 minutes"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"15m",children:"Last 15 minutes"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"30m",children:"Last 30 minutes"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"1h",children:"Last 1 hour"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"3h",children:"Last 3 hours"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"6h",children:"Last 6 hours"})]})})},Navbar=_ref2=>{let{title}=_ref2;const{setSelectedTimeRange}=(0,TimeRangeContext.X)(),location=(0,react_router_dist.zy)(),{isLive,setIsLive}=(0,LiveFeedStatusContext.o)(),[selectedButton,setSelectedButton]=(0,react.useState)(0);"/logs?live=".concat(isLive);(0,react.useEffect)((()=>{location.pathname.includes("/metrics")?setSelectedButton(1):location.pathname.includes("/logs")?setSelectedButton(2):setSelectedButton(0)}),[location]);const buttonStyle={width:"128px",height:"32px",margin:"0 10px",opacity:1,backgroundColor:"white"},imageStyle={width:"20px",height:"20px"},getButtonStyle=buttonNumber=>({...buttonStyle,borderBottom:selectedButton===buttonNumber?"3px solid purple":"none"}),getButtonLogo=buttonNumber=>{switch(buttonNumber){case 1:return 1===selectedButton?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAxCAYAAABgSwHoAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMdSURBVHgB7ZrdbdpQFMf/NqQNUR8YgYj0nU4QNoANIBOQTFB1gpYJChvABu4EyWOlFtUblIdWoCpwe45tgkHYvr4f5iP8JGKIfG3/fD99joEzp4GDPXCDWZNO3RIQjfAinCdAjH+i4sEChUmuxZZd2lYTdvNJeFSG6H9HxYchrErWIKou5j06TduJak0WQbVLZfoXgKcrbFySxcqYdekiW/SzCTN49BkucDny4UyREyOSodi8IYCPCGossTmaYAC44wnejmQLaElK9jNb+PTxSGCYNWDllmSxJXBL/eVeR4xO7FHND6PvHaHXtH0qP3hDx9vVf6UlWS5sjuoX4wR9S4yfURls960aZrUSHZtG157IOUht4dFgdReXlZKs418HWAyghs9Nqkx3WnaUDIWDltIKfuaGb6Bzt+q3mZLRCR/zNU3BtTTkOU93gg9bEPd59xa5hJ3pBcQHvrGZknXMvtKmi0xYzBnJDASq1PG3TRv6uB25EqI/wdW9jOQvpNzB1QCiOoepwFNWCfO2xIDlT1C5diFzzBQE9gON7lWJc9fCfTOgmpT0sNtcVRccVJOOQckNfEhO1FnoLjhsSsZJnah38R5/GguUWroLDqYoyRfSniwsLeyLl9zCQ7SsI3hKaEKZYDzYWeP7ltQmPn3RlPJ71z4sWcaRkbT+pcpILHMUkqsY0DMuv6gsOA5YMr7+vfSgwYFJxsWuPBjioCQXtM60sf6VWbsWhq0F/kFJ2uIseSqcJU+Fs+SpcJY8FV6F5NE9T26zDpskIyPpQykfYY/N8OSMtsnpef4jISnG9NjawwGwDk8GAa9ILC2C43pZewRweHCJ0iMKgOMx2//TyYdSVPCao4KZNfkD755uMH+gnOFnFMTqhQoy5pxoMzTPnS9+yVFKl6RAURdhErYGS1BtPejGXcNAFz7FI/dK6fQoZN/aw3sCCaTnQ3NLxuHapbtPA4HTRuGIaRjF26y1XWhJrljn+7VfcMgk7b2DlDJmYWEazXhy7sBQ/4362TfVuKtxyTjq+X4maI59+uLppv+sSsaRy/ebe6Eizn8YDEytm3TX2AAAAABJRU5ErkJggg==":metrics_gray_namespaceObject;case 2:return 2===selectedButton?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAoCAYAAABuIqMUAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEDSURBVHgB7dbBbcIwFMbx/wOqQnvJCKlYoCPQDegGdIN2grYbdBO6ARmBAQCxAZyIEBLGAcQhCIGCZOfw/Q5JZDnRc2Q/fYaX4pIW+QAsocTRGE95/KeGrLh0WQ39Y//SJIf7mvH0R81YyiJp0l5cmTef0nkpD3ZZ9/3Cvg33SljZA3y0oJ1UeNlvtTyF7dCIoreBUYOKmrhP4korF18HlYs3LHYHmt9UvD+Uy/LYhE7m9/x78RECs8OBfTu2ynzkb73Lk7e/E55/qJlTs/ALGFjRRM5lh78sInKHfbdRJI7AFInDUySOSpGYwBSJRURupkgciykSh6dIHJUiMYEpEse2A6EGjZ17qDedAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAoCAYAAABuIqMUAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgB7dbNbcJAEAXgN5ZzpwSXkIgGkg6cDuIKkhTAfwN0YDqADnADYEqgBO5IHmYRXMyPLCPt+vC+w8qyVtZ6vDt+AjPOy16E6keBHmoiRLtB9rFCB4kbZovNUiHpw1mq/8OsP0fHxK7qCk2fzhL5tfFm8bO8TCE6si/2Do+s4kWsksW4s1WasJdOVHSJAKxYn0fRdYSWBNUfwkpaL74LWi/eulDoDrRvtHg7IIf6PWufhah8u4fAM3dg31S+Lq1yu3aH4NFkVZ2Msv4YHSPXi2le2k+qSuoTbHsUrsogInrFudswEgfASOwbI3FojMTwjJGYiKgxRuJQGIl9YyQOjZEYnjESh3YCKXa7BlUanD0AAAAASUVORK5CYII=";default:return metrics_gray_namespaceObject}};return(0,jsx_runtime.jsxs)("nav",{className:"navbar",style:{display:"flex",alignItems:"center"},children:[(0,jsx_runtime.jsxs)("div",{className:"leadingContent",style:{display:"flex",alignItems:"center"},children:[(0,jsx_runtime.jsx)("h1",{children:(0,jsx_runtime.jsx)("img",{src:TFlogo,alt:"logo",className:"mainLogo"})}),(0,jsx_runtime.jsxs)("ul",{className:"navigation",style:{listStyle:"none",display:"flex",marginLeft:"10px"},children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Button.A,{variant:"contained",style:getButtonStyle(1),startIcon:(0,jsx_runtime.jsx)("img",{src:getButtonLogo(1),alt:"Metrics",style:imageStyle}),onClick:()=>setSelectedButton(1),component:dist.N_,to:"/metrics",children:"Metrics"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Button.A,{variant:"contained",style:getButtonStyle(2),startIcon:(0,jsx_runtime.jsx)("img",{src:getButtonLogo(2),alt:"Logs",style:imageStyle}),onClick:()=>setSelectedButton(2),component:dist.N_,to:"/logs?live=true",children:"Logs"})})]})]}),(0,jsx_runtime.jsx)(Dropdown,{setTimeRange:setSelectedTimeRange})]})};Navbar.defaultProps={title:"truefoundry"};const components_Navbar=Navbar;Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{title:{defaultValue:{value:"'truefoundry'",computed:!1},description:"",type:{name:"string"},required:!1}}};const theme=(0,createTheme.A)(),Navbar_stories={title:"Components/Navbar",component:components_Navbar,decorators:[Story=>(0,jsx_runtime.jsx)(ThemeProvider.A,{theme,children:(0,jsx_runtime.jsx)(dist.Kd,{children:(0,jsx_runtime.jsx)(LiveFeedStatusContext.w,{children:(0,jsx_runtime.jsx)(TimeRangeContext.A,{children:(0,jsx_runtime.jsx)(Story,{})})})})})]},Default=(args=>(0,jsx_runtime.jsx)(components_Navbar,{...args})).bind({});Default.args={title:"truefoundry"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Navbar {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/context/LiveFeedStatusContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>useLiveFeedStatus,w:()=>LiveFeedStatusProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LiveFeedStatusContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),LiveFeedStatusProvider=_ref=>{let{children}=_ref;const[isLive,setIsLive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LiveFeedStatusContext.Provider,{value:{isLive,setIsLive},children})},useLiveFeedStatus=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LiveFeedStatusContext);LiveFeedStatusProvider.__docgenInfo={description:"",methods:[],displayName:"LiveFeedStatusProvider"}},"./src/context/TimeRangeContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TimeRangeProvider,X:()=>useTimeRangeContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TimeRangeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),useTimeRangeContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimeRangeContext),TimeRangeProvider=_ref=>{let{children}=_ref;const[selectedTimeRange,setSelectedTimeRange]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("5m");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimeRangeContext.Provider,{value:{selectedTimeRange,setSelectedTimeRange},children})};TimeRangeProvider.__docgenInfo={description:"",methods:[],displayName:"TimeRangeProvider"}}}]);