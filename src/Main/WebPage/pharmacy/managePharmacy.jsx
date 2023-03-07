import React, { useState } from 'react';


export const ManagePharmacy = () => {

    const headers = [
        { label: "Name", key: "name" },
        { label: "Description", key: "description" },
        { label: "Quantity", key: "quantity" },
        { label: "Brand", key: "brand" },
        { label: "Category", key: "category" },
        { label: "Tag", key: "tag" },
        { label: "Title", key: "title" },
        { label: "Price", key: "price" },
        { label: "Discount", key: "discount" },
    ];

    const data = [
        { name: "panadol", description: "lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eos.em", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag",price:"200pkr",discount:"20%", },
        { name: "panadol", description: "lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eos.em", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag",price:"200pkr",discount:"20%", },
        { name: "panadol", description: "lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eos.em", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag",price:"200pkr",discount:"20%", },
        { name: "panadol", description: "lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eos.em", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag",price:"200pkr",discount:"20%", },
        { name: "panadol", description: "lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eos.em", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag",price:"200pkr",discount:"20%", },
        { name: "panadol", description: "lorLorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eos.em", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag",price:"200pkr",discount:"20%", },

    ]

    return (
        <>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Brand</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Tag</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Discount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, keyid) => {
                                                return (
                                                    <tr key={keyid}>
                                                        <td>{item.name}</td>
                                                        <td>{item.description}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.brand}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.tag}</td>
                                                  
                                                        <td>{item.price}</td>
                                                        <td>{item.discount}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
