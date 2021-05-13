import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/career.module.scss'


export default function Bacehelor(){
    return(
        <MainLayout title="Бакалавриат">
            <main>
            <section class="info">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <div class="bach_almau">
                                <h3>Бакалавриат в AlmaU</h3>
                                <p>Bachelor's degree — первая ступень высшего образования рассчитанная на выпускников школ и колледжей желающих получить высшее образование по выбранной специальности.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <div class="bach_info">
                                <h3>Выбирая Университет, Вы выбираете профессию, карьеру, <span class="future">свое будущее!</span></h3>
                                <button class="quest_but">Задать вопрос</button>
                                <button class="online_but">Онлайн консультация</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="why_almau">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>ПОЧЕМУ СТОИТ ПОСТУПАТЬ В ALMAU?</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="why_img">
                                <img src="img/info.png" alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="why_desc_up">
                                <p>Учебные аудитории и лекционные залы</p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="why_img">
                                <img src="img/info1.png" alt="" />
                            </div>
                            <div class="why_desc">
                                <p>Доступ к электронной библиотеке ведущих научных</p>
                            </div>

                        </div>
                        <div class="col-lg-3">
                            <div class="why_img">
                                <img src="img/info2.png" alt="" />
                            </div>
                            <div class="why_desc">
                                <p>Creative Zone AlmaU </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 abs">
                            <div class="why_img">
                                <img src="img/info3.png" alt="" />
                            </div>
                            <div class="why_desc">
                                <p>Sport & Art Zone</p>
                            </div>
                        </div>
                        <div class="col-lg-3 abs">
                            <div class="why_img">
                                <img src="img/info4.png" alt="" />
                            </div>
                            <div class="why_desc">
                                <p>Инновационные лаборатории</p>
                            </div>
                        </div>
                        <div class="col-lg-3 abs1">
                            <div class="why_img">
                                <img src="img/info5.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-3 abs1">
                            <div class="why_desc_up">
                                <p>Компьютерные и научные залы со свободным доступом в Интернет</p>
                            </div>
                        </div>
                        <div class="dots">
                            <img src="img/dots.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="about_almaU">
                <div class="container">
                    <div class="row">
                        <div class="offset-lg-1"></div>
                        <div class="col-lg-10">
                            <p class="conditions">Преимущества</p>
                            <a class="add_but" href="#"><img src="img/add.png" alt="" /></a>
                        </div>
                        <div class="offset-lg-1"></div>
                        <div class="offset-lg-1"></div>
                        <div class="col-lg-10">
                            <p class="conditions">Трудоустройства</p>
                            <a class="add_but" href="#"><img src="img/add.png" alt="" /></a>
                        </div>
                        <div class="offset-lg-1"></div>
                        <div class="offset-lg-1"></div>
                        <div class="col-lg-10">
                            <p class="conditions">Уловия поступления</p>
                            <a class="add_but" href="#"><img src="img/add.png" alt="" /></a>
                        </div>
                        <div class="offset-lg-1"></div>
                    </div>
                    <div class="row grant">
                        <div class="col-lg-4">
                            <div class="about_grant">
                                <h4>ГРАНТЫ</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="about_grant">
                                <h4>СКИДКИ</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="about_grant">
                                <h4 style="margin-bottom: 22px;">ПРОГРАММЫ ДВОЙНОГО ДИПЛОМА
                                </h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="offset-lg-1"></div>
                    </div>
                </div>
            </section>
            <section class="schools">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 schools_info">
                            <h4>В AlmaU созданы Школы (факультеты) по направлениям обучения, что позволяет более качественно и фокусно готовить специалистов по разным направлениям.</h4>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Школа менеджемента</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Школа экономики и финансов</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4 style="padding-bottom: 11px;">Школа предпринимательства и инноваций</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Школа инженерного менеджмента</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Школа политики и права</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Центр урбанистики</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Школа гостеприимства и туризма</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="square"></div>
                            <div class="school_more">
                                <h4>Высшая Школа Бизнеса</h4>
                                <button>Узнать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="typeOfStudy">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="formOfStudy">
                                <h4>ФОРМА ОБУЧЕНИЯ</h4>
                                <p>Обучение проходит на одном из 3-х языков: казахском, русском или английском.</p>
                            </div>

                        </div>
                        <div class="offset-lg-1"></div>
                        <div class="col-lg-10 listOfStudy">
                            <h4>ОЧНАЯ</h4>
                            <p>(после школы и колледжа)</p>
                            <a class="addRed_but" href="#"><img src="img/addRed.png" alt="" /></a>
                        </div>
                        <div class="offset-lg-1"></div>
                        <div class="offset-lg-1"></div>
                        <div class="col-lg-10 listOfStudy">
                            <h4>ДИСТАНЦИОННАЯ</h4>
                            <p> (после колледжа, <br> при поступлении на родственную специальность)</p>
                            <a class="addRed_but" href="#"><img src="img/addRed.png" alt="" /></a>
                        </div>
                        <div class="offset-lg-1"></div>
                        <div class="offset-lg-1"></div>
                        <div class="col-lg-10 listOfStudy">
                            <h4>ОНЛАЙН ОБУЧЕНИЕ</h4>
                            <p></p>
                            <a class="addRed_but" href="#"><img src="img/addRed.png" alt="" /></a>
                        </div>
                        <div class="offset-lg-1"></div>
                    </div>
                </div>
                </div>
            </section>
            <section class="international">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 key_almaU">
                            <h4>МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО</h4>
                            <p>Ключевыми направлениями международной деятельности AlmaU являются:</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <p>&#10004; Сотрудничество с зарубежными университетами; Встреча международных гостей в AlmaU;</p>
                            <p>&#10004; Сотрудничество с международными организациями;</p>
                            <p>&#10004; Участие в международных рейтингах;</p>
                            <p>&#10004; Прохождение международных аккредитаций;</p>
                            <p>&#10004; Обучение и стажировки за рубежом для преподавателей и студентов;</p>
                            <p>&#10004; Организация международных мероприятий в AlmaU;</p>
                            <p>&#10004; Участие в международных проектах;</p>
                            <p>&#10004; Развитие международной научно-исследовательской деятельности;</p>
                            <p>&#10004; Участие в международных мероприятиях и ярмарках;</p>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <img src="img/map.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <h4>СТУДЕНЧЕСКАЯ ЖИЗНЬ AlmaU</h4>
                        </div>
                    </div>
                </div>
            </section>
            </p>
            <section class="studLife">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <img src="img/stud.png" alt="" />
                        </div>
                        <div class="col-lg-3">
                            <img src="img/stud1.png" alt="" />
                        </div>
                        <div class="col-lg-3">
                            <img src="img/stud2.png" alt="" />
                        </div>
                        <div class="col-lg-3">
                            <img src="img/stud3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact">
            </main>
        </MainLayout>
    )
}