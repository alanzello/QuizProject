import { Button, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Categories from '../../Data/Categories'
import './Home.css'
import ErrorMessage from '../ErorrMessage/ErrorMessage'
import {useNavigate} from 'react-router-dom'


const Home = ({userName , setUserName , fetchQuestions}) => {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () =>{
        if(!category|| !difficulty || !userName){
            setError(true)
            return
        }else{
            setError(false)
            fetchQuestions(category , difficulty)
            navigate('/quiz')
        }
    }
  return (
    <div className="content">
        <div className="settings">
            <span style={{fontSize:30}}>Quiz Settings</span>
            <div className="settings-select">
                {error && <ErrorMessage>Please Fill all the Fields  </ErrorMessage>}
                <TextField label='Enter Your Name' variant='outlined' onChange={(e) => setUserName(e.target.value)} style={{marginBottom:25}}
                />
                <TextField
                select
                label='Select Category'
                variant='outlined'
                 style={{marginBottom:30}}
                 onChange={(e) => setCategory(e.target.value)}
                 value={category}
                >
                    {Categories.map((cat) =>
                    <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                    </MenuItem>
                    )}
                </TextField>

                <TextField
                select
                label="Select Difficulty"
                variant='outlined'
                style={{marginBottom:30}}
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
                >
                    <MenuItem key="Easy" value="easy">Easy</MenuItem>
                    <MenuItem key="Medium" value="medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="hard">Hard</MenuItem>
                </TextField>

                <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
                    Start Quiz
                </Button>
            </div>
        </div>

        <img src='/quiz.svg' className='banner' alt='quiz image'/>

    </div>
  )
}

export default Home