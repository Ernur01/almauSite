import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';




export default function MyApp({Component, pageProps}){
    return(
        <>
            <Component {...pageProps}/>
            {/* <style jsx global>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }
            `}</style> */}
        </>
    )
}