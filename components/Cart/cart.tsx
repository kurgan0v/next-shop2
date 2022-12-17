import styles from "./cart.module.css";
import {CloseOutlined, DeleteOutlined} from "@ant-design/icons";
import {Button, InputNumber} from "antd";
import {Dispatch, SetStateAction} from "react";
import Link from "next/link";
import {deleteItem, setNewQuantity} from "../../store/slices/cartSlice";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../store";

export const Cart = ({
                         setOpenCart
                     }: { setOpenCart: Dispatch<SetStateAction<boolean>>}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state:RootState) => state.cart.items);
    return (
        <div className={styles.wrapCartModal}>
            <div className={styles.modalCart}>
                <div className={styles.wrapCart}>
                    <h2>Корзина</h2>
                    <div className={styles.cartElement}>
                        <p className={styles.titleCartItem}>Наименование</p>
                        <p className={styles.priceCartItemHeader}>Стоимость</p>
                        <p className={styles.quantity}>Количество</p>
                        <p className={styles.priceCartItemHeader}>Итог</p>
                    </div>
                    {cart.length && cart.map((cartItem) => {
                        return <div key={cartItem.id} className={styles.cartElement}>
                            <p className={styles.titleCartItem}>{cartItem.title}</p>
                            <p className={styles.priceCartItem}>{cartItem.price}</p>
                            <div className={styles.quantity}><InputNumber min={1} value={cartItem.quantity}
                                                                          onChange={(value) => {
                                                                              dispatch(setNewQuantity({itemId: cartItem.id, newQuantity: value?+value:0}));
                                                                          }}/></div>
                            <p className={styles.priceCartItem}>{cartItem.quantity * cartItem.price}</p>
                            <Button type="primary" onClick={() => {
                                dispatch(deleteItem(cartItem.id));
                            }} icon={<DeleteOutlined/>}/>
                        </div>;
                    })}
                    <h2>{cart.length ? "Итог: " + cart.reduce((s, i) => s = s + i.price * i.quantity, 0) + "$" : "В вашей корзине пока ничего нет"}</h2>
                    <Button size={'large'} type="primary"><Link href={"success"}>Оформить заказ</Link></Button>
                </div>

                <Button type="primary" className={styles.close} onClick={() => {
                    setOpenCart(false)
                }} icon={<CloseOutlined/>} size={'large'}/>

            </div>
        </div>
    );
}