import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/headerAndFooter/headerAndFooter.module.scss'
import AdaptivFooter from "../components/AdaptivFooter";



export function MainLayout({children, title="Алматы Менеджмент Университет"}){
    return( 
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="AlmaU"></meta>
                <meta name="discriprion" content="This is Almau Site"></meta>
                <meta charSet="utf_8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header className={styles.header}>
                <div className={styles.container}>
                        <Link href={`/`}><a><img src="/almauLogo.svg" alt="Логотип Almaty Managment University" className={styles.logo} /></a></Link>
                        <img src="/burger_menu.svg" alt="Меню" className={styles.burger_menu} />
                        <nav className={styles.nav_container}>
                            <div className={styles.nav_container_top}>
                                <ul>
                                    <li><Link href="/"><a className={styles.header_link}><span className={styles.span_icon1}>AlmaUnion</span></a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}><span className={styles.span_icon2}>Версия для слабовидящих</span></a></Link></li>
                                    <li className={styles.language}><Link href="/"><a className={styles.header_link}>RU</a></Link><Link href="/"><a className={styles.header_link}>KZ</a></Link><Link href="/"><a className={styles.header_link}>EN</a></Link></li>
                                </ul>
                                <div className={styles.nav_top_button}>
                                            <form>
                                                <input type="text" placeholder="Поиск"/>
                                                <button type="submit" />
                                            </form>
                                        </div>
                            </div>
                            <span className={styles.nav_container_line}></span>
                            <div className={styles.nav_container_bottom}>
                                <ul className={styles.header_list}>
                                    <li><Link href="/about"><a className={styles.header_link}>Об AlmaU</a></Link></li>
                                    <li><Link href="/post"><a className={styles.header_link}>Поступление</a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}>Школы</a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}>Студентам</a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}>Проекты</a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}>Блог AlmaU</a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}>Государству и бизнесу</a></Link></li>
                                    <li><Link href="/"><a className={styles.header_link}>3D тур</a></Link></li>
                                </ul>
                            </div>
                        </nav> 
                </div>
            </header>
                {children}
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_top}>
                        <div className={styles.footer_top_container}>
                            <ul  className={styles.footer_top_icons}>
                                <li><Link href="/"><a><img src="/icons/headerFooter/footerLogo.svg"/></a></Link></li>
                                <li><Link href="/"><a><img src="/icons/headerFooter/vcIcon.svg"/></a></Link></li>
                                <li><Link href="/"><a><img src="/icons/headerFooter/fbIcon.svg"/></a></Link></li>
                                <li><Link href="/"><a><img src="/icons/headerFooter/tIcon.svg"/></a></Link></li>
                                <li><Link href="/"><a><img src="/icons/headerFooter/iIcon.svg"/></a></Link></li>
                                <li><Link href="/"><a><img src="/icons/headerFooter/yIcon.svg"/></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.footer_top_container}>
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
                        <div className={styles.footer_top_container}>
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
                        <div className={styles.footer_top_container}>
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
                        <div className={styles.footer_top_container}>
                            <h4>Как найти нас</h4>
                            <p className={styles.footer_top_container_p}>
                                Розыбакиева 227 <br/>
                                Алматы, 050060, Казахстан <br/>
                                На карте <br/>
                                Call Center: 8 (727) 313 30 40 <br/>
                                E-mail: info@almau.edu.kz <br/>
                            </p>
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
                    <div className={styles.footer_bottom}><p>© 2021 Almaty Management University</p></div>
                </div>
            </footer>
            <AdaptivFooter />
        </>
    )
}