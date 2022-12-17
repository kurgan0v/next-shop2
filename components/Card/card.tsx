import styles from "./card.module.css";
import Image from "next/image";
import {Product} from "../../pages";
import {Dispatch, SetStateAction} from "react";
export default function Card({product, setOpenProduct}:{product:Product, setOpenProduct:Dispatch<SetStateAction<Product|undefined>>}) {
    return (
        <div className={styles.card} onClick={()=>{setOpenProduct(product)}}>
            <div className={styles.wrapImage}>
                <Image src={product.images[0]} alt={product.title} fill className={styles.Image}/>
            </div>
            <h2>{product.title}</h2>
            <div className={styles.cardInfo}>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.rating}>{product.rating}</p>
            </div>

        </div>
    );
}