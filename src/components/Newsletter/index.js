import NewsletterInput from "../Input";
import SubscribeButton from "../SubscribeButton"

const Newsletter = () => {
    return (
        <form>
            <NewsletterInput placeholder="Insira seu e-mail" />
            <SubscribeButton>Assinar newsletter</SubscribeButton>
        </form>
    )
}

export default Newsletter;