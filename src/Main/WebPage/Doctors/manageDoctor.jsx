import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const ManageDoctor = () => {

    const headers = [
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "PMDA ID", key: "pmda_id" },
        { label: "CNIC", key: "cnic" },
        { label: "Availability", key: "availability" },
        { label: "Sspeciality", key: "speciality" },

    ];

    const data = [
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
        { name: "Tobi", email: "tobi@email.com", phone: "03123575312", pmda_id: "124124", cnic: "41302443428282", availability: "Day", speciality: "Surgeon", },
    ]

    return (
        <>
            <section className='mainSection'>
                <div className="container">
                    <div className="mainSectionWrapper">
                        <div className="heading">
                            <p>
                                Manage Doctor
                            </p>
                        </div>
                        <div className="card cardForm">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">PMDA ID</th>
                                                <th scope="col">CNIC</th>
                                                <th scope="col">Availability</th>
                                                <th scope="col">Speciality</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, keyid) => {
                                                return (
                                                    <tr key={keyid}>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.pmda_id}</td>
                                                        <td>{item.cnic}</td>
                                                        <td>{item.availability}</td>
                                                        <td>{item.speciality}</td>
                                                        <td><Link href=""><i class="bi bi-pen"></i></Link> <Link href=""><i class="bi bi-trash3"></i></Link> </td>
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
