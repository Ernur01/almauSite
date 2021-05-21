import Link from 'next/link'
import styles from '../styles/main.module.scss'

export default function MainCard(){
    return(
        <>
        <div className={"row row-cols-1 row-cols-lg-2 g-4"}>
                            <div className={"col"}>
                                <div className={"row row-cols-1 row-cols-md-2 g-4"}>
                                    <div className={"col-md-12"+" "+styles.fb_top_content_none}>
                                        <div className={styles.sb_long_card}>
                                            <img src={"/mainPage/sb_girl_img.png"} className={styles.sb_card_long_img} />
                                            <div className={styles.sb_long_card_right}>
                                                <div className={styles.sb_card_light_text}>
                                                    <p className={styles.card_dnews}>Новость</p>
                                                    <p>20 июля 2020</p>
                                                </div>
                                                <div className={styles.sb_card_title}>
                                                    <span>
                                                        <h4>Eleanor</h4>
                                                        <span className={styles.card_line}></span>
                                                    </span>
                                                    <h4>⠀Pena</h4>
                                                </div>
                                                <p className={styles.long_card_text}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-lg-6"}>
                                        <div className={"card"+" "+styles.sb_short_card}>
                                            <img src="/mainPage/sb_boy_img.png" />
                                                <div className={styles.sb_card_short_light_text}>
                                                    <p className={styles.card_dnews}>Новость</p>
                                                    <p>20 июля 2020</p>
                                                </div>
                                            <div className={"card-body"+" "+styles.short_card_text}>
                                                <p>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Aliqua dolor do amet sint
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-lg-6"}>
                                        <div className={"card"+" "+styles.sb_short_card}>
                                            <img src="/mainPage/sb_boy_img.png" />
                                                <div className={styles.sb_card_short_light_text}>
                                                    <p className={styles.card_dnews}>Новость</p>
                                                    <p>20 июля 2020</p>
                                                </div>
                                            <div className={"card-body"+" "+styles.short_card_text}>
                                                <p>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Aliqua dolor do amet sint
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col"+" "+styles.fb_right_content_none}>
                                <div className={"row row-cols-2 g-4"}>
                                    <div className={"col-lg-6"}>
                                        <div className={"card"+" "+styles.sb_short_card}>
                                            <img src="/mainPage/sb_boy_img.png" />
                                                <div className={styles.sb_card_short_light_text}>
                                                    <p className={styles.card_dnews}>Новость</p>
                                                    <p>20 июля 2020</p>
                                                </div>
                                            <div className={"card-body"+" "+styles.short_card_text}>
                                                <p>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Aliqua dolor do amet sint
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-lg-6"}>
                                        <div className={"card"+" "+styles.sb_short_card}>
                                            <img src="/mainPage/sb_boy_img.png" />
                                                <div className={styles.sb_card_short_light_text}>
                                                    <p className={styles.card_dnews}>Новость</p>
                                                    <p>20 июля 2020</p>
                                                </div>
                                            <div className={"card-body"+" "+styles.short_card_text}>
                                                <p>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Aliqua dolor do amet sint
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-md-12"}>
                                        <div className={styles.sb_long_card}>
                                            <img src={"/mainPage/sb_girl_img.png"} className={styles.sb_card_long_img} />
                                            <div className={styles.sb_long_card_right}>
                                                <div className={styles.sb_card_light_text}>
                                                    <p className={styles.card_dnews}>Новость</p>
                                                    <p>20 июля 2020</p>
                                                </div>
                                                <div className={styles.sb_card_title}>
                                                    <span>
                                                        <h4>Eleanor</h4>
                                                        <span className={styles.card_line}></span>
                                                    </span>
                                                    <h4>⠀Pena</h4>
                                                </div>
                                                <p className={styles.long_card_text}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}