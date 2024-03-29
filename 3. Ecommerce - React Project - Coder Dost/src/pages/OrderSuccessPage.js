import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetOrder } from "../features/orders/ordersSlice";

function OrderSuccessPage() {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetOrder())
    }, [])
    return (
        <div className="px-24 py-8 sm:py-24 lg:px-24 sm:px-6 ">
            {!params.id && <Navigate to='/' replace={true}></Navigate>
            }
            <main
                className=" min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 sm:px-6 "
            >
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Number #{params.id}</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">You can check your orders at Accounts &gt; Orders</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to='/'
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </div>


    );
}

export default OrderSuccessPage;