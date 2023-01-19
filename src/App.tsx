import React, { useState, useEffect } from 'react'
import Character from './components/Character'
import Film from './components/Film'
import getCharacters from './api/getCharacters'
import { ICharacter } from './api/getCharacters'

const App: React.FC = () => {
  const [characterList, setCharacterList] = useState<Array<ICharacter>>([])
  const [filmList, setFilmList] = useState<Array<string>>()

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacterList(res)
    }).catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <div className='main-wrapper'>
        <div className='characters-wrapper'>
          <h1>Characters</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {characterList.map((item, index) => (
              <li style={{ padding: '5px 0' }} key={index} onClick={() => { setFilmList(item.movies); }}><Character
                name={item.name}
                born={item.born}
                color={item.hair_colour}
                height={item.height}
              />
              </li>
            ))}
          </ul>
        </div>
        <div className='films-wrapper'>
          <h1>Films</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filmList && filmList.map((item) => (<li style={{ padding: '5px 0' }}><Film movieId={item} /></li>))}
          </ul>
        </div>
      </div>
      <style>{`
        .main-wrapper {
          display: flex;
          flex-direction: row;
        }
        .characters-wrapper {
          width: 50%;
          padding: 100px;
        }
        .films-wrapper {
          width: 50%;
          padding: 100px;
        }
      `}</style>
    </>
  );
}

export default App;
