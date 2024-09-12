import styles from './Icecreams.module.css';
import Image from 'next/image';
import Oreo from '../../../public/oreo.avif';
import Pistache from '../../../public/pistache.avif';
import Avela from '../../../public/avela.avif';
import Kiwi from '../../../public/kiwi.avif';
import Morango from '../../../public/morango.avif';
import Limao from '../../../public/limao.avif';

export default function Icecreams() {
    return (
        <section className={styles.container}>
            <h2>Sabores de sorvete</h2>
            <div className={styles.galery}>
                <div className={styles.icecream}>
                    <Image className={styles.icepic} src={Oreo} alt='Sorvete de Oreo' />
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>

                <div className={styles.icecream}>
                    <Image className={styles.icepic} src={Pistache} alt='Sorvete de Pistache' />
                    <h3>Sorvete de Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>

                <div className={styles.icecream}>
                    <Image className={styles.icepic} src={Avela} alt='Sorvete de Cookies & Avelã' />
                    <h3>Sorvete de Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>

                <div className={styles.icecream}>
                    <Image className={styles.icepic} src={Kiwi} alt='Sorvete de Kiwi' />
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>

                <div className={styles.icecream}>
                    <Image className={styles.icepic} src={Morango} alt='Sorvete de Morango' />
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>

                <div className={styles.icecream}>
                    <Image className={styles.icepic} src={Limao} alt='Sorvete de Limão Siciliano' />
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
            </div>
        </section>
    )
}