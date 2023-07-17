import "./NewPost.css";
import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="new-post">
          <h1>Inserir novo post: </h1>
          <form onSubmit={(e) => createPost(e)}>
            <div className="form-control">
              <label htmlFor="title">Título:</label>
              <input type="text" name="title" id="title" placeholder="Digite o título" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
              <label htmlFor="body">Conteúdo:</label>
              <textarea name="body" id="body" placeholder="Digite o conteúdo" onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Criar Post" className="btn"/>
          </form>
        </div>
      </div>
    </div>

  )
}

export default NewPost