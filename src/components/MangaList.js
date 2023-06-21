import React from "react";

const MangaList = (props) => {
    return (
        <>
            {props.mangas.map((manga, index)=> (
                <div className='d-flex justify-content-start m-3 item' key={manga._id}>
                    <img src={manga.img} alt="manga"></img>
                    <div className='info'>
                        <span className="manga-name">{manga.name}</span>
                        <span className="rus-name">{manga.nameRus}</span>
                        <span className="chapter">Chapter: {manga.chapter}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MangaList;