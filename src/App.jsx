import React from 'react';
import s from './App.module.css';
import shoot2 from './sounds/Shoot2.mp3';
import shoot3 from './sounds/Shoot3.mp3';
import main from './sounds/main.mp3';
import gameOver from './sounds/GameOver.mp3';


class App extends React.Component {

    state = {
        counter: 0,
        random: 10,
        score: 'Score',
        timer: 2,
        lifeCount: 3,
        dead: false,


        shooter: true
    };

    main = new Audio(main);
    gameOver = new Audio(gameOver);
    shoot2 = new Audio(shoot2);
    shoot3 = new Audio(shoot3);

    musicRun = () => {
        this.main.currentTime = 0;
        this.main.play()
    };


    randomNum = () => Math.floor(Math.random() * 2);

    checkTimer =()=>{
        if(this.state.timer === 0){
            this.setState({lifeCount: this.state.lifeCount -1, random: 10, dead: true});
            alert("Ты умер, продолжить?");
        }
    };

    lifeChecker= ()=>{
        if(this.state.lifeCount === 0){
            this.gameOver.play();
        }
    };

    onImgClick = () => {
        this.shoot2.play();
        this.shoot3.play();
        this.shoot2.currentTime = 0;
        this.shoot3.currentTime = 0;
        let score = 100;
        if (this.state.score === 'Score') {
            this.setState({score: score, random: 10, timer: 2, dead: false, shooter: false})
        } else {
            this.setState({score: this.state.score + score, random: 10, timer: 2, dead:false, shooter: false})
        }

    };

    componentDidMount() {
        setInterval(() => {
            this.setState({random: this.randomNum(), shooter: true})
        }, 2000);
        // setInterval(this.musicRun, 6700);
        setInterval(() => {
            console.log(this.state.timer);
            this.checkTimer();
            this.lifeChecker();
            this.setState({timer: this.state.timer - 1})
        }, 1000);


    }


    render = () => {
        return (
            <div className={s.wrapper}>
                <div className={`${s.saloon} ${this.state.dead === true ? s.dead : ''}`}>
                    <div className={`${s.doorShooter}
                     ${this.state.random === 0 ? '' : s.doorShooterDisplayNone} 
                    ${this.state.shooter === false ? s.doorShooterDisplayNone : ''}
                    ${this.state.shooter === false ? s.doorShooterDead : ''}
                    ` }
                         onClick={this.onImgClick}/>
                    <div className={`${s.leftTopShooter} ${this.state.random === 1 ? '' : s.doorShooterDisplayNone}`}
                         onClick={this.onImgClick}/>
                    <div className={`${s.leftBottomShooter} ${this.state.random === 2 ? '' : s.doorShooterDisplayNone}`}
                         onClick={this.onImgClick}/>
                    <div
                        className={`${s.rightTopShooter} ${this.state.random === 3 ? '' : s.doorShooterDisplayNone}`}
                        onClick={this.onImgClick}/>
                    <div
                        className={`${s.rightBottomShooter} ${this.state.random === 4 ? '' : s.doorShooterDisplayNone}`}
                        onClick={this.onImgClick}/>
                    <div className={s.score}>{this.state.score}</div>
                </div>
                <div className={s.lifes}>
                   life {this.state.lifeCount}
                </div>
            </div>
        );
    }
}

export default App;
