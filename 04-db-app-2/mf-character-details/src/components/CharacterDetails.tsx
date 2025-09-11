import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './CharacterDetails.css'

const CharacterDetails = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null as any)
  const baseUrl = 'https://dragonball-api.com/api/characters';

  const getData = async () => {
    const res = await fetch(`${baseUrl}/${id}`);
    const data = await res.json();
    setCharacterData(data);
  }
  useEffect(() => {
    getData();
  }, [id])

  console.log(characterData);


  return (

    <>

      <NavLink to={'/characters'} className='link-to-ch'>Full Characters list</NavLink>
      <div className='main-ch-container'>

        {
          characterData && (
            <>
              <div>
                <img src={characterData.image} alt={characterData.name} />
              </div>
              <div>
                <table className='table-ch'>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{characterData.name}</td>
                    </tr>
                    <tr>
                      <th>Origin Planet</th>
                      <td>{characterData.originPlanet.name}</td>
                    </tr>
                    <tr>
                      <th>Affiliation</th>
                      <td>{characterData.affiliation}</td>
                    </tr>
                    <tr>
                      <th>Race</th>
                      <td>{characterData.race}</td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td>{characterData.gender}</td>
                    </tr>
                    <tr>
                      <th>Transformations</th>
                      <td>{characterData.race.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>

          )
        }

      </div>
    </>

  )
}

export default CharacterDetails
