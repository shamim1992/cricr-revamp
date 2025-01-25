import { Provider } from 'react-redux'
import '../styles/global.css'
import store from '@/redux/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const myApp = ({Component, ...pageProps})=>{
return (
    <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>

)
}

export default myApp