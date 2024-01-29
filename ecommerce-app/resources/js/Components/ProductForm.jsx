import { Fragment, useState } from "react"
export default function ProductForm({ toggleForm, isCreated }) {

    // handling the input changes to the form
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        color: '',
        size: '',
        price: '',
        descriptions: '',
    });
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handling the update of product detailes

    // handling the delete of products

    // handling creation fo the products
    const handleCreation = async() => {
        // Calling REST API to create product in the database
        try{
            const response = await fetch('/create_product', {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            if (response.ok){
                const createdProduct = await response.json();
                console.log("product Craeted:", createdProduct)
                toggleForm("created")
            }
            else{
                console.error('product creation failed', response)
            }
        }
        catch (error){
            console.error('Error During production', error)
        }

        // Retrieve the created 

    }

    return (
        <div className="flex-col p-4 bg-white overflow-auto drop-shadow-lg sm:rounded-lg h-fit mb-6">
            <div className="flex items-center justify-between p-2">
                <input type="text" name="name" placeholder="Name of your Product" className={`mx-4 text-lg text-gray-900`} onChange={handleInputChange}/>
                {isCreated ? (
                    <Fragment>
                        <button className='font-semibold text-lg text-gray-800 leading-tight py-2 px-4 bg-grey-500 rounded-lg  hover:text-white cursor-pointer' onClick={() => toggleForm("saved")}>Save Changes</button>
                        <button className='order-last font-semibold text-lg text-gray-800 leading-tight py-2 px-4 bg-red-500 rounded-lg hover:text-white cursor-pointer' onClick={() => toggleForm("deleted")}>Delete Product</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <button className='order-last font-semibold text-lg text-gray-800 leading-tight py-2 px-4 bg-lime-600 rounded-lg hover:text-white cursor-pointer' onClick={() => handleCreation()}>Create Product</button>
                    </Fragment>
                )}
            </div>

            <div className="flex-col items-center mx-8">
                <div className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                    <span>Product code</span>
                    <input type="text" name='code' placeholder="Code of your Product" className={`mx-4 text-base text-gray-900 placeholder-opacity-75 focus:placeholder-opacity-0`} onChange={handleInputChange} />
                </div>
                <div className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                    <p>
                        <span>Color</span>
                        <span className="text-red-400">*</span>
                    </p>
                    <input type="text" name="color" placeholder="Color of your Product" className={`mx-4 text-base text-gray-900 placeholder-opacity-75 focus:placeholder-opacity-0`} onChange={handleInputChange}/>
                </div>
                <div className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                    <p>
                        <span>Size</span>
                        <span className="text-red-400">*</span>
                    </p>
                    <input type="text" name="size" placeholder="Size of your Product" className={`mx-4 text-base text-gray-900 placeholder-opacity-75 focus:placeholder-opacity-0`} onChange={handleInputChange}/>
                </div>
                <div className="flex items-center justify-between my-4 p-4 border-b-[1px] border-gray-400">
                    <p>
                        <span>Price</span>
                        <span className="text-red-400">*</span>
                    </p>
                    <input type="text" name="price" placeholder="Price of your Product" className={`mx-4 text-base text-gray-900 placeholder-opacity-75 focus:placeholder-opacity-0`} onChange={handleInputChange}/>
                </div>
                <div className="flex items-center justify-between p-4 border-b-[1px] border-gray-400">
                    <span>Descriptions</span>
                    <textarea placeholder="Detailed Descriptions" name="descriptions"
                        className={`mx-4 text-base text-gray-900 whitespace-normal placeholder-opacity-75 border-none focus:placeholder-opacity-0 focus:w-[70%]`} onChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}