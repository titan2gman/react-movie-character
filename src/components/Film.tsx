import React, { useEffect, useState } from 'react'
import getMovie from '../api/getMovie';
import { Movie } from '../api/getMovie';

interface IProps {
  movieId: string;
}

const Film: React.FC<IProps> = (props) => {

  const { movieId } = props
  const [movieInfo, setMovieInfo] = useState<Movie>()

  useEffect(() => {
    getMovie(movieId).then((res) => {
      setMovieInfo(res)
    }).catch((err) => console.log(err))
  }, [movieId])

  return (
    <>
      <div className="film-wrapper">
        <div className="film-title">
          {movieInfo?.title}
        </div>
        <div className="film-info-container">
          <div className="film-info-item">
            <p style={{ fontWeight: 'bold' }}>Released:</p>
            <p>{movieInfo?.released}</p>
          </div>
          <div className="film-info-item">
            <p style={{ fontWeight: 'bold' }}>Director:</p>
            <p>{movieInfo?.director}</p>
          </div>
        </div>
      </div>
      <style>{`
        .film-wrapper {
          display: flex;
          flex-direction: column;
          padding: 8px 16px;
          border: 1px solid black;
        }
        .film-title {
          text-decoration: underline;
          font-size: 20px;
        }
        .film-info-container {
          display: flex;
          flex-direction: row;
          gap: 50px;
          justify-content: start;
        }
        .film-info-item {
          display: flex;          
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default Film