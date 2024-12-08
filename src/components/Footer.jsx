export const Footer = ({message, handleRestart}) => {
    return (
        <>
            <h2>{message}</h2>
            <button type="button" onClick={handleRestart}>Restart</button>
        </>
    )
}