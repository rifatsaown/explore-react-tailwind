import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => {
                const phoneLoaded = res.data.data;
                const phoneData = phoneLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price= parts[1]
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price,
                        image: phone.image,
                    }
                    return singlePhone;
                })
                setPhones(phoneData);
            })
    }, []);
    console.log(phones);
    return (
        <BarChart width={500} height={200} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <YAxis />
          <XAxis/>
          <Tooltip/>
        </BarChart>
    );
};

export default PhoneBar;