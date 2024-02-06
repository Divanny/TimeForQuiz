import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";

const Main = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [difficulty, setDifficulty] = useState(new Set(['easy']));
  const [category, setCategory] = useState(new Set(['all']));

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'music', label: 'Music' },
    { value: 'sport_and_leisure', label: 'Sport & Leisure' },
    { value: 'film_and_tv', label: 'Film & TV' },
    { value: 'arts_and_literature', label: 'Arts & Literature' },
    { value: 'history', label: 'History' },
    { value: 'society_and_culture', label: 'Society & Culture' },
    { value: 'science', label: 'Science' },
    { value: 'geography', label: 'Geography' },
    { value: 'food_and_drink', label: 'Food & Drink' },
    { value: 'general_knowledge', label: 'General Knowledge' }
  ];

  const difficulties = [
    { value: "easy", label: 'Easy' }, 
    { value: "medium", label: 'Medium' },
    { value: "hard", label: "Hard" }
  ];

  return (
    <div className='flex-col flex justify-center w-3/4 sm:w-1/4 animate-fade-up'>
      <div className='flex-col flex justify-center my-4'>
        <img src={logo} alt='Logo' className='h-40 sm:h-56 my-2 select-none' />
        <h1 className='main-title text-center text-ellipsis text-2xl sm:text-3xl lg:text-5xl drop-shadow-md'>Test your knowledge!</h1>
        <h2 className='text-center text-ellipsis text-xs sm:text-xs lg:text-lg text-white drop-shadow-md'>Time for Quiz is a trivia app that lets you test your knowledge on a variety of topics.</h2>
      </div>
      <button onClick={onOpen} className="btn btn-start mt-4"><span>Start game</span></button>
      <p className="main-title text-center my-4 text-xl drop-shadow-md text-white"><span className='main-title text-gray-400'>High Score:</span> 26</p>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur' 
        classNames={{
          base: "border-[#292f46] bg-[#310f2a] dark:bg-[#310f2a] text-[#fff]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">⚙️ Game Configuration</ModalHeader>
              <ModalBody>
                <Select 
                  isRequired
                  label="Select a difficulty" 
                  className="max-w"
                  description={"Choose the difficulty level for this challenge"}
                  selectedKeys={difficulty}
                  onSelectionChange={setDifficulty}
                >
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select 
                  isRequired
                  label="Select a category" 
                  className="max-w"
                  description={"Choose a category for this challenge"}
                  selectedKeys={category}
                  onSelectionChange={setCategory}
                >
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-start"><span>Start game</span></button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
export default Main;