import React, {Component} from 'react';
import api from '../../services/apiResources';
import { Link } from 'react-router-dom';

import './styles.css';


export default class Main extends Component{
    state = {
        products: [],
        productInfo: {},
        page:1
    }
    componentDidMount(){
      this.loadProducts();
    }
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const {docs, ...productInfo} = response.data;
        //console.log(response.data.docs)
            
        this.setState({ products:docs, productInfo, page});   
};

    prevPage = () => {
        const{page, productInfo} = this.state;
        if(page === 1 ) return;
        const pageNumber = page -1;
        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const{page, productInfo} = this.state;
        if(page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };

    render() {
        const { products } = this.state;  

        return (
                <div className="container">
                    <div className="content-main">
                        <div className="row">
                            <div className="column">
                                <h2>Thank you for visiting!</h2>
                                <p> Here is a list of 20 great books related to UX that helped me a lot. I am sure that I've missed many titles. Would appreciate to contact me if you want to discuss on the list below.</p>                                        
                            </div>
                            <div className="column">
                                <h2>Notes for absolute beginners:</h2>
                                <p> If you really want to learn UX design, books and tutorials are simply not enough. They help a lot, sure, and it's very hard to understand the UX design art and science without them.</p>                            
                            </div>                        
                        </div>
                    </div>
                    <div className="column-center">
                        <div>
                            <span>But you need to start doing projects.</span>
                            <p> For real clients, not for yourself. Find friends or relatives. Better do it for a small amount of money, not for free (so that they involve). </p>
                        </div>                        
                    </div>
                   
                    <div className="product-list">
                        {this.state.products.map(product => (
                            <div className="flex-container">
                                <article key={product._id}>
                                    <strong>{product.title}</strong>
                                    <p>{product.description}</p>

                                    <Link to={`/products/${product._id}`}>Acess</Link>
                                </article>
                            </div>
                        ))}
                        <div className="actions">
                            <button onClick={this.prevPage}>Anterior</button>
                            <button onClick={this.nextPage}>Proxima</button>
                        </div>
                    </div>
                
            </div>
        );
    }
}