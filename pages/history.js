import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/history.module.scss'
import 'bootstrap/dist/css/bootstrap.css'

export default function History(){
    return(
        <MainLayout title="История">
            <main>
                <section className={styles.welcome}>
                    <div className={"container"}>
                        <div className="row">
                            <div className="col-lg-12">
                                {/*<img src="img/welcome.png" alt="" />*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.introduction}>
                    <div className={"container"}>
                        <div className="row">
                            <div className={"col-lg-12" + " " + styles.years}>
                                <div>
                                    <img src="/history/miniLogo.svg" alt="" />
                                </div>
                                <div className={styles.year_little}>2020</div>
                                <span className={styles.span4}></span>
                                <div className={styles.year_little}>2010</div>
                                <span className={styles.span4}></span>
                                <div className={styles.year_little}>2000</div>
                                <span className={styles.span4}></span>
                                <div className={styles.year_little}>1990</div>
                                <span className={styles.span4}></span>
                                <div className={styles.year_little}>1980 </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className="col-lg-6">
                                <span className={styles.span1}><span className={styles.circle}></span></span>
                                <div className={styles.year}>
                                    <h4>2017</h4>
                                </div>
                                <img src="/history/2017.png" alt="" />
                                <p>AlmaU подтвердил репутацию компании №1 в отрасли «Образование» по итогам рейтинга казахстанских компаний «Топжарған-2016».</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.asl}>
                                    <span className={styles.span2}><span className={styles.circleleft}></span></span>

                                    <div className={styles.yearleft}>
                                        <h4>2016</h4>
                                    </div>
                                    <img src="/history/2016.png" alt="" />
                                    <p>Программы магистратуры и МВА AlmaU вошли в топ-200 лучших программ мира по версии международного рейтингового агентства Eduniversal.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}s>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>2015</h4>
                                </div>
                                <img src="/history/2015.png" alt="" />
                                <p>AlmaU подтвердил звание лучшего бизнес-вуза в Казахстане и Центральной Азии по версиимеждународного рейтингового агентства Eduniversal.</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>2014</h4>
                                    </div>
                                    <img src="/history/2014.png" alt="" />
                                    <p>Открыто Представительство Международной Академии Бизнеса в г. Шымкент, при поддержке Палаты предпринимателей Южно-Казахстанской области.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <div className={styles.circle}></div>
                                </span>
                                <div className={styles.year}>
                                    <h4>2013</h4>
                                </div>
                                <img src="/history/2013.png" alt="" />
                                <p>В марте создано новое структурное подразделение МАБ - Школа государственной и общественной политики (ШГОП), а осенью был дан старт двум магистерским программам «Менеджмент в государственном секторе», «Менеджмент в здравоохранении»,
                                    «Магистр управления в образовании» в гг. Актау и Алматы</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>2012</h4>
                                    </div>
                                    <img src="/history/2012.png" alt="" />
                                    <p>МАБ стал победителем конкурса среди казахстанских работодателей «Сеним-2011», в номинации «Лучшая компания-работодатель в двух столицах».</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>2011</h4>
                                </div>
                                <img src="/history/2017.png" alt="" />
                                <p>МАБ стал обладателем серебряной награды конкурса среди работодателей «Сеним-2010», в номинации «Лучший работодатель в двух столицах».</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>2010</h4>
                                    </div>
                                    <img src="/history/2010.png" alt="" />
                                    <p>В январе МАБ – единственному вузу Казахстана - была присуждена международная аккредитация: Европейская институциональная аккредитация Международной ассоциации развития менеджмента CEEMAN в области образования.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>2009</h4>
                                </div>
                                <img src="/history/2009.png" alt="" />
                                <p>МАБ в числе первых 6 вузов в Казахстане получил национальную аккредитацию от Министерства образования и науки РК.</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>2008</h4>
                                    </div>
                                    <img src="/history/2008.png" alt="" />
                                    <p>Международная академия бизнеса заняла третье место среди негосударственных (частных) вузов и 5 место в общем рейтинге вузов по гуманитарно-экономическим направлениям подготовки</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>2006</h4>
                                </div>
                                <img src="/history/2006.png" alt="" />
                                <p>Подписание договора и запуск международной программы MBA «Информационный менеджмент (CIO)» совместно с Академией Народного Хозяйства при Правительстве РФ (АНХ).</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}><span className={styles.circleleft}></span></span>

                                    <div className={styles.yearleft}>
                                        <h4>2005</h4>
                                    </div>
                                    <img src="/history/2005.png" alt="" />
                                    <p>Запуск первой программы ДВА совместно с Российской Академией Народного Хозяйства при Правительстве РФ.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>2004</h4>
                                </div>
                                <img src="/history/2004.png" alt="" />
                                <p>Открыта программа МВА со специализацией «Финансы» совместно с финансовой Академией при Правительстве РФ (Москва, Россия).</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>2003</h4>
                                    </div>
                                    <img src="/history/2003.png" alt="" />
                                    <p>МАБ занял первое место в рейтинге бизнес-школ Казахстана, проведенном деловым журналом «National Business» (программы МВА).</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>2002</h4>
                                </div>
                                <img src="/history/2002.png" alt="" />
                                <p>По приказу Министерства образования и науки № 34 от 18.01.02 г. Международная Академия Бизнеса успешно прошла государственную аттестацию и получила бессрочную государственную лицензию на ведение образовательной деятельности АА № 0000165
                                    от 02.02.02 г.</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>2001</h4>
                                    </div>
                                    <img src="/history/2001.png" alt="" />
                                    <p>Открыты программы высшей профессиональной подготовки (бакалавриат) на двух факультетах по семи специальностям: Экономика, Маркетинг и коммерция, Финансы и кредит, Бухгалтерский учет и аудит, Экономика и управление на предприятии
                                        (по отраслям), Менеджмент организации (по отраслям), Информатика.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>1999</h4>
                                </div>
                                <img src="/history/1999.png" alt="" />
                                <p>Первый набор на совместную с Высшей Школой Менеджмента НЕС (Париж, Франция) программу «Мастер профессионального управления».</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>1998</h4>
                                    </div>
                                    <img src="/history/1998.png" alt="" />
                                    <p>Подписан договор о сотрудничестве с Маастрихтской Школой Менеджмента (Нидерланды) и произведен первый набор по специализации «Общий и Стратегический Менеджмент».</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>1997</h4>
                                </div>
                                <img src="/history/1997.png" alt="" />
                                <p>Открыта программа МВА по специализации «Маркетинг и PR» и первая модульная программа МРА (Магистр Государственного Управления для Фонда общественного медицинского страхования (ФОМС).</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>1996</h4>
                                    </div>
                                    <img src="/history/1996.png" alt="" />
                                    <p>Первый набор на программу МВА со специализацией «Корпоративный менеджмент».</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>1995</h4>
                                </div>
                                <img src="/history/1995.png" alt="" />
                                <p>Алматинская Школа Менеджмента преобразована в Международную Академию Бизнеса. Первым президентом Международной Академии Бизнеса избран Кожахметов Асылбек Базарбаевич.</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>

                                    <div className={styles.yearleft}>
                                        <h4>1994</h4>
                                    </div>
                                    <img src="/history/1994.png" alt="" />
                                    <p>15 преподавателей АШМ выехали по международной программе ТАСIS на 9-месячное обучение в Европу, что положило основу для создания в следующем году казахстанской программы МВА.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                            <div className="offset-lg-6"></div>
                            <span className={styles.span}></span>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <span className={styles.span1}>
                                    <span className={styles.circle}></span>
                                </span>
                                <div className={styles.year}>
                                    <h4>1993</h4>
                                </div>
                                <img src="/history/1993.png" alt="" />
                                <p>Зарождение идеи создания программы МВА и начало разработки программы по реализации программ для управленческих кадров.</p>
                                <a href="">Подробнее &#8594;</a>
                            </div>
                            <div className={"col-lg-6"+" "+styles.col_lg_6}>
                                <div className={styles.asl}>
                                    <span className={styles.span2}>
                                        <span className={styles.circleleft}></span>
                                    </span>
                                    <div className={styles.yearleft}>
                                        <h4>1988</h4>
                                    </div>
                                    <img src="/history/1998.png" alt="" />
                                    <p>Создана Алматинская Школа Менеджмента (АШМ). Ежегодно в АШМ проходили обучение около 200-500 управленцев высшего и среднего звена.</p>
                                    <a href="">Подробнее &#8594;</a>
                                </div>
                            </div>
                            <div className="offset-lg-6"></div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}
