import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter, Link, useParams } from 'react-router-dom';
import Article from './Screens/Article'
import ArticleDetail from './Screens/ArticleDetail'
import Category from './Screens/Category'
import Register from './Screens/Register'
import Login from './Screens/Login'
import Modal from './Modal/Modal'







function App() {

  let [model, setModel] = useState(false)
  let [article, setArticle] = useState(null)
  return (
    <div id="bodyy" className="App  m-0 p-0 ">
        <BrowserRouter>
        <nav className="flex gap-6 text-xl justify-between p-4">
          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png" className="h-8 w-8"></img>
            <ul className='flex justify-center gap-6'>
                <li className='hover:underline ml-44'> <Link to="/"> Home  </Link> </li>
                <li className='hover:underline'> <Link to="/article"> Article </Link> </li>
            </ul>

            <ul className="flex justify-end gap-6">
              <li className="hover:underline" onClick={() => { setModel(true) }}>Register</li>
              <li className="hover:underline">Sign In</li>
            </ul>

        </nav>
          {model && <Modal closeModal={setModel}/>}

          <Routes>
            <Route path='/article' element={<Category/>}></Route>
            <Route path='/article/detail/:id' element={<ArticleDetail />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
   