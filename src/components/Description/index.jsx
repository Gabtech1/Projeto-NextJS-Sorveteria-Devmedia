import styles from './Description.module.css';
import Image from 'next/image';
import Sorveteria from '../../../public/sorveteria.webp';
import Public from '../../../public/public.webp';

export default function Description(){
    return(
        <section className={styles.about}>
            <div className={styles.texts}>
                <h2>Sobre Nós</h2>
                <p>Nós simplesmente amamos sorvete!</p>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </div>
            <div className={styles.pics}>
                <Image src={Public} className={styles.img} alt='Pessoas tomando sorvete'/>
                <Image src={Sorveteria} className={styles.img} alt='Sorveteria'/>
            </div>

        </section>
    )
}