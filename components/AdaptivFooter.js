import styles from '../styles/headerAndFooter/adaptivFooter.module.scss'
import Link from 'next/link';


export default function AdaptivFooter() { 
    return(
        <>
            <footer className={styles.footer_adaptive}>
                <div className={styles.container_ad}>
                    <div className={styles.top_ad}>
                        <div className={styles.top_left_ad}>
                            <ul  className={styles.footer_top_icons_ad}>
                                <li className={styles.logo_ad}><Link href="/"><a><img src="/icons/headerFooter/footerLogo.svg"/></a></Link></li>
                                <li className={styles.list_item_ad}><Link href="/"><a><img src="/icons/headerFooter/vcIcon.svg"/></a></Link></li>
                                <li className={styles.list_item_ad}><Link href="/"><a><img src="/icons/headerFooter/fbIcon.svg"/></a></Link></li>
                                <li className={styles.list_item_ad}><Link href="/"><a><img src="/icons/headerFooter/tIcon.svg"/></a></Link></li>
                                <li className={styles.list_item_ad}><Link href="/"><a><img src="/icons/headerFooter/iIcon.svg"/></a></Link></li>
                                <li className={styles.list_item_ad}><Link href="/"><a><img src="/icons/headerFooter/yIcon.svg"/></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.top_right_ad}>
                            <div className={styles.top_right_first_ad}>
                                <div className={styles.trf_container_ad}>
                                    <h4>Об AlmaU</h4>
                                    <p>Об университете <br/>
                                    Устав <br/>
                                    Лицензия <br/>
                                    Стратегия <br/>
                                    Стратегия УО Алматы <br/>
                                    Менеджмент Университет <br/>
                                    История <br/>
                                    Совет Попечителей <br/>
                                    Администрация <br/>
                                    Аккредитации, рейтинги, <br/>награды <br/>
                                    Информационно-ресурсное <br/>управление <br/>
                                    Академическая Честность <br/>
                                    Библиотека <br/>
                                    Международное сотрудничество <br/>
                                    Предпринимательство и инновации <br/>
                                    Инфраструктура <br/>
                                    Музей <br/>
                                    Карьера и вакансии <br/>
                                    Политика Конфиденциальности <br/>
                                    Политика в области качества <br/>
                                    Реквизиты <br/>
                                    Отчеты об итогах работы <br/>
                                    </p>
                                </div>
                                <div className={styles.trs_container_ad}>
                                    <h4>Поступление</h4>
                                    <p>
                                        Бакалавриат <br/>
                                        Дистанционное обучение <br/>
                                        Магистратура <br/>
                                        Иностранным абитуриентам <br/>
                                        MBA <br/>
                                        PhD <br/>
                                        DBA <br/>
                                        Курсы и тренинги <br/>
                                        Open AlmaU <br/>
                                        Колледж AlmaU <br/>
                                    </p>
                                </div>
                                <div className={styles.trs_container_ad +" "+ styles.position_edit_ad}>
                                    <h4>Как найти нас</h4>
                                    <p>
                                        Розыбакиева 227 <br/>
                                        Алматы, 050060, Казахстан <br/>
                                        На карте <br/>
                                        Call Center: 8 (727) 313 30 40 <br/>
                                        E-mail: info@almau.edu.kz <br/>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.top_right_second_ad}>
                                <div className={styles.trf_container_ad}>
                                    <h4>Школы</h4>
                                    <p>
                                    Школа менеджмента <br/>
                                    Школа политики и <br/>права <br/>
                                    Школа Инженерного <br/>Менеджмента <br/>
                                    Школа предпринимательства<br/>
                                    и инноваций <br/>
                                    Высшая Школа Бизнеса <br/>
                                    Школа Экономики  <br/>
                                    и Финансов <br/>
                                    Представительство <br/>AlmaU в г. Астана <br/>
                                    Представительство <br/>AlmaU в г. Атырау <br/>
                                    Представительство <br/> AlmaU в г. Шымкент <br/>
                                    </p>
                                </div>
                                <div className={styles.trs_container_ad}>
                                    <h4>Реквизиты</h4>
                                    <p>
                                        УО «Алматы Менеджмент Университет» <br/>
                                        КБЕ 18, КНП 861 <br/>
                                        БИН 971 240 001 583 <br/>
                                        ИИК KZ406017131000053681 <br/>
                                        АО «Народный Банк Казахстана» <br/>
                                        БИК HSBKKZKX <br/>
                                        050060 г.Алматы, ул.Розыбакиева,227 <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom_ad}>
                        <p>© 2021 Almaty Management University</p>
                    </div>
                </div>
            </footer>
        </>
    )
 }