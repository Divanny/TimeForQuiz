import React, { useState, useEffect } from "react";
import logo from "assets/logo.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import categories from "./helpers/categories";
import difficulties from "./helpers/difficulties";
import { showLoading } from 'react-global-loading';

const Home = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [difficulty, setDifficulty] = useState(new Set(["easy"]));
  const [category, setCategory] = useState(new Set(["all"]));

  const startGame = () => {
    onClose();
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
    }, 1000);
  };

  return (
    <div className="z-1 absolute w-screen h-screen flex items-center justify-center">
      <div className="flex-col flex justify-center w-3/4 sm:w-1/4 animate-fade-up">
        <div className="flex-col flex justify-center my-4">
          <img
            src={logo}
            alt="Logo"
            className="h-40 sm:h-56 my-2 select-none"
          />
          <h1 className="main-title text-center text-ellipsis text-2xl sm:text-3xl lg:text-5xl drop-shadow-md">
            Test your knowledge!
          </h1>
          <h2 className="text-center text-ellipsis text-xs sm:text-xs lg:text-lg text-white drop-shadow-md">
            Time for Quiz is a trivia app that lets you test your knowledge on a
            variety of topics.
          </h2>
        </div>
        <button onClick={onOpen} className="btn btn-start mt-4">
          <span>Start game</span>
        </button>
        <p className="main-title text-center my-4 text-xl drop-shadow-md text-white">
          <span className="main-title text-gray-400">High Score:</span> 26
        </p>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          onOpenChange={onOpenChange}
          backdrop="blur"
          classNames={{
            base: "border-[#292f46] bg-[#310f2a] dark:bg-[#310f2a] text-[#fff]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  ⚙️ Game Configuration
                </ModalHeader>
                <ModalBody>
                  <Select
                    isRequired
                    label="Select a difficulty"
                    className="max-w"
                    description={
                      "Choose the difficulty level for this challenge"
                    }
                    selectedKeys={difficulty}
                    onSelectionChange={setDifficulty}
                  >
                    {difficulties.map((difficulty) => (
                      <SelectItem
                        key={difficulty.value}
                        value={difficulty.value}
                      >
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
                  <button onClick={startGame} className="btn btn-start">
                    <span>Start game</span>
                  </button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
export default Home;
