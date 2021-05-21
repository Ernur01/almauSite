import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/openAlmau.module.scss'

export default function OpenAlmau() { 

    const secondBlockData = [{
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    },
    {
        id: 0,
        img: "/openAlmau/sb_card_1.jpg",
        subTitle: "AlmaU TM",
        title: "Талант - менеджмент",
        date: "Курс доступен с янв. 01, 2018"
    }]

    return(
        <MainLayout title="OpenAlmau">
            <main>
                <div className={styles.wrapper}>
                    <div className={styles.first_block}>
                        <div className={"row row-cols-1 row-cols-lg-2 g-4"}>
                            <div className={"col"}>
                                <div className={styles.fb_top_content}>
                                    <h1>Миссия «Open AlmaU» – сделать лучшие образовательные курсы AlmaUniversity доступными каждому!</h1>
                                    <p>OpenAlmaU – Массовые Открытые Онлайн Курсы Алматы Менеджмент Университета
                                        <br/>
                                        <br/>Массовый открытый онлайн-курс (Massive open online courses, MOOC) рассчитан на слушателей различных уровней подготовки — для всех желающих обучаться у лучших преподавателей страны и мира, c применением электронных и интерактивных технологий.
                                        <br/>
                                        <br/>Миссия «OPEN AlmaU» – сделать лучшие образовательные курсы AlmaUniversity доступными каждому!
                                    </p>
                                </div>
                            </div>
                            <div className={"col"}>
                                <img className={styles.fb_top_video} src={"/openAlmau/video.png"} alt={"Видео OpenAlmau"} />
                            </div>
                        </div>
                        <div className={styles.fb_bottom_content}>
                            <p>
                                OpenAlmaU представляет собой открытую образовательную площадку с открытым доступом к бесплатным онлайн 
                                курсам от ведущих преподавателей Алматы Менеджмент Университета и других вузов страны. Все без исключения 
                                желающие получают доступ к освоению онлайн курсов, в любое удобное для них время и место.
                            </p>
                            <p>
                                Алматы Менеджмент Университет – предпринимательский, социально - ответственный университет мирового уровня
                                и мы верим в то, что Проект будет способствовать созданию качественного и доступного образования для 
                                широких слоёв нашего общества.
                            </p>
                        </div>
                    </div>
                    <div className={styles.second_block}>
                        <div className={styles.sb_heading}>
                            <h1>Курсы</h1>
                            <span className={styles.sb_line}></span>
                        </div>
                        <div className={"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"}>
                            {secondBlockData.map(s => (
                                <div className={"col"}>
                                    <div className={styles.sb_card}>
                                        <img src={s.img} />
                                        <div className={styles.sb_card_content}>
                                            <div className={styles.card_title_container}>
                                                <p>{s.subTitle}</p>
                                                <h4>{s.title}</h4>
                                            </div>
                                            <p className={styles.card_date}>{s.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.sb_btn_con}>
                            <Link href="#"><a className={styles.sb_btn}>Посмотреть все курсы</a></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.third_block}>
                    <div className={styles.third_block_container}>
                        <div className={styles.tb_heading}>
                            <h1>Партнеры</h1>
                            <span className={styles.tb_line}></span>
                        </div>
                        <div className={"row row-cols-1 row-cols-lg-2 g-4"}>
                            <div className={"col"}>
                                <div className={styles.tb_top_content}>
                                    <p>Тип Некоммерческое партнёрство</p>
                                    <p>Год основания Май 2011</p>
                                    <p>Расположение Казахстан: Алматы</p>
                                    <p>Ключевые фигуры Основатель и Председатель Попечительского Совета фонда Рауан Кенжеханулы, Президент фонда – Нурбек Матжани</p>
                                    <p>Сфера деятельности образование, культура, новые медиа</p>
                                    <p>Веб-сайт: wikibilim.kz, openU.kz</p>
                                </div>
                            </div>
                            <div className={"col"}>
                                <img className={styles.tb_top_img} src={"/openAlmau/tb_img.png"} alt={"WIKI BILIM"} />
                            </div>
                        </div>
                        <div className={styles.tb_bottom_content}>
                            <p>КРАТКО О ПАРТНЕРСКОМ ПРОЕКТЕ</p>
                            <p>Название проекта: Қазақстанның ашық университеті / Open University Kazakhstan / Открытый университет Казахстана</p>
                            <p>
                                Суть проекта. Открытый университет представляет собой образовательную платформу, которая предлагает 
                                бесплатный доступ к онлайн курсам от ведущих преподавателей вузов страны. Любой желающий сможет без ограничений 
                                освоить онлайн курсы, размещенные на платформе, когда и где ему это удобно.
                            </p>
                            <p>
                                Инициатор и партнеры. Проект инициирован Общественным фондом "WikiBilim" при поддержке ведущих вузов страны,
                                таких как, КазНИТУ им. Сатпаева, КБТУ, AlmaU, SDU, а также Института математики и математического моделирования.
                                Генеральным партнером проекта является телекоммуникационный оператор «Кселл».
                            </p>
                            <p>
                                Цель: предоставить гражданам нашей страны, и не только, максимальную доступность к онлайн курсам от ведущих
                                преподавателей вузов страны, преимущественно на казахском языке.
                            </p>
                            <p>
                                Основная целевая аудитория на первом этапе: Молодые люди, обучающиеся в старших классах школы, в колледжах и
                                вузах, люди с ограниченными возможностями и жители удаленных районов страны, которые по тем или иным причинам
                                не могут получить образование. А также все желающие освоить онлайн курсы.
                            </p>
                            <p>
                                Особенности проекта. Открытый университет не является образовательным учреждением и не выдает дипломов. Проект
                                исключительно социальный, не коммерческий. Все курсы, размещенные на платформе, доступны бесплатно и без формальных 
                                требований.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.fourth_block}>
                        <div className={styles.fob_heading}>
                            <h1>Помощь</h1>
                            <span className={styles.fob_line}></span>
                        </div>
                        <div className={styles.fob_content}>
                            <p>
                                Если у вас возникли проблемы при работе с порталом или курсами, опишите как можно подробнее 
                                возникшие трудности в письме, которое нужно отправить по адресу: open@almau.edu.kz
                            </p>
                            <p>Если Вы сможете предоставить следующую информацию, то это поможет намного быстрее решить Ваш вопрос:</p>
                            <ul>
                                <li>название курса, в котором возникла проблема</li>
                                <li>полная ссылка на проблемную страницу из адресной строки вашего браузера</li>
                                <li>по возможности, приложите скриншот возникающей проблемы</li>
                                <li>описание ошибки - какие действия вы выполняете и на каком шаге возникает ошибка</li>
                                <li>используемый браузер, операционная система /устройство</li>
                                <li>ваш логин на сайте</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
 }