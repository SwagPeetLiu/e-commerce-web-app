import { Fragment, useState } from "react"

//component used to display the listed and opened items
export default function ProductItem({ productData }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleItemToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex-col p-4 bg-white overflow-auto drop-shadow-lg sm:rounded-lg h-fit ">
            <div className="flex items-center justify-between p-2" onClick={handleItemToggle}>
                <p className={`mx-4 text-lg text-gray-900 ${isOpen && ("font-semibold")}`}>{productData['productName']}</p>
                {isOpen ? (
                    <Fragment>
                        <button className='order-last font-semibold text-lg text-gray-800 leading-tight py-2 px-4 bg-grey-500 rounded-lg underline hover:text-cyan-700 cursor-pointer'>Edit / Delete Product</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <svg className="w-8 mx-6" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow"><path fill="#c0c4cc" d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7" transform="translate(237 335)"></path></svg>
                    </Fragment>
                )}
            </div>

            {isOpen && (
                <div className="flex-col items-center  mx-8">
                    <p className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                        <span>Product ID</span>
                        <span>{productData["productID"]}</span>
                    </p>
                    <p className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                        <span>code</span>
                        <span>{productData["productID"]}</span>
                    </p>
                    <p className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                        <span>price</span>
                        <span>{productData["productID"]}</span>
                    </p>
                    <p className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                        <span>color</span>
                        <span>{productData["productID"]}</span>
                    </p>
                    <p className="flex items-center justify-between my-4 p-4">
                        <span>descriptions</span>
                        <span className="max-w-56">{productData["descriptions"]}</span>
                    </p>
                </div>
            )}
        </div>

    )
}