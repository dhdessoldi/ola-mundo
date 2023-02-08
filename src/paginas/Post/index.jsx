import "./Post.css";
import styles from "./Post.module.css";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import posts from "json/posts.json";
import { Route, Routes, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const postsFiltrados = posts.filter(
    (post) => post.id !== Number(parametros.id)
  );
  const postsRandomizados = shuffle(postsFiltrados);
  const postsRecomendados = postsRandomizados.slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
