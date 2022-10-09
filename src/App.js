import './App.css';
import icon_contact from './Galery/icon-phone.png';
import Lottie from "lottie-react";
import React, {useState, useEffect} from "react";
import logo_animation from "./Galery/logo.json";
import soundtrack from './Media/LaTruiteGerald.mp3';
//import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import Volumen from './Components/Volumen';
//import ReenderizadoElementos from './Components/ReenderizadoElementos';
//import Eventos from './Components/Eventos';
//import { EventosES6, EventosES7 } from './Components/EventosES';

import Modelos from './Components/Modelos.js';
//import Servicios from './Components/Servicios';
//import Departamentos from './Components/Departamentos.js';
//import Edificios from './Components/Edificios';
import video_arquitectura from  './Galery/Renders/areas/arquitectura.mp4';
//import video_interior from  './Galery/Renders/areas/interiorismo.mp4';
import Contactos from './Components/Contactos';
//import Interiorismo from './Components/Interiorismo';
import anime from 'animejs/lib/anime.es.js';

import video_luminaria from './Galery/Videos/light.mp4';
import video_muebles from './Galery/Videos/muebles.mp4';
//import video_interior from './Galery/Videos/interior2.mp4';

function App() {
    const video_interior="https://media.githubusercontent.com/media/LeninJimenezTorres/indomodesign.media/master/Videos/interior.mp4";
    //const video_muebles="https://media.githubusercontent.com/media/LeninJimenezTorres/indomodesign.media/master/Videos/muebles.mp4";
    //const video_luminaria="https://media.githubusercontent.com/media/LeninJimenezTorres/indomodesign.media/master/Videos/light.mp4";

    const [interiorshow, setInteriorshow] = useState('hidden');
    const [contactshow, setContactshow] = useState('hidden');
    const [sonido, setSonido] = useState('pause');
    const [pausado, setPausado] = useState(false);
    const [repro, setRepro] = useState(false);
    const [aux, setAux] = useState(0);
    const [aux2, setAux2] = useState(0);
    const [videofondo, setVideofondo] = useState();
    
    const conmutar = (src) => { 
        if (sonido=='play') {
            setSonido('pause');
            setRepro(false);
        }
        if (sonido=='pause'){
            setSonido('play');
            setRepro(true);
            setPausado(true);
        }
    };
    
    const show_contact = ()=>{
        console.log('Show');
        if(contactshow=='visible'){
            document.documentElement.style.setProperty('--z-contactos', '10');
            document.documentElement.style.setProperty('--color-div-contact', 'rgba(0, 0, 0, 0.8)');
            document.documentElement.style.setProperty('--show', 'visible');
            document.documentElement.style.setProperty('--width-div-interno-contact', '70vw');
            document.documentElement.style.setProperty('--height-div-interno-contact', '80vh');
            document.documentElement.style.setProperty('--show-tema-width', '70vw');
            document.documentElement.style.setProperty('--show-tema-height', '10vh');
            document.documentElement.style.setProperty('--show-categoria-contenido-height', '25%');
            document.documentElement.style.setProperty('--x-width', '5vw');
            setContactshow('hidden');
        }
        if(contactshow=='hidden'){
            document.documentElement.style.setProperty('--show', 'hidden');
            document.documentElement.style.setProperty('--color-div-contact', 'rgba(2, 105, 123, 0)');
            document.documentElement.style.setProperty('--width-div-interno-contact', '0vw');
            document.documentElement.style.setProperty('--height-div-interno-contact', '0vh');
            document.documentElement.style.setProperty('--show-tema-width', '0vw');
            document.documentElement.style.setProperty('--show-tema-height', '0vw');
            document.documentElement.style.setProperty('--show-categoria-contenido-height', '0vh');
            document.documentElement.style.setProperty('--x-width', '0vw');
            document.documentElement.style.setProperty('--z-contactos', '1');
            setContactshow('visible');
        }
        console.log('Ok Show');
    }
    
    const playInicial = ()=>{
        if (aux==0){
            setSonido('play');
            setRepro(true);
            setAux(100);
        }
    }
    
    const showfondo = (opcion)=>{
        if(opcion===1){
            setVideofondo(video_interior)
            
            //const elementodise = document.getElementsByClassName('text-pd');
            //var textWrapper = document.getElementById("text-pd");
            //console.log(textWrapper.textContent.replace(/\S| /gi, "<span class='letter'>$&</span>"));
            document.documentElement.style.setProperty('--z-fondo', '6');
            document.documentElement.style.setProperty('--show-fondo-s', 'visible');
            document.documentElement.style.setProperty('--z-intro-muebles', '-10');
            document.documentElement.style.setProperty('--z-intro-luminarias', '-10');
            document.documentElement.style.setProperty('--show-intro-muebles', 'hidden');
            document.documentElement.style.setProperty('--show-intro-luminarias', 'hidden');
            document.documentElement.style.setProperty('--xf-width', '5vw');
            
            document.documentElement.style.setProperty('--z-intro-diseno', '7');
            document.documentElement.style.setProperty('--show-intro-diseno', 'visible');
            console.log('Corre fondo');
            var textWrapper_d = document.querySelector('.ml9-d .letters');
            textWrapper_d.innerHTML = textWrapper_d.textContent.replace(/\S| /gi, "<span class='letter'>$&</span>");
            anime.timeline({loop: true})
            .add({
                targets: '.ml9-d .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }).add({
                targets: '.ml9-d',
                opacity: [1, 0],
                duration: 1000,
                easing: "easeOutExpo",
                delay: 13000
            });
            var textWrapper2_d = document.querySelector('.ml12-d');
            textWrapper2_d.innerHTML = textWrapper2_d.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({loop: true})
            .add({
                targets: '.ml12-d .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 3200,
                delay: (el, i) => 500 + 30 * i
            }).add({
                targets: '.ml12-d .letter',
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 2100,
                delay: (el, i) => 100 + 30 * i
            });
            
            /*
            var pos=0;
            var screenWidth = window.innerWidth;
            var t = setInterval(move,5);
            function move() {
                if(pos>=screenWidth){
                    clearInterval(t);
                }
                else{
                    pos+=1;
                    document.documentElement.style.setProperty('--txd',pos+'px');
                }
            }
        }*/
        }
        if(opcion===2){
            setVideofondo(video_muebles)
            document.documentElement.style.setProperty('--z-fondo', '6');
            document.documentElement.style.setProperty('--show-fondo-s', 'visible');
            document.documentElement.style.setProperty('--z-intro-diseno', '-10');
            document.documentElement.style.setProperty('--z-intro-luminarias', '-10');
            document.documentElement.style.setProperty('--show-intro-diseno', 'hidden');
            document.documentElement.style.setProperty('--show-intro-luminarias', 'hidden');
            document.documentElement.style.setProperty('--xf-width', '5vw');
            
            document.documentElement.style.setProperty('--z-intro-muebles', '7');
            document.documentElement.style.setProperty('--show-intro-muebles', 'visible');
            console.log('Corre fondo');
            var textWrapper_m = document.querySelector('.ml9-m .letters');
            textWrapper_m.innerHTML = textWrapper_m.textContent.replace(/\S| /gi, "<span class='letter'>$&</span>");
            anime.timeline({loop: true})
            .add({
                targets: '.ml9-m .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }).add({
                targets: '.ml9-m',
                opacity: [1, 0],
                duration: 1000,
                easing: "easeOutExpo",
                delay: 13000
            });
            var textWrapper2_m = document.querySelector('.ml12-m');
            textWrapper2_m.innerHTML = textWrapper2_m.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({loop: true})
            .add({
                targets: '.ml12-m .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 3200,
                delay: (el, i) => 500 + 30 * i
            }).add({
                targets: '.ml12-m .letter',
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 2100,
                delay: (el, i) => 100 + 30 * i
            });
            
        }
        if(opcion===3){
            setVideofondo(video_luminaria)
            document.documentElement.style.setProperty('--z-fondo', '6');
            document.documentElement.style.setProperty('--show-fondo-s', 'visible');
            document.documentElement.style.setProperty('--z-intro-diseno', '-10');
            document.documentElement.style.setProperty('--z-intro-muebles', '-10');
            document.documentElement.style.setProperty('--show-intro-diseno', 'hidden');
            document.documentElement.style.setProperty('--show-intro-muebles', 'hidden');
            document.documentElement.style.setProperty('--xf-width', '5vw');
            
            document.documentElement.style.setProperty('--z-intro-luminarias', '7');
            document.documentElement.style.setProperty('--show-intro-luminarias', 'visible');
            console.log('Corre fondo');
            var textWrapper_l = document.querySelector('.ml9-l .letters');
            textWrapper_l.innerHTML = textWrapper_l.textContent.replace(/\S| /gi, "<span class='letter'>$&</span>");
            anime.timeline({loop: true})
            .add({
                targets: '.ml9-l .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }).add({
                targets: '.ml9-l',
                opacity: [1, 0],
                duration: 1000,
                easing: "easeOutExpo",
                delay: 13000
            });
            var textWrapper2_l = document.querySelector('.ml12-l');
            textWrapper2_l.innerHTML = textWrapper2_l.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({loop: true})
            .add({
                targets: '.ml12-l .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 3200,
                delay: (el, i) => 500 + 30 * i
            }).add({
                targets: '.ml12-l .letter',
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 2100,
                delay: (el, i) => 100 + 30 * i
            });
        }
        if(opcion===0){
            setVideofondo()
            document.documentElement.style.setProperty('--z-fondo', '-10');
            document.documentElement.style.setProperty('--z-intro-diseno', '-10');
            document.documentElement.style.setProperty('--z-intro-muebles', '-10');
            document.documentElement.style.setProperty('--z-intro-luminarias', '-10');
            document.documentElement.style.setProperty('--show-intro-diseno', 'hidden');
            document.documentElement.style.setProperty('--show-intro-muebles', 'hidden');
            document.documentElement.style.setProperty('--show-intro-luminarias', 'hidden');
            document.documentElement.style.setProperty('--show-fondo-s', 'hidden');
            document.documentElement.style.setProperty('--xf-width', '0vw');

        }            
    };

    const ocultar_Xi = () =>{
        document.documentElement.style.setProperty('--color-contenedor-interiorismo', 'rgba(0, 0, 0, 0)');
        document.documentElement.style.setProperty('--show-interiorismo', 'hidden');
        document.documentElement.style.setProperty('--width-contenedor-interno-interiorismo', '0vw');
        document.documentElement.style.setProperty('--height-contenedor-interno-interiorismo', '0vh');
        document.documentElement.style.setProperty('--z-interior', '1');
        document.documentElement.style.setProperty('--xi-width', '0vw');
        setInteriorshow('visible');
    }
    
    const ocultar_X = () =>{
        document.documentElement.style.setProperty('--show', 'hidden');
        document.documentElement.style.setProperty('--color-div-contact', 'rgba(2, 105, 123, 0)');
        document.documentElement.style.setProperty('--width-div-interno-contact', '0vw');
        document.documentElement.style.setProperty('--height-div-interno-contact', '0vh');
        document.documentElement.style.setProperty('--show-tema-width', '0vw');
        document.documentElement.style.setProperty('--show-tema-height', '0vw');
        document.documentElement.style.setProperty('--show-categoria-contenido-height', '0vh');
        document.documentElement.style.setProperty('--x-width', '0vw');
        document.documentElement.style.setProperty('--z-contactos', '1');
        console.log('Function X: '+contactshow);
        setContactshow('visible');
    }
    
    useEffect(()=>{
            if (aux2==0){
                setContactshow('visible');
                setInteriorshow('visible');
                setAux2(100);
            }
            
            document.addEventListener("visibilitychange", () => {
                console.log('Cambio de ventana');
                setSonido('pause');
                setRepro(false);
            });
        }
    );

    /*
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const controls = new OrbitControls( camera, renderer.domElement );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 5;
    controls.update();
    
    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        controls.update();
    }
    animate();
    */
    return (
        <div className="App" onClick={playInicial}>
            <ReactHowler
                src={soundtrack}
                playing={repro}
                loop = {true}
                html5 = {true}
                volume = {0.8}
                initialized = {true}
            />

            {
            /* 
                <div>
                    <UseEffect/>
                </div>
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={0.1}></ambientLight>
                    <directionalLight intensity={0.1} position={[-2,5,3]}></directionalLight>
                    <Suspense fallback={null}>
                    <Box/>
                    </Suspense>
                </Canvas> 
                <Interiorismo/>
                <div className="x-i" onClick={ocultar_Xi}></div>
            */
            }
            
            <Contactos/>
            <div className="x" onClick={ocultar_X}></div>
            

            <div className='renders' onMouseMoveCapture={()=>{setSonido('play');
            setRepro(true);}}>
                <Modelos/>
            </div>

            <div className='menu-low'>
                <div className='sound' onClick={conmutar}>
                    <Volumen icono={sonido}/>
                </div>
                <div className='contact'>
                    <img src={icon_contact} className="contact_logo" alt="contact" onClick={show_contact}/>
                </div>
            </div>

            <div className='contenedor-logo-icono'>
                <span className='logo-icono'>
                    <Lottie animationData={logo_animation} loop={true} />
                </span>
            </div>
            <div className='contenedor-logo-letras'>
                <span className=''>INDOMO DESIGN</span>
            </div>
            
            <div className='services'>
                <div className='diseno' onClick={()=>{showfondo(1)}}>
                    <div className='t td'>
                        DISEÑO Y REMODELACIÓN
                    </div>
                    <div className='video vd'>
                        <video width="100%" height="auto" muted loop autoPlay controls={false}>
                            <source src={video_interior} type="video/mp4"/>
                        </video>
                    </div> 
                </div>
                <div className='muebles' onClick={()=>{showfondo(2)}}>
                    <div className='t tm'>
                        MUEBLES
                    </div>
                    <div className='video vm'>
                        <video width="100%" height="auto" muted loop autoPlay controls={false}>
                            <source src={video_muebles} type="video/mp4"/>
                        </video> 
                    </div>
                </div>
                <div className='luminarias' onClick={()=>{showfondo(3)}}>
                    <div className='t tl'>
                        LUMINARIAS
                    </div>
                    <div className='video vl'>
                        <video width="100%" height="auto" muted loop autoPlay controls={false}>
                            <source src={video_luminaria} type="video/mp4"/>
                        </video> 
                    </div>
                </div>
            </div>
            <div className='presentacion-d'>
                <div className='presentacion-di'>
                    <h1 className="ml9-d">
                        <span className="text-wrapper">
                            <span className="letters">Creamos tu entorno</span>
                        </span>
                    </h1>
                    <p className="ml12-d">Diseño de interiores y Remodelación</p>
                    <p className="descripcion-serv">Diseños perzonalizados a tu gusto</p>
                    <p className="descripcion-serv">Recorridos virtuales</p>
                    <p className="descripcion-serv">Remodelaciones</p>
                </div>
            </div>
            <div className='presentacion-m'>
                <div className='presentacion-mi'>
                    <h1 className="ml9-m">
                        <span className="text-wrapper">
                            <span className="letters">Diseñamos tus muebles</span>
                        </span>
                    </h1>
                    <p className="ml12-m">Somos fabricantes sin competencia</p>
                    <p className="descripcion-serv">Diseños perzonalizados a tu gusto</p>
                    <p className="descripcion-serv">Modelos en stock</p>
                    <p className="descripcion-serv">Tiempos cortos de fabricación</p>
                    <p className="descripcion-serv">Costos para todo presupuesto</p>
                </div>
            </div>
            <div className='presentacion-l'>
                <div className='presentacion-li'>
                    <h1 className="ml9-l">
                        <span className="text-wrapper">
                            <span className="letters">Iluminamos tu vida</span>
                        </span>
                    </h1>
                    <p className="ml12-l">Luminarias para interiores y exteriores</p>
                    <p className="descripcion-serv">Diseño de luminarias</p>
                    <p className="descripcion-serv">Simulación y estudio lumínico</p>
                    <p className="descripcion-serv">Incorporación a estructuras</p>
                    <p className="descripcion-serv">Luminarias led inteligentes</p>
                </div>
            </div>
            <div className="video-fondo">
                <video  key={videofondo} width="100%" height="auto" muted loop autoPlay controls={false}>
                    <source src={videofondo} type="video/mp4"/>
                </video>
                <div className="x-f" onClick={()=>{showfondo(0)}}></div>
            </div>
            {/* 
            <div className='arrow' onClick={bajar}></div>

            <div className='servicios'>
                <Servicios/>
            </div>

            <div className='trabajos'>
                <Departamentos/>
            </div>
            <div className='separador'></div>
            
            <div className='trabajos'>
                <Edificios/>
            </div>
            <div className='separador'></div>
             */}

            
            {/* 
            <div className='datos'> 
                <ReenderizadoElementos/>
            </div>
            <div>
                <Eventos/>
            </div>
            <div>
                <EventosES6/>
            </div>
            <div>
                <EventosES7/>
            </div>
            */}
        </div>
    );
}

export default App;
