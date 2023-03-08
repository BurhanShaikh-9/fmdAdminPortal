import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        { name: "panadol", title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag", price: "200pkr", discount: "20%", },
        { name: "panadol",  title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag", price: "200pkr", discount: "20%", },
        { name: "panadol",  title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag", price: "200pkr", discount: "20%", },
        { name: "panadol",  title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag", price: "200pkr", discount: "20%", },
        { name: "panadol",  title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag", price: "200pkr", discount: "20%", },
        { name: "panadol",  title: "Lorem ipsum dolor sit amet consectetur.", quantity: "20", brand: "124124", category: "category", tag: "tag", price: "200pkr", discount: "20%", },

    ]

    return (
        <>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                Manage Pharmacy
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                {/* <th scope="col">Description</th> */}
                                                <th scope="col">Title</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Brand</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Tag</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Discount</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, keyid) => {
                                                return (
                                                    <tr key={keyid}>
                                                        <td>{item.name}</td>
                                                        {/* <td>{item.description}</td> */}
                                                        <td>{item.title}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.brand}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.tag}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.discount}</td>
                                                        <td><Link href=""><i className="bi bi-pen"></i></Link> <Link href=""><i className="bi bi-trash3"></i></Link> </td>
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
