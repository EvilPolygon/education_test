import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/auth.context'
import {useHttp} from '../hooks/http.hook'

export const CreatePage = () => {

    const {request} = useHttp()

    const [link, setLink] = useState('')

    const auth = useContext(AuthContext)

    useEffect( () => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter'){
            try {
                
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: 'Bearer ${auth.token}'  // здесь эта срань не работает. надо искать другой способ подтверждения авторизации
                })
                console.log(data)

            } catch (e) {         
            }
        }
    }

    return (
        <div className="row">
            <div className=" col s8 offset-s2" style={{ paddingTop: '2rem' }}>
                <div className="input-field">
                    <input
                        placeholder="Вставьте ссылку"
                        id="link"
                        type="text"
                        value = {link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress = {pressHandler}
                    />
                    <label htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}