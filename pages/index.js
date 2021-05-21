import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import MainCard from '../components/MainCard'
import MiniNavigation from '../components/MiniNavigation'
import styles from '../styles/main.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination ]);

export default function Index(){
    
    const fb_nav = [{
        id: 1,
        text: "Бакалавриат"
    },
    {
        id: 2,
        text: "Магистратура"
    },
    {
        id: 3,
        text: "MBA"
    },
    {
        id: 4,
        text: "PhD"
    },
    {
        id: 5,
        text: "DBA"
    }]

    const fifthBlockData = [
    {
        id: 1,
        image: "/mainPage/fifthBlockLion.jpg",
        description: "Первый слайд"
    },
    {
        id: 2,
        image: "/mainPage/fifthBlock.jpg",
        description: "Второй слайд"
    }, 
    {
        id: 3,
        image: "/mainPage/fifthBlock.jpg",
        description: "Второй слайд"
    }, 
    {
        id: 4,
        image: "/mainPage/fifthBlock.jpg",
        description: "Второй слайд"
    }]

    const seventhBlockData = [{
        id: 1,
        image: "/mainPage/seventhBlockData/sevbFirstSlide.svg",
        description: "Первый слайд"
    },
    {
        id: 2,
        image: "/mainPage/seventhBlockData/sevbSecondSlide.svg",
        description: "Второй слайд"
    },
    {
        id: 3,
        image: "/mainPage/seventhBlockData/sevbThirdSlide.svg",
        description: "Третьи слайд"
    },
    {
        id: 4,
        image: "/mainPage/seventhBlockData/sevbFourthSlide.svg",
        description: "Четвертый слайд"
    }]

    const eightBlockData =[{
        id: 1,
        image: "/mainPage/eighthBlockData/ebFirstSlide.png",
        description: "Первый слайд"
    },
    {
        id: 2,
        image: "/mainPage/eighthBlockData/ebSecondSlide.png",
        description: "Второй слайд"
    },
    {
        id: 3,
        image: "/mainPage/eighthBlockData/ebThirdSlide.png",
        description: "Третьи слайд"
    },
    {
        id: 4,
        image: "/mainPage/eighthBlockData/ebFourthSlide.png",
        description: "Четвертый слайд"
    },
    {
        id: 5,
        image: "/mainPage/eighthBlockData/ebFifthSlide.png",
        description: "Пятый слайд"
    },
    {
        id: 6,
        image: "/mainPage/eighthBlockData/ebSixthSlide.png",
        description: "Шестой слайд"
    },
    {
        id: 7,
        image: "/mainPage/eighthBlockData/ebSixthSlide.png",
        description: "Шестой слайд"
    },
    {
        id: 8,
        image: "/mainPage/eighthBlockData/ebSixthSlide.png",
        description: "Шестой слайд"
    }]

    const staticBlue = {
        color: "#13447E",
        "text-decoration": "border",
        "border-bottom": "4px solid #13447E"
    }

    const inputValue = {
        name: "Ваше имя",
        phone: "Телефон",
        mail: "E-mail"
    }

    const [Input, setInput] = useState(inputValue)

    function change(e){
        setInput(Input.name = e.target.value)
    }

    const TenthBlockData = {
        bigLeftArt: "/mainPage/ninthLeftArt.svg",
        bigRightArt: "/mainPage/ninthRightArt.svg",
        littleLeftArt: "/mainPage/ninthLittleLeftArt.svg",
        littleRightArt: "/mainPage/ninthLittleRightArt.svg"
    }
    const [TenthBlockArt, setTenthBlockArt] = useState(TenthBlockData)
    const [Width2, setWidth2] = useState(6)
    const [Width, setWidth] = useState(5)
    useEffect(()=>{
        if(window.outerWidth <= 768 && window.outerWidth > 425){
            setWidth(2)
        }else if(window.outerWidth <= 425){
            setWidth(1)
            setWidth2(2)
        }
    })

    return (
    <MainLayout title="ALMA University">
        <main className={styles.main_container}>
            <div className={styles.first_block}>
                <div className={styles.first_block_container}> 
                    <div className={styles.fb_bg}>
                        <img src="/mainPage/firstBlock/Left.svg" />           
                        <img src="/mainPage/firstBlock/Right.svg" />           
                    </div>        
                    <div className={styles.first_block_small_container}>
                        <div className={styles.first_block_heading}>
                            <h1>Almaty Management University</h1>
                            <span className={styles.first_block_line}></span>
                        </div>
                        <p>
                            Практический опыт показывает, что реализация намеченного плана 
                            развития влечет за собой процесс внедрения и модернизации позиций,
                            занимаемых участниками в отношении поставленных задач.
                        </p>
                        <div className={styles.first_block_btn}>
                            <Link href={'/'}><a className={styles.btn1}>Новости вуза</a></Link>
                            <Link href={'/'}><a className={styles.btn1}>Программы вуза</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.second_block}>
                <div className={styles.second_block_container}>
                    <div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"}>
                        <div className={"col"+" "+styles.sbc_m}>
                            <div className={styles.sbc_box_1}>
                                <p>Приемная <br/>Комиссия</p>
                                <Link href={'/'}><a className={styles.sbc_btn_1}>Записаться</a></Link>
                            </div>
                        </div>
                        <div className={"col"+" "+styles.sbc_m}>
                            <div className={styles.sbc_box_2}>
                                <p>День открытых <br/>дверей</p>
                                <Link href={'/'}><a className={styles.sbc_btn_2}>Подробнее</a></Link>
                            </div>
                        </div>
                        <div className={"col"+" "+styles.sbc_m}>
                            <div className={styles.sbc_box_3}>
                                <p>История <br/>университета</p>
                                <Link href={'/'}><a className={styles.sbc_btn_3}>Подробнее</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.third_block}>
                <img className={styles.tb_art} src="/mainPage/tbRightArt.svg"/>
                <div className={styles.third_block_container}>
                <div className={styles.tbc_left}>
                        <div className={styles.tb_heading}>
                            <h3>Об AlmaU</h3>
                            <span></span>
                        </div> 
                        <p>
                            Не следует, однако забывать, что дальнейшее развитие <br/>
                            различных форм деятельности способствует подготовки и <br/>
                            реализации форм развития. С другой стороны рамки и место <br/>
                            обучения кадров способствует подготовки и реализации модели <br/>
                            развития. Если у вас есть какие то интересные предложения, <br/>
                            обращайтесь! Студия Web-Boss всегда готова решить любую <br/>
                            задачу
                        </p>
                        <Link href="/"><a className={styles.tb_btn}>Узнать больше об университете</a></Link>
                </div>
                <div className={styles.tbc_right}>
                        <video src="/" poster="/"></video>
                        <div className={styles.tb_promo_play}>
                            <div>
                                <a></a>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className={styles.fourth_block}>
                <div className={styles.fourth_block_container}>
                    <div className={styles.fb_heading}>
                        <h3>Программы обучения в Almau</h3>
                        <span></span>
                    </div> 
                    <MiniNavigation list={fb_nav} />
                    <div className={styles.fb_content}>
                        <div className={"row row-cols-1 row-cols-lg-3 g-4"}>
                            <div className={"col"}>
                                <div className={styles.fb_card}>
                                    <div className={styles.fb_card_left}>
                                        <h4>Школа менеджемента</h4>
                                        <ul>
                                            <li>Менеджмент</li>
                                            <li>Маркетинг</li>
                                            <li>Логистика</li>
                                        </ul>
                                        <Link href="/"><a className={styles.fb_card_btn}>Подробнее</a></Link>
                                    </div>
                                    <img src="/mainPage/fourthBlock/first_art_d.png" className={styles.fb_card_img} />
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.fb_card}>
                                    <div className={styles.fb_card_left}>
                                        <h4>Школа менеджемента</h4>
                                        <ul>
                                            <li>Менеджмент</li>
                                            <li>Маркетинг</li>
                                            <li>Логистика</li>
                                        </ul>
                                        <Link href="/"><a className={styles.fb_card_btn}>Подробнее</a></Link>
                                    </div>
                                    <img src="/mainPage/fourthBlock/first_art_d.png" className={styles.fb_card_img} />
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.fb_card}>
                                    <div className={styles.fb_card_left}>
                                        <h4>Школа менеджемента</h4>
                                        <ul>
                                            <li>Менеджмент</li>
                                            <li>Маркетинг</li>
                                            <li>Логистика</li>
                                        </ul>
                                        <Link href="/"><a className={styles.fb_card_btn}>Подробнее</a></Link>
                                    </div>
                                    <img src="/mainPage/fourthBlock/first_art_d.png" className={styles.fb_card_img} />
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.fb_card}>
                                    <div className={styles.fb_card_left}>
                                        <h4>Школа менеджемента</h4>
                                        <ul>
                                            <li>Менеджмент</li>
                                            <li>Маркетинг</li>
                                            <li>Логистика</li>
                                        </ul>
                                        <Link href="/"><a className={styles.fb_card_btn}>Подробнее</a></Link>
                                    </div>
                                    <img src="/mainPage/fourthBlock/first_art_d.png" className={styles.fb_card_img} />
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.fb_card}>
                                    <div className={styles.fb_card_left}>
                                        <h4>Школа менеджемента</h4>
                                        <ul>
                                            <li>Менеджмент</li>
                                            <li>Маркетинг</li>
                                            <li>Логистика</li>
                                        </ul>
                                        <Link href="/"><a className={styles.fb_card_btn}>Подробнее</a></Link>
                                    </div>
                                    <img src="/mainPage/fourthBlock/first_art_d.png" className={styles.fb_card_img} />
                                </div>
                            </div>
                            <div className="col">
                                <div className={styles.fb_card}>
                                    <div className={styles.fb_card_left}>
                                        <h4>Школа менеджемента</h4>
                                        <ul>
                                            <li>Менеджмент</li>
                                            <li>Маркетинг</li>
                                            <li>Логистика</li>
                                        </ul>
                                        <Link href="/"><a className={styles.fb_card_btn}>Подробнее</a></Link>
                                    </div>
                                    <img src="/mainPage/fourthBlock/first_art_d.png" className={styles.fb_card_img} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <img src="mainPage/fbLeftArt.svg" className={styles.fb_left_art}/>
            </div>
            <div className={styles.fifth_block}>
                <div className={styles.fifth_block_container}>
                    <Swiper className={styles.swiper_pagination_bullet_active}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            {fifthBlockData.map(e => (
                                <SwiperSlide>
                                    <img src={e.image} />
                                </SwiperSlide>
                            ))}  
                    </Swiper>
                </div>
                <img src={"/mainPage/fifthBlockArt.svg"} className={styles.fifth_block_art} />
            </div>
            <div className={styles.sixth_block}>
                <div className={styles.sixth_block_container}>
                    <div className={styles.sb_heading}>
                        <h3>Новости, события и анонсы</h3>
                        <span className={styles.sb_line}></span>
                    </div>
                    <div className={styles.sb_content}>
                        <MainCard/>
                    </div>
                    <Link href={"/"}><a className={styles.sb_btn}>Все новости, события и анонсы</a></Link>
                </div>
            </div>
            <div className={styles.seventh_block}>
                 <div className={styles.seventh_block_container}>
                    <div className={styles.sevb_content}>
                        <div className={styles.sevb_heading}>
                            <h3>Студенческая жизнь в AlmaU</h3>
                            <span className={styles.sevb_line}></span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit class nostra, mi ultricies cras ad nibh conubia laoreet. Eget aptent curae risus proin enim finibus libero elementum nunc, tristique bibendum gravida nec quis mollis convallis arcu pulvinar, ridiculus vitae laoreet facilisi rutrum dictumst mauris potenti. Iaculis libero sit magnis euismod vitae ultricies senectus risus molestie, laoreet commodo mi metus hac imperdiet cras vel egestas felis, fermentum gravida montes ac pharetra feugiat taciti lorem. 
                        </p>
                        <Link href="/"><a className={styles.sevb_btn}>Все материалы</a></Link>
                     </div>
                     <div className={styles.sevb_slider}>
                        <Swiper
                                spaceBetween={10}
                                slidesPerView={Width}
                                loop={true}
                            >
                                {seventhBlockData.map(e => (
                                    <SwiperSlide>
                                        <img src={e.image} />
                                    </SwiperSlide>
                                ))}  
                            </Swiper>
                     </div>
                </div>
            </div>
            <div className={styles.eighth_block}>
                <div className={styles.eighth_block_container}>
                    <div className={styles.eb_heading}>
                        <h3>Аккредитации и рейтинги</h3>
                        <span className={styles.eb_line}></span>
                    </div>     
                    <div className={styles.eb_content}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={Width2}
                        >
                            {eightBlockData.map(e => (
                                <SwiperSlide>
                                    <img src={e.image} />
                                </SwiperSlide>
                            ))}  
                        </Swiper>
                    </div>  
                </div>        
            </div>
            <div className={styles.ninth_block}>
                <img className={styles.ninth_block_art} src={Width==1 ? TenthBlockArt.littleLeftArt : TenthBlockArt.bigLeftArt} />
                <div className={styles.ninth_block_container}>
                    <div className={styles.nb_heading}>
                        <h3>Almau в цифрах</h3>
                        <span className={styles.nb_line}></span>
                    </div>   
                    <div className={styles.nb_content}>
                        <div>
                            <p className={styles.nb_number}>80</p>
                            <p className={styles.nb_text}>
                                AlmaU является лидирующим предпринимательским 
                                и социально-ответственным университетом в Казахстане
                            </p>
                        </div>
                        <div>
                            <p className={styles.nb_number}>80</p>
                            <p className={styles.nb_text}> AlmaU является лидирующим предпринимательским 
                                 и социально-ответственным университетом в Казахстане
                            </p>
                        </div>
                        <div>
                            <p className={styles.nb_number}>80</p>
                            <p className={styles.nb_text}>AlmaU является лидирующим предпринимательским 
                                 и социально-ответственным университетом в Казахстане
                            </p>
                        </div>
                    </div>
                </div>
                <img className={styles.ninth_block_art} src={Width==1 ? TenthBlockArt.littleRightArt : TenthBlockArt.bigRightArt} />
            </div>
            <div className={styles.tenth_block}>
                <div className={styles.tenth_block_container}>
                    <div className={styles.tb_content_left}>    
                        <h3>Как найти нас</h3>
                        <div className={styles.tb_small_content_left}>
                            <div className={styles.tb_contacts}>
                                <p><span>Адрес: </span>Казахстан, Алма-Ата, Розыбакиева 227</p>
                                <p><span>Телефон: </span>8 (727) 313 30 40</p>
                                <p><span>E-mail: </span>info@almau.edu.kz</p>
                            </div>
                            <img src={"/mainPage/qr_code.svg"}  className={styles.tb_left_content_none} />
                        </div>
                    </div>
                    <form onSubmit={()=>{}} className={styles.tb_right_form} >                          
                        <h5>Заполните форму для связи с нами</h5>
                        <div>
                            <input  
                                name="inputForm" 
                                type="text" 
                                value={Input.name}
                                onChange={change} />
                            <input  
                                name="inputForm" 
                                type="text" 
                                value={Input.phone}
                                onChange={()=>{}} />
                            <input  
                                name="inputForm" 
                                type="text" 
                                value={Input.mail}
                                onChange={()=>{}} />
                        </div>
                        <a>Отправить заявку</a>
                    </form>
                </div>
            </div>
        </main>
    </MainLayout>
    )
}