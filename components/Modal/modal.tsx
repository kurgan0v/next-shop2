import styles from "./modal.module.css";
import {Product} from "../../pages";
import {Dispatch, SetStateAction} from "react";
import {CloseOutlined} from '@ant-design/icons';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import Image from "next/image";
import {Button} from "antd";

export const Modal = ({
                          product,
                          setOpenProduct,
                          addCartItem
                      }: { product: Product, setOpenProduct: Dispatch<SetStateAction<Product | undefined>>, addCartItem:(newItem: Product) => void }) => {
    return (
        <div className={styles.wrapProductModal}>
            <div className={styles.modalProduct}>
                <div className={styles.gallery}>
                    {product.images && <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {product.images.map((image) => {
                            return <SwiperSlide key={image}>
                                <div className={styles.wrapImage}>
                                    <Image src={image} alt={product.title} fill className={styles.Image}/>
                                </div>
                            </SwiperSlide>;
                        })}
                    </Swiper>}
                </div>

                <div className={styles.cardInfo}>
                    <h2>{product.title}</h2>
                    <p className={styles.rating}>{product.rating}</p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>{product.price}</p>
                    <Button type="primary" size={'large'} onClick={() => {
                        addCartItem(product)
                    }}>Добавить в корзину</Button>
                </div>
                <Button type="primary" className={styles.close} onClick={() => {
                    setOpenProduct(undefined)
                }} icon={<CloseOutlined/>} size={'large'}/>

            </div>
        </div>
    )
}