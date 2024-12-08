import "../Board.css";
import {useState} from "react";
import {Footer} from "./Footer.jsx";

export const Board = () => {
    const [contents, setContent] = useState(Array(9).fill(undefined));
    const [player, setPlayer] = useState(1);
    const [icon, setIcon] = useState("❌");
    const [hasEnded, setEnded] = useState(false);
    const [message, setMessage] = useState("");

    const handleClick = (passedIndex) => {
        if (hasEnded) return;

        if (player === 1 && contents[passedIndex] === undefined && !hasEnded) {
            setPlayer(2);
            setMessage("");
            setIcon("️🔵")
        } else if (player === 2 && contents[passedIndex] === undefined && !hasEnded) {
            setPlayer(1);
            setMessage("");
            setIcon("❌");
        }

        if (contents[passedIndex] === undefined) {
            if (player === 1) {
                setContent((prevContent) => {
                    const copiedArr = [...prevContent];
                    copiedArr.splice(passedIndex, 1, icon)
                    checkWinner(copiedArr);
                    return copiedArr;
                });
            } else if (player === 2) {
                setContent((prevContent) => {
                    const copiedArr = [...prevContent];
                    copiedArr.splice(passedIndex, 1, icon)
                    checkWinner(copiedArr);
                    return copiedArr;
                });
            }
        } else {
            setMessage("Can't do that!");
        }
    };

    const checkWinner = (contents) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (contents[a] !== undefined && contents[a] === contents[b] && contents[b] === contents[c]) {
                setEnded(true);
                setMessage(`Winner - Player ${player} : ${icon}`)
            } else if (contents.every((content) => content !== undefined)) {
                setMessage("Draw");
            }
        }
    }

    const handleRestart = () => {
        setContent(Array(9).fill(undefined));
        setPlayer(1);
        setIcon("❌");
        setEnded(false);
        setMessage("");
    }
    return (
        <>
            <h3>Player {player} : {icon}</h3>
            <div className="row">
                <div onClick={() => {
                    handleClick(0)
                }} className="box">{contents[0]}</div>
                <div onClick={() => {
                    handleClick(1)
                }} className="box">{contents[1]}</div>
                <div onClick={() => {
                    handleClick(2)
                }} className="box">{contents[2]}</div>
            </div>
            <div className="row">
                <div onClick={() => {
                    handleClick(3)
                }} className="box">{contents[3]}</div>
                <div onClick={() => {
                    handleClick(4)
                }} className="box">{contents[4]}</div>
                <div onClick={() => {
                    handleClick(5)
                }} className="box">{contents[5]}</div>
            </div>
            <div className="row">
                <div onClick={() => {
                    handleClick(6)
                }} className="box">{contents[6]}</div>
                <div onClick={() => {
                    handleClick(7)
                }} className="box">{contents[7]}</div>
                <div onClick={() => {
                    handleClick(8)
                }} className="box">{contents[8]}</div>
            </div>

            <Footer message={message} handleRestart={handleRestart}/>
        </>
    )
}
