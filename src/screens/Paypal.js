//paypal button component
import React, {useEffect, useRef} from 'react'
import { payOrder } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Paypal(props) {
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const orderPay = useSelector((state) => state.orderPay);
    const {
        loading: loadingPay,
        error: errorPay, 
        success: successPay,
    } = orderPay;

    const dispatch = useDispatch();

    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking table",
                            amount: {
                                currency_code: "USD",
                                value: order.totalPrice
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const orderr = await actions.order.capture()
                console.log('orderr:', orderr)

                const paymentResult = {}
                paymentResult.email = orderr.payer.email_address
                paymentResult.id = orderr.id
                paymentResult.status = orderr.status
                paymentResult.update_time = orderr.update_time
                console.log('paymentResult:', paymentResult)
                dispatch(payOrder(order, paymentResult))
            },
            onError: (err) => {
                console.log(err)
            }
        })
        .render(paypal.current)
    }, [])

    return (
        <div>
            {
                !order.isPaid ? (
                    <div ref={paypal}></div>
                ) : (
                    <h3>order has been paid</h3>
                )
            }
        </div>
    )
}
