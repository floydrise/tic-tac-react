import ticTac from "../assets/TicTacToeImg.png"
export const Header = () => {
    return (
        <>
            <img className="logo" src={ticTac} alt="React logo"/>
            <h1>Tic-Tac-Reac(t)</h1>
        </>
    )
}