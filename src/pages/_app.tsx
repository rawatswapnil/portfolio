// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ToastContainer renders the toasts */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} // 5 seconds for auto-close
        hideProgressBar={false} // Show progress bar
        newestOnTop={true} // Show new toasts on top
        closeOnClick 
        rtl={false} // Right-to-left support
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;