import React, { Suspense, useState, Fragment } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Jubilee from './Jubilee';
import Cartier from './Cartier';
import Modern from './Modern';
import JBL2 from './JBL2';

import CartierCF from './watches/Cartier.Strap.CF.3B';
import CartierMF from './watches/Cartier.Strap.MF.3B';

import ClassicCF from './watches/Classic.Strap.CF.3B';
import ClassicMF from './watches/Classic.Strap.MF.3B';

import JubileeCF from './watches/Jubilee.Strap.CF.3B';
import JubileeMF from './watches/Jubilee.Strap.MF.3B';

import ModernCF from './watches/Modern.Strap.CF.3B';
import ModernMF from './watches/Modern.Strap.MF.3B';

import SimpleMCF from './watches/Simple.Metal.Strap.CF.3B';
import SimpleMMF from './watches/Simple.Metal.Strap.MF.3B';

import SimpleCF from './watches/Simple.Strap.CF.3B';
import SimpleMF from './watches/Simple.Strap.MF.3B';


import Select from './components/Select'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { NoToneMapping } from 'three';

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
 }

 const jubileeBand = [
    { id: 0, name: 'Normal', texture: "Copper"},
    { id: 1, name: 'Titanium Gold', texture: "Titanium_Gold"},
    { id: 2, name: 'Platinum Gold', texture: "Platinum_Gold"},
    
 ]

 const jubileeScrews = [
    { id: 0, name: 'Default', texture: "Face_Screws_BaseColor.jpg"},
    { id: 1, name: 'Normal', texture: "Face_Screws_Normal.jpg"},
    { id: 2, name: 'Metallic', texture: "Face_Screws_Metallic_jpg-Face_Screws_Roughness_jpg.png"},
  ]

  const jubileeFaceMiddle = [
    { id: 0, name: 'Default', texture: "Face_Middle_BaseColor.jpg"},
    { id: 1, name: 'Normal', texture: "Face_Middle_Normal.jpg"},
    { id: 2, name: 'Metallic', texture: "Face_Middle_Metallic-Face_Middle_Roughness.png"},
  ]

  const jubileeFaceFront = [
    { id: 0, name: 'Default', texture: "Face_Front_BaseColor.jpg"},
    { id: 1, name: 'Normal', texture: "Face_Front_Normal.jpg"},
    { id: 2, name: 'Metallic', texture: "Face_Front_Metallic_jpg-Face_Front_Roughness_jpg.png"},
  ]

  const jubileeFaceBack = [
    { id: 0, name: 'Default', texture: "Face_Back_Normal.jpg"},
    { id: 1, name: 'Metalic', texture: "Face_Back_Metallic_jpg-Face_Back_Roughness_jpg.png"},
  ]

 const modelList = [
    { 
      id: 0, 
      name: 'CartierCF', 
      model: "CartierCF",
      straps: [
      { id: 0 , name: "Bronze" },
      { id: 1 , name: "Bronze_Copper_Screws" },
      { id: 2 , name: "Copper" },
      { id: 3 , name: "Gold" },
      { id: 4 , name: "Gold_Titanium_Screws" },
      { id: 5 , name: "Platinum" },
      { id: 6 , name: "Rose_Gold" },
      { id: 7 , name: "Rose_Gold_Platinum" },
      { id: 8 , name: "Silver" },
      { id: 9 , name: "Titanium" },
      { id: 10 , name: "Titanium_Gold_Screws" }
      ],
      backplate: [
        { id: 0 , name: "Bronze" },
        { id: 1 , name: "Carbon_Black" },
        { id: 2 , name: "Carbon_Green" },
        { id: 3 , name: "Copper" },
        { id: 4 , name: "Gold" },
        { id: 5 , name: "Plastic_Black" },
        { id: 6 , name: "Platinum" },
        { id: 7 , name: "Rose_Gold" },
        { id: 8 , name: "Silver" },
        { id: 9 , name: "Titanium" },
      ],
      screws: [
        { id: 0 , name: "Bronze" },
        { id: 1 , name: "Copper" },
        { id: 2 , name: "Gold" },
        { id: 3 , name: "Platinum" },
        { id: 4 , name: "Rose_Gold" },
        { id: 5 , name: "Silver" },
        { id: 6 , name: "Titanium" },
      ]
    },

    { id: 1, name: 'CartierMF', model: "CartierMF"},
    { 
      id: 2, 
      name: 'ClassicCF', 
      model: "ClassicCF",
      straps: [
        { id: 0 , name: "Bronze" },
        { id: 1 , name: "Bronze_Copper_Screws" },
        { id: 2 , name: "Copper" },
        { id: 3 , name: "Gold" },
        { id: 4 , name: "Gold_Titanium_Screws" },
        { id: 5 , name: "Platinum" },
        { id: 6 , name: "Rose_Gold" },
        { id: 7 , name: "Rose_Gold_Platinum" },
        { id: 8 , name: "Silver" },
        { id: 9 , name: "Titanium" },
        { id: 10 , name: "Titanium_Gold_Screws" }
        ],
        backplate: [
          { id: 0 , name: "Bronze" },
          { id: 1 , name: "Carbon_Black" },
          { id: 2 , name: "Carbon_Green" },
          { id: 3 , name: "Copper" },
          { id: 4 , name: "Gold" },
          { id: 5 , name: "Plastic_Black" },
          { id: 6 , name: "Platinum" },
          { id: 7 , name: "Rose_Gold" },
          { id: 8 , name: "Silver" },
          { id: 9 , name: "Titanium" },
        ],
        screws: [
          { id: 0 , name: "Bronze" },
          { id: 1 , name: "Copper" },
          { id: 2 , name: "Gold" },
          { id: 3 , name: "Platinum" },
          { id: 4 , name: "Rose_Gold" },
          { id: 5 , name: "Silver" },
          { id: 6 , name: "Titanium" },
        ]
    },
    { 
      id: 3,
      name: 'ClassicMF', 
      model: "ClassicMF",
      straps: [
        { id: 0 , name: "Black_Leather_Gold_Lock" },
        { id: 1 , name: "Black_Leather_Silver_Lock" },
        { id: 2 , name: "Bright_Leather_Gold_Lock" },
        { id: 3 , name: "Bright_Leather_Silver_Lock" },
        { id: 4 , name: "Brown_Leather_Gold_Lock" },
        { id: 5 , name: "Brown_Leather_Silver_Lock" },
        { id: 6 , name: "Dark_Brown_Gold_Lock" },
        { id: 7 , name: "Dark_Brown_Silver_Lock" },
        { id: 8 , name: "Fine_Leather_Gold_Lock" },
        { id: 9 , name: "Fine_Leather_Silver_Lock" },
        { id: 10 , name: "Natural_Gold_Lock" },
        { id: 11 , name: "Natural_Silver_Lock" },
        { id: 12 , name: "Orange_Leather_Gold_Lock" },
        { id: 13 , name: "Orange_Leather_Silver_Lock" },

        ],
        backplate: [
          { id: 0 , name: "Bronze" },
          { id: 1 , name: "Carbon_Black" },
          { id: 2 , name: "Carbon_Green" },
          { id: 3 , name: "Copper" },
          { id: 4 , name: "Gold" },
          { id: 5 , name: "Plastic_Black" },
          { id: 6 , name: "Platinum" },
          { id: 7 , name: "Rose_Gold" },
          { id: 8 , name: "Silver" },
          { id: 9 , name: "Titanium" },
        ],
        screws: [
          { id: 0 , name: "Bronze" },
          { id: 1 , name: "Copper" },
          { id: 2 , name: "Gold" },
          { id: 3 , name: "Platinum" },
          { id: 4 , name: "Rose_Gold" },
          { id: 5 , name: "Silver" },
          { id: 6 , name: "Titanium" },
        ]
    },
    { id: 4, name: 'JubileeCF', model: "JubileeCF"},
    { id: 5, name: 'JubileeMF', model: "JubileeMF"},
    { id: 6, name: 'ModernCF', model: "ModernCF"},
    { id: 7, name: 'ModernMF', model: "ModernMF"},
    { id: 8, name: 'SimpleMCF', model: "SimpleMCF"},
    { id: 9, name: 'SimpleMMF', model: "SimpleMMF"},
    { id: 10, name: 'SimpleCF', model: "SimpleCF"},
    { id: 11, name: 'SimpleMF', model: "SimpleMF"},
    

 ]

 const bandColors = [
    { id: 0, name: 'Default', file: 'wtf', color: ""},
    { id: 1, name: 'Red', file: 'wtf', color: "red"},
    { id: 2, name: 'Blue', file: 'wtf2', color: "blue"},
    { id: 3, name: 'Green', file: 'wtf2', color: "green"},
    { id: 4, name: 'Yellow', file: 'wtf2', color: "yellow"},
    { id: 5, name: 'Orange', file: 'wtf2', color: "orange"},
    { id: 6, name: 'Purple', file: 'wtf2', color: "purple"},
    { id: 7, name: 'Pink', file: 'wtf2', color: "pink"},
    { id: 8, name: 'Black', file: 'wtf2', color: "black"},
    { id: 9, name: 'White', file: 'wtf2', color: "white"},
    { id: 10, name: 'Brown', file: 'wtf2', color: "brown"},
    { id: 11, name: 'Grey', file: 'wtf2', color: "grey"},
    { id: 12, name: 'Gold', file: 'wtf2', color: "gold"},
    { id: 13, name: 'Silver', file: 'wtf2', color: "silver"},
    { id: 14, name: 'Bronze', file: 'wtf2', color: "bronze"},
    { id: 15, name: 'Copper', file: 'wtf2', color: "copper"},
    { id: 16, name: 'Chrome', file: 'wtf2', color: "chrome"},
    { id: 17, name: 'Platinum', file: 'wtf2', color: "platinum"},
    { id: 18, name: 'Titanium', file: 'wtf2', color: "titanium"},
    { id: 19, name: 'Steel', file: 'wtf2', color: "steel"}
  ]

  const backColors = [
    { id: 0, name: 'Default', file: 'wtf', color: ""},
    { id: 1, name: 'Red', file: 'wtf', color: "red"},
    { id: 2, name: 'Blue', file: 'wtf2', color: "blue"},
    { id: 3, name: 'Green', file: 'wtf2', color: "green"},
    { id: 4, name: 'Yellow', file: 'wtf2', color: "yellow"},
    { id: 5, name: 'Orange', file: 'wtf2', color: "orange"},
    { id: 6, name: 'Purple', file: 'wtf2', color: "purple"},
    { id: 7, name: 'Pink', file: 'wtf2', color: "pink"},
    { id: 8, name: 'Black', file: 'wtf2', color: "black"},
    { id: 9, name: 'White', file: 'wtf2', color: "white"},
    { id: 10, name: 'Brown', file: 'wtf2', color: "brown"},
    { id: 11, name: 'Grey', file: 'wtf2', color: "grey"},
    { id: 12, name: 'Gold', file: 'wtf2', color: "gold"},
    { id: 13, name: 'Silver', file: 'wtf2', color: "silver"},
    { id: 14, name: 'Bronze', file: 'wtf2', color: "bronze"},
    { id: 15, name: 'Copper', file: 'wtf2', color: "copper"},
    { id: 16, name: 'Chrome', file: 'wtf2', color: "chrome"},
    { id: 17, name: 'Platinum', file: 'wtf2', color: "platinum"},
    { id: 18, name: 'Titanium', file: 'wtf2', color: "titanium"},
    { id: 19, name: 'Steel', file: 'wtf2', color: "steel"}
  ]

  const screwColors = [
    { id: 0, name: 'Default', file: 'wtf', color: ""},
    { id: 1, name: 'Red', file: 'wtf', color: "red"},
    { id: 2, name: 'Blue', file: 'wtf2', color: "blue"},
    { id: 3, name: 'Green', file: 'wtf2', color: "green"},
    { id: 4, name: 'Yellow', file: 'wtf2', color: "yellow"},
    { id: 5, name: 'Orange', file: 'wtf2', color: "orange"},
    { id: 6, name: 'Purple', file: 'wtf2', color: "purple"},
    { id: 7, name: 'Pink', file: 'wtf2', color: "pink"},
    { id: 8, name: 'Black', file: 'wtf2', color: "black"},
    { id: 9, name: 'White', file: 'wtf2', color: "white"},
    { id: 10, name: 'Brown', file: 'wtf2', color: "brown"},
    { id: 11, name: 'Grey', file: 'wtf2', color: "grey"},
    { id: 12, name: 'Gold', file: 'wtf2', color: "gold"},
    { id: 13, name: 'Silver', file: 'wtf2', color: "silver"},
    { id: 14, name: 'Bronze', file: 'wtf2', color: "bronze"},
    { id: 15, name: 'Copper', file: 'wtf2', color: "copper"},
    { id: 16, name: 'Chrome', file: 'wtf2', color: "chrome"},
    { id: 17, name: 'Platinum', file: 'wtf2', color: "platinum"},
    { id: 18, name: 'Titanium', file: 'wtf2', color: "titanium"},
    { id: 19, name: 'Steel', file: 'wtf2', color: "steel"}
  ]

 const models = [
   { id: 0, name: 'Default', file: 'wtf', color: ""},
   { id: 1, name: 'Red', file: 'wtf', color: "red"},
   { id: 2, name: 'Blue', file: 'wtf2', color: "blue"}
 ]

