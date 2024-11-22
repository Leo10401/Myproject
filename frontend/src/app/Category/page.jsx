import axios from 'axios';
// import React, { useState } from 'react'

const Browse = () => {

    return (
        <div className="bg-background bg-white text-primary-foreground min-h-screen flex flex-col items-center justify-center">
            <header className="w-full bg-primary py-6 shadow-lg">
                <h1 className="text-4xl font-bold text-center text-accent">Find Your Perfect Companion</h1>
            </header>
            <main className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="bg-card p-6 rounded-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-lg">
    <div className="relative overflow-hidden group">
        <img src="https://clipart-library.com/new_gallery/32-320561_puppy-training-classes-transparent-background-dogs-png.png" alt="Adorable Dog" className="rounded-lg mb-4 transition-opacity duration-300 group-hover:opacity-0 drop-shadow(0 0px 12px red)" />
        <img src="https://imgs.search.brave.com/iHZqxRE5E8aP2E_rQKYKwMajXhjlOVRsmkFt7f3xzUw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlc19r/L2RvZ3MtdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC9kb2dzLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtNy5q/cGc" alt="Adorable Dog" className="absolute top-0 left-0 w-full h-full object-contain transform scale-105 opacity-0 group-hover:opacity-100 transition-all filter:drop-shadow(0 0px 12px red) duration-300 bg-transparent" />
    </div>                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-accent drop-shadow(0 0px 12px red)">Meet Our Dogs</h2>
                    <p className="text-secondary">Browse through our selection of lovable dogs waiting for a forever home.</p>
                    <a href="#" className="bg-accent text-accent-foreground mt-4 py-2 px-4 rounded-lg inline-block hover:bg-accent/80 transition-colors duration-300">View Dogs</a>
                </div>
                <div className="bg-card p-6 rounded-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-lg">
                    <div className="relative overflow-hidden group">
                        <img src="https://placehold.co/400x300" alt="Cute Cat" className="rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105" />
                        <img src="https://placehold.co/400x300" alt="Cute Cat" className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-accent">Meet Our Cats</h2>
                    <p className="text-secondary">Explore our charming cats looking for a loving family to join.</p>
                    <a href="#" className="bg-accent text-accent-foreground mt-4 py-2 px-4 rounded-lg inline-block hover:bg-accent/80 transition-colors duration-300">View Cats</a>
                </div>
                <div className="bg-card p-6 rounded-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-lg">
                    <div className="relative overflow-hidden group">
                        <img src="https://placehold.co/400x300" alt="Cute Cat" className="rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105" />
                        <img src="https://placehold.co/400x300" alt="Cute Cat" className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-accent">Meet Our Birds</h2>
                    <p className="text-secondary">Explore our charming cats looking for a loving family to join.</p>
                    <a href="#" className="bg-accent text-accent-foreground mt-4 py-2 px-4 rounded-lg inline-block hover:bg-accent/80 transition-colors duration-300">View Cats</a>
                </div>
                <div className="bg-card p-6 rounded-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-lg">
                    <div className="relative overflow-hidden group">
                        <img src="https://placehold.co/400x300" alt="Cute Cat" className="rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105" />
                        <img src="https://placehold.co/400x300" alt="Cute Cat" className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-accent">Meet Our Rabbit</h2>
                    <p className="text-secondary">Explore our charming cats looking for a loving family to join.</p>
                    <a href="#" className="bg-accent text-accent-foreground mt-4 py-2 px-4 rounded-lg inline-block hover:bg-accent/80 transition-colors duration-300">View Cats</a>
                </div>
            </main>
            <footer className="w-full bg-primary py-4 text-center shadow-lg">
                <p className="text-primary-foreground">© 2023 Pet Adoption Platform. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Browse