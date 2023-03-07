import React, { useState } from 'react';


export const ManageLab = () => {

    const headers = [
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Registration ID", key: "registration_id" },
        { label: "Address", key: "address" },
        { label: "Representative Name", key: "re_name" },
        { label: "Representative Number", key: "re_number" },

    ];

    const data = [
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", registration_id: "124124", address: "karachi, safoora", re_name: "ashfaq", re_number: "124124", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", registration_id: "124124", address: "karachi, safoora", re_name: "ashfaq", re_number: "124124", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", registration_id: "124124", address: "karachi, safoora", re_name: "ashfaq", re_number: "124124", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", registration_id: "124124", address: "karachi, safoora", re_name: "ashfaq", re_number: "124124", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", registration_id: "124124", address: "karachi, safoora", re_name: "ashfaq", re_number: "124124", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", registration_id: "124124", address: "karachi, safoora", re_name: "ashfaq", re_number: "124124", },

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
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Registered ID</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Representative Name</th>
                                                <th scope="col">Representative Number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, keyid) => {
                                                return (
                                                    <tr key={keyid}>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.registration_id}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.re_name}</td>
                                                        <td>{item.re_number}</td>
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
