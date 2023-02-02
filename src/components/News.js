import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import spinner from "./spinner.gif"

function News(props) {

    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    let [totalresults,settotalresults]=useState(0);
    const [loading,setloading]=useState(false);
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0ff4658e9a3f4ce0aeb18c2c4e6eb339&page=${page}&pageSize=9`



    useEffect(() => {
        setloading(true);
        let response = fetch(url);
        response.then((res) => {
            return res.json();
        })
            .then((data) => {
                setarticle(data.articles);
                settotalresults(data.totalResults);
            })
            setloading(false);
    }, [page,url]);

    function handlenextclick() {
        // console.log(totalresults);
        if(page < Math.ceil(totalresults/9)){
            setpage(page+1);
            console.log("clicked");
    }
    else{

    }

    }

    function handleprevclick() {
        if(page>1){
        setpage(page-1);
        }
        else {

        }

    }





    return (
        <div className="container my-3">
            <h1>Todays top news</h1>
            {loading && <img src={spinner} alt="loading" />}
            {!loading && <div className="row p-5">
                {article.map((element) => {
                    return (<Newsitem className="col-md-4" title={element.title} description={element.description} key={element.url} url={element.url} imageurl={element.urlToImage} />)
                })
                }
            </div>}
            <div className="footer p-5">
                <div className="container d-flex justify-content-between">
                    <button className='btn btn-dark' onClick={handleprevclick} disabled={page<=1}>&larr; previous</button>
                    <button className="btn btn-dark" onClick={handlenextclick} disabled={page >= Math.ceil(totalresults/9)}>next &rarr;</button>
                </div>
            </div>
        </div>
    );
}

export default News;