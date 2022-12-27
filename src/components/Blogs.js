import React from 'react';
import Webdevelopment from './Webdevelopment';
import AppDev from './Appdevelopment';
import Blockchain from './Blockchain';
import Machine from './Machinelearning';
import AI from './Artificial-intelligence';
import DL from './Deep-learning';
import { Link } from 'react-router-dom';
const Blogs=()=>{
    return(
    <div className="blogs-container">
        <div className="web-dev-section">
        <h2>What is Web development?</h2>
        <img src="images/web-development-banner.jpg" alt="web development" className='web-banner'/>
       
            <p>To understand web development first of all lets understand the meaning of web development separately:-
             <ul >
                <li><strong>Web:-</strong>It refers to websites, web pages or anything that works over the internet.</li>
                <li><strong>Development:-</strong>It refers to building the application from scratch.</li>
             </ul>
            </p>
            <br />
            <p>Hence,<strong>Web development </strong>refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites. <Link className='readmore' to={"/webdevelopment"}>continue reading</Link></p>
            </div> 
            <div className="app-dev-section">
            <h2>What is App Development?</h2>
            <img src="/images/app-dev-banner.png" alt="app development" className='app-banner' />
            <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices. <Link to={"/appdevelopment"} className="readmore">Continue reading</Link></p>
        </div> 
        <div className="ai-section">
     <h2>What is Artificial Intelligence?</h2>
     <img src="/images/ai-banner.jpg" alt="artificial intelligence" className='ai-banner'/>
      <section>
      <p>Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken and written language, analyze data, make recommendations, and more. <Link to={"/ai"} className="readmore">Continue reading</Link></p>
      </section>
    </div>
    <div className="blockchain-section">
            <h2>What is Blockchain Technology?</h2>
            <img src="/images/BlockChain_banner.jpg" alt="blockchain" className='blockchain-banner' />
            <section>
                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved. <Link to={"/blockchain"} className="readmore">Continue reading</Link></p>
            </section>
        </div>
        <div className="dl-section">
        <h2>What is Deep Learning?</h2>
        <img src="/images/deep-learning-banner.jpg" alt="deep learning" className='dl-banner' />
        <section>
            <p>Deep learning is a subset of machine learning, which is essentially a neural network with three or more layers. These neural networks attempt to simulate the behavior of the human brain—albeit far from matching its ability—allowing it to “learn” from large amounts of data. While a neural network with a single layer can still make approximate predictions, additional hidden layers can help to optimize and refine for accuracy. <Link to={"/deep-learning"} className="readmore">Continue reading</Link></p>
        </section>
    </div>
    <div className="machine-learning-section">
        <h2>What is Machine Learning?</h2>
        <img src="/images/machine-banner.jpg" alt="Machine learning" className='machine-banner'/>
        <section>
            <p>Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect. <Link to={"/machine-learning"} className="readmore">Continue reading</Link></p>
        </section>
     </div>   
    </div>
    );
}
export default Blogs;