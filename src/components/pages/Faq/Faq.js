import React from 'react';
import './Faq.css';

function Faq() {
    return (
        <div>
            <section className="faqsection1">
                <h1>FAQ</h1>
                <div>
                    <img src="faqimage.png" alt="faqimage"/>
                </div>
            </section>

            <section className="faqsection2">
                <div className="section-m2">
                    <ul>
                        <li><p><a href="/">How many people can attend a course?</a></p></li>
                        <li><p><a href="/">What s the learning experience like?</a></p></li>
                        <li><p><a href="/">Who are the coaches?</a></p></li>
                        <li><p><a href="/">How far in advance should we book?</a></p></li>
                        <li><p><a href="/">Can you customize your courses?</a></p></li>
                        <li><p><a href="/">How many people can attend a course?</a></p></li>
                        <li><p><a href="/">What s the learning experience like?</a></p></li>
                        <li><p><a href="/">Who are the coaches?</a></p></li>
                        <li><p><a href="/">How far in advance should we book?</a></p></li>
                        <li><p><a href="/">Can you customize your courses?</a></p></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Faq;
