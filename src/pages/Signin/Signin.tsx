import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase';

import './style.scss'

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSingIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className="container">
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="Foto de Usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>
    
            <span>
            Ultilizando autenticação social, por exemplo, autenticação com a Google você <br />
            facilitando a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
            </span>
    
            <button type="button" className="button" onClick={handleGoogleSingIn}>
            Entrar com o Google
            </button>
        </div>
    )
}