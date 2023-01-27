import Input from "../Input"
import SubscribeButton from "../SubscribeButton"

const Newsletter = () => {
    return (
        <form>
            <Input placeholder={'Insira seu e-mail'} />
            <SubscribeButton text={'Assinar newsletter'} />
        </form>
    )
}

export default Newsletter;