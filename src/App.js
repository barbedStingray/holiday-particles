import { useState, useEffect } from 'react';
import './App.css';
import BackgroundParticles from './Components/BackgroundParticles';
import Header from './Components/Header';
import Clock from './Components/Clock';

function App() {


    const [holiday, setHoliday] = useState('Halloween');
    const [holidate, setHolidate] = useState('');
    const [particles, setParticles] = useState({});


    const christmasParticles = {
        background: {
            // color: {
            //     // value: "#0e87a1",
            // },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true,
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: [
                    "#ffffff",
                ],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                direction: "bottom",
                speed: 3,
                random: false,
                straight: false,
                out_mode: "out", // default bounce
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                value: 500,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle", // * star, circle
                // type: "image",
                // src: HalloweenDoor,
                // width: 100,
                // height: 100,
            },
            size: {
                value: 7,
                random: true,
                anim: {
                    enable: false,
                    speed: 30,
                    size_min: 1,
                    sync: true,
                },
            },
        },
        detectRetina: true,
    }
    const valentineParticles = {
        background: {
            // color: {
            //     // value: "#0e87a1",
            // },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true,
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10,
                    },
                },
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 40,
                    duration: 10,
                    opacity: 0.6,
                    color: [
                        "#ff0000",
                        "#ffc0cb",
                        "#fff",
                    ],
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            },
        },
        particles: {
            color: {
                value: [
                    "#ffffff",
                ],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                direction: "top",
                speed: {
                    min: 2,
                    max: 5,
                },
                random: false,
                straight: false,
                out_mode: "out", // default bounce
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle", // * star, circle
            },
            size: {
                value: {
                    min: 2,
                    max: 6,
                },
                random: true,
                anim: {
                    enable: false,
                    speed: 30,
                    size_min: 1,
                    sync: true,
                },
            },
        },
        detectRetina: true,
    }
    const independenceParticles = {
        background: {
            // color: {
            //     // value: "#0e87a1",
            // },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true,
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 8,
                    speed: 5,
                },
                repulse: {
                    distance: 150,
                    duration: 0.5,
                },
            },
        },
        particles: {
            color: {
                value: [
                    "#ffffff",
                    "#0000ff",
                    "#ff0000",
                ],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                direction: "default",
                speed: 2,
                random: false,
                straight: false,
                out_mode: "bounce", // default bounce
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            opacity: {
                value: 0.6,
            },
            shape: {
                type: "star", // * star, circle
                // type: "image",
                // src: HalloweenDoor,
                // width: 100,
                // height: 100,
            },
            size: {
                value: 6,
                random: true,
                anim: {
                    enable: true,
                    speed: 20,
                    size_min: 1,
                    sync: true,
                },
            },
        },
        detectRetina: true,
    }
    const halloweenParticles = {
        background: {
            // color: {
            //     // value: "#0e87a1",
            // },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true,
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                grab: {
                    distance: 300,
                    // links: {
                    //     color: "#ffffff",
                    //     enable: true,
                    //     opacity: 0.8,
                    //     width: 3,
                    // }
                },
            },
        },
        particles: {
            color: {
                value: [
                    "#ffffff",
                ],
            },
            links: {
                color: "#ffffff",
                // enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: false,
                direction: "default",
                speed: 3,
                random: false,
                straight: false,
                out_mode: "bounce", // default bounce
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                value: 175,
                density: {
                    enable: true,
                    value_area: 1000,
                },
            },
            opacity: {
                value: 0.0,
            },
            shape: {
                type: "star", // * star, circle
                // type: "image",
                // src: HalloweenDoor,
                // width: 100,
                // height: 100,
            },
            // size: {
            //     value: 6,
            //     random: true,
            //     anim: {
            //         enable: true,
            //         speed: 20,
            //         size_min: 1,
            //         sync: true,
            //     },
            // },
        },
        detectRetina: true,
    }
    const thanksgivingParticles = {
        background: {
            // color: {
            //     // value: "#0e87a1",
            // },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true,
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "attract",
                },
            },
            modes: {
                push: {
                    quantity: 5,
                },
                repulse: {
                    distance: 150,
                    duration: 0.5,
                },
                attract: {
                    distance: 250,
                    duration: 0.5,
                    speed: 5,
                },
            },
        },
        particles: {
            color: {
                value: [
                    "#8ac75b",
                    "#f8c726",
                    "#fbff13",
                    "ff6600",
                    "3c6e33",
                ],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                direction: "right",
                speed: 3,
                random: false,
                straight: false,
                out_mode: "out", // default bounce
            },
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            opacity: {
                value: 0.8,
            },
            shape: {
                // type: "star", // * star, circle, square, polygon
                type: "triangle",
            },
            size: {
                value: 12,
                random: true,
            },
        },
        detectRetina: true,
    }
    const patricksParticles = {
        background: {
            // color: {
            //     value: "#00ff00",
            // },
            // image: "url(https://res.cloudinary.com/dzh1qe1zp/image/upload/v1714184926/heagwaoenjdhpspey1zn.jpg)",
            // position: "50% 50%",
            // repeat: "no-repeat",
            // size: "cover",
            // opacity: 1,
        },
        backgroundMask: {
            composite: "destination-out",
            cover: {
                color: {
                    value: {
                        r: 0,
                        g: 50,
                        b: 0,
                    },
                },
                opacity: 1,
                image: "url(https://res.cloudinary.com/dzh1qe1zp/image/upload/v1714184926/heagwaoenjdhpspey1zn.jpg)",
            },
            enable: true,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true,
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10,
                    },
                },
            },
            modes: {
                bubble: {
                    distance: 400,
                    size: 150,
                    duration: 10,
                    opacity: 0,
                    // color: [
                    //     "#ff0000",
                    //     "#ffc0cb",
                    //     "#fff",
                    // ],
                    position: {
                        x: 0,
                        y: 0,
                    },
                },
            },
        },
        particles: {
            color: {
                // value: [
                //     "#ffffff",
                // ],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                direction: "default",
                speed: {
                    min: 1,
                    max: 3,
                },
                random: false,
                straight: false,
                out_mode: "bounce", // default bounce
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle", // * star, circle
            },
            size: {
                value: {
                    min: 1,
                    max: 2,
                },
                random: true,
            },
        },
        detectRetina: true,
    }
    const benConfetti = {
        background: {
            // color: {
            //     // value: "#0e87a1",
            // },
        },
        fpsLimit: 120,
        interactivity: {
            // detectsOn: "window",
            events: {
                resize: {
                    enable: true,
                    delay: 0.5,
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                // angle: {
                //     offset: 0,
                //     value: 90,
                // },
                // center: {
                //     x: 50,
                //     y: 50,
                //     mode: "percent",
                //     radius: 0,
                // },
                decay: {
                    min: 0.05,
                    max: 0.15
                },
                enable: true,
                direction: "top",
                gravity: {
                    acceleration: 9.81,
                    enable: true,
                    inverse: false,
                    maxSpeed: 200,
                },

                outModes: {
                    default: "destroy",
                    bottom: "destroy",
                    left: "destroy",
                    right: "destroy",
                    top: "none"
                },
                random: false,
                speed: {
                    min: 20,
                    max: 150
                },
            },
            number: {
                value: 350,
                density: {
                    enable: false,
                    value_area: 800,
                },
            },

            // opacity: {
            //     value: 1,
            //     animation: {
            //         enable: false
            //     }
            // },
            reduceDuplicates: false,
            shape: {
                type: ["triangle", "square", "star"],
            },
            size: {
                value: {
                    min: 2,
                    max: 4,
                },
                random: true,
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360,
                },
                animation: {
                    enable: false
                }
            },
            // roll: {
            //     // darken: {
            //     //     enable: true,
            //     //     value: 30
            //     // },
            //     enable: false,
            //     enlighten: {
            //         enable: true,
            //         value: 30
            //     },
            //     mode: "both",
            //     speed: {
            //         min: 15,
            //         max: 25
            //     }
            // },
            // tilt: {
            //     value: {
            //         min: 0,
            //         max: 360
            //     },
            //     animation: {
            //         enable: true,
            //         speed: 60,
            //         decay: 0,
            //         sync: false
            //     },
            //     direction: "random",
            //     enable: true
            // },
            wobble: {
                distance: 30,
                enable: true,
                speed: {
                    angle: {
                        min: -15,
                        max: 15
                    },
                    move: 10
                }
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360
                },
                animation: {
                    enable: true,
                    speed: 60,
                    decay: 0,
                    sync: false
                },
                direction: "random",
                path: false
            },


        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        emitters: {
            autoPlay: true,
            fill: true,
            life: {
                wait: true,
            },
            rate: {
                quantity: 100, // Adjust the emission rate as needed
                delay: 62.05
            },
            shape: {
                type: "square"
            },
            startCount: 0,
            size: {
                mode: "percent",
                height: 0,
                width: 0
            },
            position: {
                x: 50,
                y: 100
            }
        },
        detectRetina: true,
    }



    function determineParticles(holiday) {
        switch (holiday) {
            case 'Christmas':
                setParticles(christmasParticles);
                break;
            case 'Halloween':
                setParticles(halloweenParticles);
                break;
            case 'Independence Day':
                setParticles(independenceParticles);
                break;
            case 'St. Patricks Day':
                setParticles(patricksParticles);
                break;
            case 'Thanksgiving':
                setParticles(thanksgivingParticles);
                break;
            case 'Valentines Day':
                setParticles(valentineParticles);
                break;
            case 'Bens Birthday':
                setParticles(benConfetti);
                break;
            default:
                setParticles({});
        }
    }
    useEffect(() => {
        determineParticles(holiday);
        console.log('holiday', holiday);
    }, [holiday]);


    return (
        <div className={`holidayParticles ${holiday}`}>

            <Header setHoliday={setHoliday} setHolidate={setHolidate} />

            <div className='backgroundParticles'>
                <BackgroundParticles particles={particles} />
            </div>

            <Clock holiday={holiday} holidate={holidate} />


        </div>
    );
}

export default App;
