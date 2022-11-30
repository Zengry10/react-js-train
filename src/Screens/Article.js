
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function Article() {
//     let location = useLocation()
//     let navigate = useNavigate()
//     console.log(location)
//     const [articles, setArticles] = useState([])

//     function displayArticles() {
 
//         console.log(location)

//         fetch('http://edu.project.etherial.fr/articles').then((res) => {
//             res.json().then((json) => {
//                 setArticles(json.data)
//                 console.log(json.data)

//             })
//         })

//     }

//     useEffect(() => {
//         displayArticles()

//     }, [])



// return (

//     <div id="full" className=" font-mono bg-gray-200">
//         <p className="flex text-lg justify-center mb-8 ">Liste des articles :</p>
//         {
            
//             articles.map((article) => {
                  
//                 return (  

//                     <Link to="/article/detail" className="w-5" state={{ article: article }}>
//                         <div key={article.id} id="container" className=" max-w-md flex flex-col  mb-16 rounded-3xl p-2">  

//                                 <a className=""> <h2 className=" rounded-t-3xl flex justify-center p-3"> {article.title}</h2></a>
//                                 <h3 className=""> {article.content}</h3>
//                                 <a className=""><h4 className="">Article mis en ligne depuis : {article.created_at}</h4></a>
//                                 <a id="abuged" className="mb-10 "> <h1 className="rounded-b-3xl ">Auteur : {article.User.firstname + ' '+ article.User.lastname}</h1></a>
//                         </div>
//                     </Link>
//                 )
                
//             })
//         }

//     </div>
// )

// }