import styles from './Info.module.css';
import Image from 'next/image';
import Sabores from '../../../public/sabores.webp';
import Eventos from '../../../public/eventos.webp';
import Sobre from '../../../public/about.webp';

export default function Info() {
    return (
        <main className={styles.grid}>
            <div className={styles.item}>
                <Image className={styles.img} src={Sabores} alt='Sabores de sorvete' />
            </div>
            <div className={styles.itemText}>
                <h2>Nossos produtos</h2>
                <h3>Novos e deliciosos!</h3>
                <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
            <div className={styles.itemText}>
                <h2>NOSSOS EVENTOS</h2>
                <h3>Delicias com sorvete!</h3>
                <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
            </div>
            <div className={`${styles.item} ${styles.events}`}>
                <Image className={styles.img}  src={Eventos} alt='Eventos na sorveteria' />
            </div>
            <div className={styles.item}>
                <Image className={styles.img}  src={Sobre} alt='Atendimento da sorveteria'/>
            </div>
            <div className={styles.itemText}>
                <h2>SOBRE NÓS</h2>
                <h3>Alegria em cada casquinha!</h3>
                <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
            </div>
        </main>
    );
}