export default function App() {

  const [selectedModel, setSelectedModel] = useState(modelList[0])

  const [selectedBand, setSelectedBand] = useState(selectedModel.straps[0].name)
  const [selectedScrews, setSelectedScrews] = useState(selectedModel.screws[0].name)
  const [selectedMiddle, setSelectedMiddle] = useState(jubileeFaceMiddle[0])
  const [selectedFront, setSelectedFront] = useState(jubileeFaceFront[0])
  const [selectedBack, setSelectedBack] = useState(selectedModel.backplate[0].name)



   const handleBandChange = event => {
    console.log("BAND CHANGE")

     setSelectedBand(event.name);
     setBandColor(event.name)
     console.log(selectedBand)
   };

   const handleScrewChange = event => {
    console.log("SCREW CHANGE")
    setSelectedScrews(event.name);
    setScrewColor(event.name)
  };

   const handleMiddleChange = event => {
    console.log("Middle CHANGE")
     setSelectedMiddle(event);
     setMiddleColor(event.texture)
   };

    const handleFrontChange = event => {
      console.log("Front CHANGE")
      setSelectedFront(event);
      setFrontColor(event.texture)
    };

   const handleBackChange = event => {
      setSelectedBack(event.name);
      setBackColor(event.name)
    };

    const handleModelChange = event => {
      setSelectedModel(event.name);
      
    };
 

   //Create a hook for select value
   const [bandColor, setBandColor] = React.useState(selectedModel.straps[0].name);
   const [screwColor, setScrewColor] = React.useState(selectedModel.screws[0].name);
   const [middleColor, setMiddleColor] = React.useState('Face_Middle_BaseColor.jpg');
   const [frontColor, setFrontColor] = React.useState('Face_Front_BaseColor.jpg');
   const [backColor, setBackColor] = React.useState(selectedModel.backplate[0].name);

   const [model, setModel] = React.useState(modelList[0]);

   return (
      <>
      <div className="h-screen w-screen bg-millie-blue flex">
      <div >
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 5 }} 
        style={{width: '70vw', height: '100vh',}}
        colorManagement = {true}

        gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: false, stencil: false, depth: true }}
        onCreated={({ gl }) => {
      gl.setClearColor('#FFFFFF')
        }} >

          {/* <ambientLight intensity={1.5} /> */}
      
         <directionalLight position={[0, 0, 0]} intensity={0.5} />
      
         <directionalLight position={[-40, 0, 0]} intensity={0.5} />
         <directionalLight position={[-80, 0, 0]} intensity={0.5} />
         <directionalLight position={[-120, 0, 0]} intensity={0.5} />

         <directionalLight position={[40, 0, 0]} intensity={0.5} />
         <directionalLight position={[80, 0, 0]} intensity={0.5} />
         <directionalLight position={[120, 0, 0]} intensity={0.5} />
        

         <directionalLight position={[0, 40, 0]} intensity={0.5} />
         <directionalLight position={[0, 80, 0]} intensity={0.5} />
         <directionalLight position={[0, 120, 0]} intensity={0.5} />

         <directionalLight position={[0, -40, 0]} intensity={0.5} />
         <directionalLight position={[0, -80, 0]} intensity={0.5} />
         <directionalLight position={[0, -120, 0]} intensity={0.5} />

         <directionalLight position={[0, 0, 20]} intensity={0.5} />
         <directionalLight position={[0, 0, 40]} intensity={0.5} />
         <directionalLight position={[0, 0, 80]} intensity={0.5} />
         
         <Suspense fallback={null}>
          
            {(() => {
              if (selectedModel.model === 'CartierCF') {
                return (
                  <CartierCF 
                  bandColor={selectedBand}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwColor={selectedScrews}
                  backColor={selectedBack}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'CartierMF') {
                return (
                  <CartierMF
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'ClassicCF') {
                return (
                  <ClassicCF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'ClassicMF') {
                return (
                  <ClassicMF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'JubileeCF') {
                return (
                  <JubileeCF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'JubileeMF') {
                return (
                  <JubileeMF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              }

              ///////
              else if (selectedModel.model === 'ModernCF') {
                return (
                  <ModernCF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'ModernMF') {
                return (
                  <ModernMF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'SimpleMCF') {
                return (
                  <SimpleMCF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'SimpleMMF') {
                return (
                  <SimpleMMF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'SimpleCF') {
                return (
                  <SimpleCF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              } else if (selectedModel.model === 'SimpleMF') {
                return (
                  <SimpleMF 
                  model={selectedModel.model}
                  bandColor={bandColor}
                  middleColor={middleColor}
                  frontColor={frontColor}
                  screwsColor={screwColor}
                  backColor={backColor}
                  position={[0, 0, 0]} 
                  />
                )
              }
            })()}          
          
         </Suspense>
         <OrbitControls target={[0, 0, 0]} enableZoom={true} enablePan={false} enableRotate={true} autoRotate={true} autoRotateSpeed={3.5}/>    
      </Canvas>
      </div>
      <div className="w-screen h-screen">
        <div className="flex flex-col justify-center items-center h-full px-5 py-5 overflow-auto">
          <div className="bg-white rounded-lg shadow-2xl p-5 w-full h-full opacity-100 space-y-3">

  <Listbox value={selectedModel} onChange={handleModelChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Model</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                
                <span className="block truncate">{selectedModel.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {modelList.map((model) => (
                  <Listbox.Option
                    key={model.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={model}
                  >
                    {({ selectedModel, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selectedModel ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {model.name}
                          </span>
                        </div>

                        {selectedModel ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
  </Listbox>

   <Listbox value={selectedBand} onChange={handleBandChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Band</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                
                <span className="block truncate">{selectedBand}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {selectedModel.straps.map((band) => (
                  <Listbox.Option
                    key={band.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={band}
                  >
                    {({ selectedBand, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selectedBand ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {band.name}
                          </span>
                        </div>

                        {selectedBand ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
   </Listbox>

   <Listbox value={selectedMiddle} onChange={handleMiddleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Middle</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                
                <span className="block truncate">{selectedMiddle.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {jubileeFaceMiddle.map((middle) => (
                  <Listbox.Option
                    key={middle.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={middle}
                  >
                    {({ selectedMiddle, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selectedMiddle ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {middle.name}
                          </span>
                        </div>

                        {selectedMiddle ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
   </Listbox>

   <Listbox value={selectedFront} onChange={handleFrontChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Front</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                
                <span className="block truncate">{selectedFront.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {jubileeFaceFront.map((front) => (
                  <Listbox.Option
                    key={front.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={front}
                  >
                    {({ selectedFront, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selectedFront ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {front.name}
                          </span>
                        </div>

                        {selectedFront ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
   </Listbox>

   <Listbox value={selectedScrews} onChange={handleScrewChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Screws</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                
                <span className="block truncate">{selectedScrews}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {selectedModel.screws.map((screw) => (
                  <Listbox.Option
                    key={screw.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={screw}
                  >
                    {({ selectedScrews, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selectedScrews ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {screw.name}
                          </span>
                        </div>

                        {selectedScrews ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
   </Listbox>

   <Listbox value={selectedBack} onChange={handleBackChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Backplate</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                
                <span className="block truncate">{selectedBack}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {selectedModel.backplate.map((back) => (
                  <Listbox.Option
                    key={back.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={back}
                  >
                    {({ selectedBack, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(selectedBack ? 'font-semibold' : 'font-normal', 'block truncate')}
                          >
                            {back.name}
                          </span>
                        </div>

                        {selectedBack ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
   </Listbox>
    

            <div className="flex justify-center items-center pt-10">
               <button 
               onClick={
                  () => {
                     console.log("Suprise me!");
                      //Select a random item from bandColors array
                      const bandIndex = Math.floor(Math.random() * jubileeBand.length);
                      const bandColor = jubileeBand[bandIndex];

                      const backIndex = Math.floor(Math.random() * jubileeFaceBack.length);
                      const backColor = jubileeFaceBack[backIndex];

                      const screwIndex = Math.floor(Math.random() * jubileeScrews.length);
                      const screwColor = jubileeScrews[screwIndex];

                      const frontIndex = Math.floor(Math.random() * jubileeFaceFront.length);
                      const frontColor = jubileeFaceFront[frontIndex];

                      const middleIndex = Math.floor(Math.random() * jubileeFaceMiddle.length);
                      const middleColor = jubileeFaceMiddle[middleIndex];

                      setBandColor(bandColor.texture);
                      setBackColor(backColor.texture);
                      setScrewColor(screwColor.texture);
                      setFrontColor(frontColor.texture);
                      setMiddleColor(middleColor.texture);

                    //Change model mesh color to random color
                     //Change model mesh texture to random texture
                     //Change model mesh material to random material
                     
                     


                  }
               }
               className="bg-millie-blue text-white font-medium py-2 px-4 rounded-lg hover:bg-millie-blue hover:opacity-70">
                  Suprise me!
               </button>
               </div>
            </div>
              </div>
      </div>
      </div>
         </>
   );
}
