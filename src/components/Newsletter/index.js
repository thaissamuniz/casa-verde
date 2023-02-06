import { useState } from "react";
import Input from "../Input";
import SubscribeButton from "../SubscribeButton"

const Newsletter = () => {

    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (email.includes('@') && email.includes('.com')) {
            alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
            setEmail('')
        } else {
            alert('email inválido');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Input valor={email} aoAlterado={valor => setEmail(valor)} />
            <SubscribeButton>Assinar newsletter</SubscribeButton>
        </form>
    )
}

export default Newsletter;