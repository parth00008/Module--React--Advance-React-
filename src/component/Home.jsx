import React from 'react';
import './Login_Signup.css'


function Home() {
    return (
        <div className="home">
            <header className="header">
                <h1>Vegetable Shop</h1>
            </header>
            <section className="banner">
                <h2>Fresh Vegetables Every Day!</h2>
                <p>Discover our range of fresh and organic vegetables delivered straight to your door.</p>
            </section>
            <main className="main">
                <section className="product-list">
                    <article className="product">
                        <img src="https://media.istockphoto.com/id/104822169/photo/peas-and-pea-pods.jpg?s=2048x2048&w=is&k=20&c=SkZspK9tIgXKxUqGXAZcp6BZXGPIkmr_dTDkDD8GfQQ=" alt="Peas and pea pods" />
                        <h2>Peas</h2>
                        <p>$1.99 per lb</p>
                        <button>Add to Cart</button>
                    </article>
                    <article className="product">
                        <img src="https://media.istockphoto.com/id/518951178/photo/fresh-raw-green-broccoli-in-bowl.jpg?s=612x612&w=0&k=20&c=wP_y_qqs6_hFVsnkE4MCHLNOOdQ11sg5MBuOjg2AygA=" alt="Broccoli" />
                        <h2>Broccoli</h2>
                        <p>$2.99 per lb</p>
                        <button>Add to Cart</button>
                    </article>
                    <article className="product">
                        <img src="https://media.istockphoto.com/id/171589415/photo/tomatoes.jpg?s=2048x2048&w=is&k=20&c=ARlMI5Wl7FoxCDA2e2H1L-XhbocNjQmHsq6KwpNHg6k=" alt="Tomato" />
                        <h2>Tomato</h2>
                        <p>$3.49 per lb</p>
                        <button>Add to Cart</button>
                    </article>
                
                </section>
            </main>
        </div>
    );
}

export default Home;
