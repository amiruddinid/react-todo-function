import React from 'react';
import {useParams} from 'react-router-dom';
import './About.css';

export default function About() {
    let { a } = useParams();
    return (
        <div>
            About {a}
        </div>
    )
}
