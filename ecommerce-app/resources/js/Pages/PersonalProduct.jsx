import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProductItem from '@/Components/ProductItem';
import ProductForm from '@/Components/ProductForm';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function PersonalProduct({ auth }) {
    // Handle listings of current products
    const f = {"productName": "peter", "productID" : "AD#$", "descriptions": "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:text-base to apply the text-base utility at only medium screen sizes and above"}
    
    // handle the creation of a new product
    const [creationStatus, setCreationStatus] = useState("None")
    const creationToggle = (status) =>{
        setCreationStatus(status)

        // handling form creation
        if (status === "created"){

            // setting the creation status back to none after manipulations:
            
        }

        // handling product edits 


        // handling product deletion

    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className='flex items-center justify-between'>
                <h2 className="order-first font-semibold text-xl text-gray-800 leading-tight">Congirure and List your products</h2>
                <button className={`order-last font-semibold text-xl text-gray-800 leading-tight py-2 px-4 bg-cyan-500 rounded-lg hover:text-white cursor-pointer ${creationStatus==="creating"? "disable": ""}`} 
                onClick={() => creationToggle("creating")}>Add Product</button>
            </div>}
        >
            <Head title="Persoanl Products"/>

            <div className="pt-2">
                <div className="flex-col my-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
                {creationStatus==="creating" && (
                    <ProductForm toggleForm={creationToggle} isCreated={false}/>
                )}
                {<ProductItem productData={f}/>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
