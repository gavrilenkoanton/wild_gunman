import React from 'react';
import s from './App.module.css';
import shoot2 from './sounds/Shoot2.mp3';
import shoot3 from './sounds/Shoot3.mp3';
import main from './sounds/main.mp3';
import gameOver from './sounds/GameOver.mp3';
import gameOver2 from './sounds/GameOver2.mp3';
import youDead from './sounds/YouDead.mp3';

class App extends React.Component {

    state = {
        counter: 0,
        random: 0,
        score: 'Score',
        timer: 2,
        lifeCount: 3,
        dead: false,
        aliveShooter: true,
        aliveShooterShot: false,
    };

    main = new Audio(main);
    gameOver = new Audio(gameOver);
    gameOver2 = new Audio(gameOver2);
    youDead = new Audio(youDead);
    shoot2 = new Audio(shoot2);
    shoot3 = new Audio(shoot3);

    randomNum = () => Math.floor(Math.random() * 5);

    checkTimer = () => {
        if (this.state.timer === 1) {
            this.setState({aliveShooterShot: true});
            setTimeout(() => {
                this.shoot2.play();
            }, 500)
        } else if (this.state.timer === 0) {
            this.setState({lifeCount: this.state.lifeCount - 1, aliveShooterShot: false, dead: true});
            this.youDead.play()
        }
    };

    lifeChecker = () => {
        if (this.state.lifeCount === 0) {
            this.gameOver.play();
            setTimeout(()=>{this.gameOver2.play()}, 6000)
            this.setState({lifeCount: -1})
        }
    };

    onImgClick = () => {
        this.shoot2.play();
        this.shoot3.play();
        this.shoot2.currentTime = 0;
        this.shoot3.currentTime = 0;
        let score = 1000;

        if (this.state.score === 'Score') {
            this.setState({score: score})
        } else {
            this.setState({score: this.state.score + score});
        }

        this.setState({aliveShooter: false, timer: 2});

        setTimeout(() => {
            this.setState({random: 10, aliveShooter: true, timer: 2})
        }, 1000);

        setTimeout(() => {
            this.setState({random: this.randomNum(), aliveShooterShot: false})
        }, 2000)
    };


    youLostClick = () => {
        this.setState({dead: false, timer: 2});
        this.main.play();
    };

    gameOverClick = ()=>{
        this.main.play()
        this.setState(
            {counter: 0,
            random: 0,
            score: 'Score',
            timer: 2,
            lifeCount: 3,
            dead: false,
            aliveShooter: true,
            aliveShooterShot: false})
    };

    componentDidMount() {

        setInterval(() => {
            if (this.state.lifeCount === -1) {
                this.setState({lifeCount: "Totaly Dead"})
            }
        }, 10);

        if (this.state.dead) {
            setTimeout(() => {
                this.setState({dead: false})
            }, 3000)
        } else {
            if (this.state.score === "Score") {
                this.main.play()
            }
            this.setState({random: this.randomNum()})

            setInterval(() => {
                this.checkTimer();
                this.lifeChecker();
                this.setState({timer: this.state.timer - 1})
            }, 1000);
        }
    }


    render = () => {
        return (
            <div className={s.wrapper}>
                <div className={`${this.state.dead === true && this.state.lifeCount > 0 ? s.youLost : ''}`}
                     onClick={this.youLostClick}>You Lost
                </div>
                <div className={`${this.state.dead === true && this.state.lifeCount === "Totaly Dead" ? s.youLost : ''}`}
                onClick={this.gameOverClick}
                >Game Over
                </div>
                <div className={`${s.saloon} ${this.state.dead === true ? s.dead : ''}`}>
                    <div className={`
                     ${this.state.random === 0 && this.state.aliveShooter === true && this.state.aliveShooterShot === false ? s.doorShooter : ''} 
                     ${this.state.random === 0 && this.state.aliveShooter === false ? s.doorShooterDead : ''} 
                     ${this.state.random === 0 && this.state.aliveShooter === true && this.state.aliveShooterShot === true ? s.doorShooterShot : ''} 
                    `}
                         onClick={this.onImgClick}/>
                    <div className={`
                     ${this.state.random === 1 && this.state.aliveShooter === true && this.state.aliveShooterShot === false ? s.leftTopShooter : ''} 
                     ${this.state.random === 1 && this.state.aliveShooter === false ? s.leftTopShooterDead : ''} 
                     ${this.state.random === 1 && this.state.aliveShooter === true && this.state.aliveShooterShot === true ? s.leftTopShooterShot : ''} 
                    `}
                         onClick={this.onImgClick}/>
                    <div className={`
                    ${this.state.random === 2 && this.state.aliveShooter === true && this.state.aliveShooterShot === false ? s.leftBottomShooter : ''} 
                     ${this.state.random === 2 && this.state.aliveShooter === false ? s.leftBottomShooterDead : ''} 
                     ${this.state.random === 2 && this.state.aliveShooter === true && this.state.aliveShooterShot === true ? s.leftBottomShooterShot : ''} 
                    `}
                         onClick={this.onImgClick}/>
                    <div
                        className={`
                         ${this.state.random === 3 && this.state.aliveShooter === true && this.state.aliveShooterShot === false ? s.rightTopShooter : ''} 
                     ${this.state.random === 3 && this.state.aliveShooter === false ? s.rightTopShooterDead : ''} 
                     ${this.state.random === 3 && this.state.aliveShooter === true && this.state.aliveShooterShot === true ? s.rightTopShooterShot : ''} 
                        `}
                        onClick={this.onImgClick}/>
                    <div
                        className={`
                         ${this.state.random === 4 && this.state.aliveShooter === true && this.state.aliveShooterShot === false ? s.rightBottomShooter : ''} 
                     ${this.state.random === 4 && this.state.aliveShooter === false ? s.rightBottomShooterDead : ''} 
                     ${this.state.random === 4 && this.state.aliveShooter === true && this.state.aliveShooterShot === true ? s.rightBottomShooterShot : ''} 
                        `}
                        onClick={this.onImgClick}/>
                    <div className={s.score}>{this.state.score}</div>
                </div>
                <div className={s.lifes}>
                    life: {this.state.lifeCount}
                </div>
            </div>
        );
    }
}

export default App;
