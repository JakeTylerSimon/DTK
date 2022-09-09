import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Layout from '../components/layout'
import Seo from '../components/seo';
import queryString from 'query-string';

export default function RootIndex() {

    const [visible, setVisible] = useState(9);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 3);
    }

    const [filteredList,setFilteredList]=useState([]);
    const [filter,setFilter]=useState("latest");

    useEffect(()=>{
      setFilteredList(products);
    },[]);

    useEffect(() => { 
      const queryP=queryString.parse(window.location.search);
      console.log("useSearchParams::",queryP.filter);
      if(queryP.filter!==undefined){
        setFilter(queryP.filter);
      }
    }, [])
  
    const filterDataList=(filter)=>{
      if(filter==="all-parts"){
        setFilteredList(products);
      }else{
        console.log(filter);
        let newList=products.filter(function(products){
          return products.tags.includes(filter);
        });
        console.log( "newlist ", newList);
        setFilteredList([]);
        setFilteredList(newList);
      }
    }

    const changeUrl=(filter)=>{
      filterDataList(filter);
      setFilter(filter.toLowerCase());
    }


    const products = [
        {
          title: 'DTK Shirt', price: '$29', tags: 'shirt', 
          img: 'https://cdn.shopify.com/s/files/1/0220/4008/4552/products/COLOR_3PACK_585fb834-1307-47ee-b52a-20dbbbf08955.jpg?v=1657570179&width=832'
        },
        {
          title: 'DTK Hat', price: '$16', tags: 'hat', 
          img: 'https://cdn.shopify.com/s/files/1/1175/0278/products/70131_HTG_001_1024x1024.png?v=1650407771'
        },
      ]

    return filteredList != undefined ? (
    <>
        <Layout >
        <Seo title="Courses" />
        <div className="store-wrapper">
            <div className="storeNav">
                <div className="navContent">
                    <h4>Courses</h4>
                    <div className="storeLinks">
                        <span className={(filter=="")?"active-tab":""}
                        onClick={()=>changeUrl('')}>All</span>
                        <span className={(filter=="trading")?"active-tab":""}
                        onClick={()=>changeUrl('trading')}>Trading</span>
                        <span className={(filter=="real-estate")?"active-tab":""}
                        onClick={()=>changeUrl('real-estate')}>Real Estate</span>
                        <span className={(filter=="web-dev")?"active-tab":""}
                        onClick={()=>changeUrl('web-dev')}>Web Dev</span>
                        <span className={(filter=="ecom")?"active-tab":""}
                        onClick={()=>changeUrl('ecom')}>Ecommerce</span>
                    </div>
                    <Dropdown className="dropdownMenu">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={()=>filterDataList('')}>All</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>filterDataList('trading')}>Trading</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>filterDataList('real-estate')}>Real Estate</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>filterDataList('web-dev')}>Web Dev</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>filterDataList('ecom')}>Ecommerce</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            
            <div className="storeList">
                <div className="article-wrapper">
                    <p style={{  color: 'white'  }}>Coming Soon...</p>
                    {filteredList.slice(0, visible).map((part, key) => {
                        return <div className="blog-articles col-6" key={key}>

                                    {/* <img className='mainImg' src={part.img}/>
                                    <span className='tags'>{part.tags}</span>

                                    <h4 className='title'>{part.title}</h4>
                                    
                                    <div className='clock'>
                                        <span className='date'>{part.price}</span>
                                    </div>

                                    <button className='buyNow'>Buy Now</button> */}
                                </div>
                    })}
                </div>
            </div>
        </div>
    </Layout>
    </>
    ) : (
    <div></div>
    );
}