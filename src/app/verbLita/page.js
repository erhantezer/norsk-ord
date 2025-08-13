"use client";
import { verbLitaData } from "@/data/verbLita";
import { useEffect } from "react";
import Footer from "../footer/page";

export default function VerbLitaPage() {
  useEffect(() => {
    function saveData(tag, data) {
      window.localStorage.setItem(`${tag}:data`, JSON.stringify(data));
    }

    function saveState(tag, state) {
      window.localStorage.setItem(`${tag}:state`, JSON.stringify(state));
    }

    function getData(tag) {
      const data = window.localStorage.getItem(`${tag}:data`);
      return data ? JSON.parse(data) : null;
    }

    function getState(tag) {
      const state = window.localStorage.getItem(`${tag}:state`);
      return state ? JSON.parse(state) : null;
    }

    function getElement(id) {
      const el = document.getElementById(id);
      if (!el) throw new Error("Missing required HTML element: " + id);
      return el;
    }

    function createFlashcard(tag, ui, data, state) {
      let isPreteritum = state?.isPreteritum ?? true;
      let currentCardIndex = state?.currentCardIndex ?? 0;

      function currentCardWord() {
        return isPreteritum
          ? data[currentCardIndex].preteritum
          : data[currentCardIndex].perfektum;
      }

      function currentCardTranslation() {
        return data[currentCardIndex].translation;
      }

      function saveGameState() {
        saveState(tag, {
          isPreteritum,
          currentCardIndex,
        });
      }

      function restart() {
        isPreteritum = true;
        currentCardIndex = 0;
        saveGameState();
        data.sort(() => Math.random() - 0.5);
        saveData(tag, data);
      }

      function showCard() {
        saveGameState();
        const card = data[currentCardIndex];
        ui.nameElement.textContent = card.ord;
        ui.hintElement.textContent = isPreteritum
          ? "preteritum"
          : "pres. perfektum";
        ui.nextButton.disabled = true;
        ui.progressElement.textContent = `${currentCardIndex + 1}/${
          data.length
        }`;
        ui.answerElement.value = isPreteritum ? "" : "har ";

        const translation = currentCardTranslation();
        if (translation) {
          ui.translationElement.textContent = translation;
          ui.translationElement.hidden = false;
        } else {
          ui.translationElement.textContent = "";
          ui.translationElement.hidden = true;
        }

        ui.answerElement.focus();
      }

      function handleAnswerInput() {
        const input = ui.answerElement.value.trim().toLowerCase().replace(/\s+/g, " ");
        const correct = currentCardWord().toLowerCase().replace(/\s+/g, " ");
        ui.nextButton.disabled = input !== correct;
      }
      

      function handleDontKnowButton() {
        ui.answerElement.value = currentCardWord();
        ui.answerElement.focus();
        ui.nextButton.disabled = false;
      }

      function handleNextButton() {
        if (!ui.nextButton.disabled) {
          if (isPreteritum) {
            isPreteritum = false;
          } else {
            isPreteritum = true;
            currentCardIndex++;
            if (currentCardIndex === data.length) restart();
          }
          showCard();
        }
      }

      return {
        showCard,
        handleAnswerInput,
        handleDontKnowButton,
        handleNextButton,
      };
    }

    const tag = "verbLita";
    const ui = {
      nameElement: getElement("name"),
      translationElement: getElement("translation"),
      hintElement: getElement("hint"),
      answerElement: getElement("answer"),
      dontKnowButton: getElement("dont-know"),
      nextButton: getElement("next"),
      progressElement: getElement("progress"),
    };

    const data = verbLitaData;
    const savedData = getData(tag);
    const savedState = getState(tag);

    if (!savedData) {
      data.sort(() => Math.random() - 0.5);
      saveData(tag, data);
    }

    const actualData = getData(tag) || data;

    const game = createFlashcard(tag, ui, actualData, savedState);

    ui.answerElement.addEventListener("input", () => game.handleAnswerInput());
    ui.dontKnowButton.addEventListener("click", () =>
      game.handleDontKnowButton()
    );
    ui.nextButton.addEventListener("click", () => game.handleNextButton());

    document.addEventListener("keydown", (e) => {
      if (e.key === "F1") game.handleDontKnowButton();
      else if (e.key === "Enter") game.handleNextButton();
    });

    game.showCard();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4 py-12">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl px-8 py-10 text-center relative">
          <h1 id="name" className="text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">
            Verbkort
          </h1>

          <p
            id="translation"
            className="text-base text-slate-500 italic mb-6 transition-opacity duration-300 ease-in-out"
          ></p>

          <div className="flex flex-col items-center gap-3">
            <label
              htmlFor="answer"
              id="hint"
              className="text-blue-600 text-lg font-medium"
            ></label>

            <input
              type="text"
              id="answer"
              placeholder="Svar her..."
              className="w-full text-center border border-gray-300 rounded-xl px-5 py-3 text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all duration-300"
            />
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              id="dont-know"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 rounded-xl text-base font-semibold shadow-inner transition-all duration-200"
            >
              Vet ikke
            </button>

            <button
              id="next"
              disabled
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-base font-semibold shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Neste
            </button>
          </div>

          <p
            id="progress"
            className="text-sm text-slate-500 font-mono mt-6 tracking-wide"
          ></p>
        </div>
        
        </main><Footer />
    </>
  );
}
