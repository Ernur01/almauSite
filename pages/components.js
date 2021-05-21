import AdaptivFooter from "../components/AdaptivFooter";
import MainCard from '../components/MainCard'
import MiniNavigation from '../components/MiniNavigation'



export default function Cmponents() { 
    const fb_nav = [{
        text: "Бакалавриат"
    },
    {
        text: "Магистратура"
    },
    {
        text: "MBA"
    },
    {
        text: "PhD"
    },
    {
        text: "DBA"
    }]
    return <MiniNavigation list={fb_nav} />
 }