
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { items } from '../../ulits/MockData';
import { Link } from "react-router-dom";
import Flex_product from "./Flex_product";
import './Bestproduct.css';


                              

const Bestproduct=()=>{
  const filteredItems = items.filter((item) => item.id >= 15);

  const slideLeft = () => {
    let slider = document.getElementById("best-flex");
    slider.scrollLeft = slider.scrollLeft - 343;
  };

  const slideRight = () => {
    let slider = document.getElementById("best-flex");
    slider.scrollLeft = slider.scrollLeft + 343;
  };

  const Windowtop = () => {
    window.scrollTo(0, 0);
  };

    return(<section className='best_product'>
  <h2 className="best_product_title">SHOP OUR BESTSELLERS</h2>
  <div className='card_silder'>
    
   <div className="best_flex" id='best-flex' >
    {filteredItems.map((item)=>(
   <Link className="text-link"  key={item.id}  onClick={Windowtop} to={`/products/${item.id}`}>
    
    <Flex_product  key={item.id}     resName={item}/>
    
    </Link>
    ))}
   
   </div>

  <button className='right'  onClick={slideRight}><MdArrowForwardIos /></button>
<button className='left' onClick={slideLeft}><MdArrowBackIos /></button>

  </div>  
  <h2 className="viewall"><Link to="/shop" className="text-link"  onClick={Windowtop}>View all <span>&#8674; </span></Link> </h2>
    </section>);
};

export default Bestproduct;