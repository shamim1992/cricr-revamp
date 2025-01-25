import '../styles/global.css'
const myApp = ({Component, ...pageProps})=>{
return (
<Component {...pageProps} />
)
}

export default myApp