import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { StoreContext } from "../Providers/Store"

export default function Category() {
    const [articles, setArticles] = useState([])
    const [choosenCategory, setChoosenCategory] = useState('all')
    const [isActive, setIsActive] = useState(false);

    function displayCategory(){

        fetch('http://edu.project.etherial.fr/articles').then((res) => {
            res.json().then((json) =>{
                console.log(json.data)
                setArticles(json.data)
            })
        })
    
    }

    const handleClick = () => {
    
        setIsActive(current => !current);
    
      };

    useEffect(() => {
        displayCategory()

    }, [])
     

    return (


        <div id="full" className="h-screen w-screen">
            
                        <p className="flex text-lg mb-8 ml-8 ">Choisir selon la catégorie :</p>
        <>
            <div className="flex mb-10">
                <button className="mr-4 p-4 bg-slate-900 w-44 rounded-lg text-slate-200 hover:bg-violet-600 ease-linear" onClick={() => {setChoosenCategory('all')}}> show all </button>
                <button className="mr-4 bg-slate-900 w-44 rounded-lg text-slate-200 hover:bg-violet-600" onClick={() => {setChoosenCategory('DEV')}} > show dev</button>
                <button className="mr-4 bg-slate-900 w-44 rounded-lg text-slate-200 hover:bg-violet-600" onClick={() => {setChoosenCategory('ART')}}> show art</button>
                <button className="mr-4 bg-slate-900 w-44 rounded-lg text-slate-200 hover:bg-violet-600" onClick={() => {setChoosenCategory('BIZ')}}> show biz</button>
            </div>

            <p className="flex text-lg mb-8 ml-8 ">Liste des articles :</p>
            {
                
            articles.map((article) => {
                if(article.ArticleCategory.name === choosenCategory || choosenCategory === 'all'){

                    return (
                        <Link to={`/article/detail/${article.id}`} className="w-5" key={article.id} state={{ article: article }}>

                            <div>
                                <div  id="container" className=" max-w-md flex flex-col  mb-16 rounded-3xl p-2">  
                                    <a className=""> <h2 className=" rounded-t-3xl flex justify-center p-3"> {article.title}</h2></a>
                                    <h3 className=""> {article.content}</h3>
                                    <span>catégorie : {article.ArticleCategory.name}</span>
                                    <a className=""><h4 className="">Article mis en ligne depuis : {article.created_at}</h4></a>
                                    <a id="abuged" className="mb-10 "> <h1 className="rounded-b-3xl ">Auteur : {article.User.firstname + ' '+ article.User.lastname}</h1></a>
                                </div>
                            </div>
                            
                        </Link>
                    )

                }
            })}
        </>
        </div>
    )
    
}