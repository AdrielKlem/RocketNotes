import { Container, Profile } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/AdrielKlem.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Adriel Klem</strong>
                </div>
            </Profile>
        </Container>
    )
}