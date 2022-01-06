import { BeakerIcon } from "@heroicons/react/solid";
import React, { useContext, useState } from "react";
import { GameContext, GameContextProvider } from "../components/context";
import WordleGrid from "../components/grid";
import InfoModal from "../components/info";

export default function Index({}) {
  const [showModal, setShowModal] = useState(false);
  const state = useContext(GameContext);

  return (
    <>
      {showModal ? (
        <InfoModal
          closeModal={() => {
            setShowModal(false);
          }}
        />
      ) : null}

      <GameContextProvider>
        {showModal ? <InfoModal closeModal={this.closeModal} /> : null}

        <div className="flex flex-col h-screen">
          <header>
            <div className="container mx-auto max-w-screen-sm mb-4 py-2 border-b">
              <BeakerIcon className="h-5 w-5 text-blue-500" />
              <div className="text-center">
                <h1 className="uppercase font-extrabold text-4xl tracking-wider">
                  Wordle.es
                </h1>
              </div>
            </div>
          </header>

          <WordleGrid />
          <div>
            {/* <Keyboard
            clickHandler={this.handleKey}
          /> */}
          </div>
        </div>
      </GameContextProvider>
    </>
  );
}
