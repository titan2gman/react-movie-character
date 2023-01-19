import React from 'react'

interface ICharacter {
  name: string;
  born: string;
  color: string;
  height: string;
}

const Charater: React.FC<ICharacter> = (props) => {

  const { name, born, color, height } = props

  return (
    <>
      <div className="character-wrapper">
        <div className="character-name">
          {name}
        </div>
        <div className="character-info-container">
          <div className="character-info-item">
            <p style={{ fontWeight: 'bold' }}>Born:</p>
            <p>{born}</p>
          </div>
          <div className="character-info-item">
            <p style={{ fontWeight: 'bold' }}>Height:</p>
            <p>{height}</p>
          </div>
          <div className="character-info-item">
            <p style={{ fontWeight: 'bold' }}>Hair Colour:</p>
            <p>{color}</p>
          </div>
        </div>
      </div>
      <style>{`
        .character-wrapper {
          display: flex;
          flex-direction: column;
          padding: 8px 16px;
          border: 1px solid black;
          cursor: pointer;
        }
        .character-name {
          text-decoration: underline;
          font-size: 20px;
        }
        .character-info-container {
          display: flex;
          gap: 50px;
          flex-direction: row;
          justify-content: start;
        }
        .charater-info-item {
          display: flex;          
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default Charater;