import React from 'react';
import styles from './css/Home.module.css';
import foto1 from '../img/pexels-deeana-creates-2565222.jpg'
import foto2 from '../img/pexels-cottonbro-4254279.jpg'
const Home = () => {
    return (
        <section className={styles.corpo}>
            <div className={styles.banner}></div>
            <section className={styles.content}>
                <section className={styles.content_corpo}>
                    <section className={styles.text}>
                        <h1>Welcome</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolor nobis assumenda ad laboriosam ex facere consequuntur,
                            quo, cupiditate architecto molestiae
                            laudantium id ea eos perferendis illum aliquid magnam incidunt dolore.
                        </p>
                    </section>
                    <img src={foto1} alt="foto-restaurante"/>
                </section>
                <section className={styles.content_corpo}>
                    <img src={foto2} alt="foto-restaurante"/>
                    <section className={styles.text}>
                        <h1>Welcome</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolor nobis assumenda ad laboriosam ex facere consequuntur,
                            quo, cupiditate architecto molestiae
                            laudantium id ea eos perferendis illum aliquid magnam incidunt dolore.
                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Home
