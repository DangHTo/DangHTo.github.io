// src/components/About.js

import React from "react";
import { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function About() {
    useEffect(() => {
      create_cube();
    }, []);

    function create_cube(){ 
    
      //Canvas
      var canvas = document.querySelector('canvas.webgl')
      console.log(canvas)
    
      // Scene
      var scene = new THREE.Scene();
    
      // Object
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({color: 0x00FF00, wireframe: true});
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    
      // Sizes
      const sizes = {
        width: 400,
        height: 200
      }

      // Camera
      var camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
      camera.position.z = 1.5;
      scene.add(camera)

      // Renderer
      var renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
      })

      //Orbit Control
      const controls = new OrbitControls( camera, renderer.domElement );
      controls.update();
    
      render();

      function render() {
          requestAnimationFrame(render);
          mesh.rotation.y -= .005;
          mesh.rotation.z -= .007;
          renderer.render(scene, camera);
      }
    }


    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm <span className="text-green-500">Dang.</span>
                <br className="hidden lg:inline-block" />A Software Engineer.
              </h1>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full flex justify-center">
              <canvas className="webgl"></canvas>
            </div>
          </div>
        </section>
    );
}
