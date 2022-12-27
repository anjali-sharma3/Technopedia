import React from 'react';


const DL=()=>{
   return(
    <div className="dl-section">
        <h2>What is Deep Learning?</h2>
        <img src="/images/deep-learning-banner.jpg" alt="deep learning" className='dl-banner' />
        <section>
            <p>Deep learning is a subset of machine learning, which is essentially a neural network with three or more layers. These neural networks attempt to simulate the behavior of the human brain—albeit far from matching its ability—allowing it to “learn” from large amounts of data. While a neural network with a single layer can still make approximate predictions, additional hidden layers can help to optimize and refine for accuracy. </p>
        </section>
    </div>
   );
}
export default DL;