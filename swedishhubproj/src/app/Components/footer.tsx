import React from 'react';

export default function Footer() {
    return(
        <div>
            <div className="bg-blue-500 text-white p-4">
                <nav className="container mx-auto">
                    <ul className="flex justify-between items-center">
                        <li>
                            <a href="https://nextjs.org" className="text-white-500 hover:underline">
                                This Page was made with React + Next.js + Tailwind CSS with Typescript, with love, Swedish Hub
                            </a>
                        </li>
                        <li>Social Media</li>
                    </ul>
                </nav>
            </div>
        </div>
    );

}
